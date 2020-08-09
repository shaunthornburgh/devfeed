<?php

namespace App\EventListener;

use App\Entity\FollowNotification;
use App\Entity\LikeNotification;
use App\Entity\Post;
use App\Entity\User;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\OnFlushEventArgs;
use Doctrine\ORM\Events;
use Doctrine\ORM\PersistentCollection;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class NotificationSubscriber implements EventSubscriber
{

    /**
     * @var
     */
    private $tokenStorage;

    /**
     * @var null|User
     */
    private $user;

    public function __construct(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::onFlush
        ];
    }

    public function onFlush(OnFlushEventArgs $args)
    {
        $em = $args->getEntityManager();
        $uow = $em->getUnitOfWork();

        /** @var PersistentCollection $collectionUpdate */
        foreach ($uow->getScheduledCollectionUpdates() as $collectionUpdate) {
            if ($collectionUpdate->getOwner() instanceof Post && 'likedBy' !== $collectionUpdate->getMapping()['fieldName']) {
                $insertDiff = $collectionUpdate->getInsertDiff();

                if (!count($insertDiff)) {
                    return;
                }

                /** @var $post */
                $post = $collectionUpdate->getOwner();
                if ($this->isCurrentUser($post->getUser())) {
                    continue;
                }

                $notification = new LikeNotification();
                $notification->setUser($post->getUser());
                $notification->setPost($post);
                $notification->setLikedBy(reset($insertDiff));

                $em->persist($notification);

                $uow->computeChangeSet(
                    $em->getClassMetadata(LikeNotification::class),
                    $notification
                );
            }

            if($collectionUpdate->getOwner() instanceof User && 'following' == $collectionUpdate->getMapping()['fieldName']) {
                $insertDiff = $collectionUpdate->getInsertDiff();

                if (!count($insertDiff)) {
                    return;
                }

                /** @var User $user */
                $user = $collectionUpdate->getOwner();

                $notification = new FollowNotification();
                $notification->setUser(reset($insertDiff));
                $notification->setFollowedBy($user);

                $em->persist($notification);

                $uow->computeChangeSet(
                    $em->getClassMetadata(FollowNotification::class),
                    $notification
                );
            }
        }
    }

    /**
     * Checks if the provided user is the authenticated one.
     *
     * @param User $user
     *
     * @return bool
     */
    private function isCurrentUser(User $user): bool
    {
        return $user->getId() === $this->getCurrentUser()->getId();
    }

    /**
     * Returns the currently authenticated user.
     *
     * @return User
     */
    private function getCurrentUser(): User
    {
        if ($this->user === null) {
            if ($this->tokenStorage->getToken() instanceof TokenInterface) {
                $this->user = $this->tokenStorage->getToken()->getUser();
            }

            if (!$this->user instanceof User) {
                $this->user = new User();
            }
        }

        return $this->user;
    }
}