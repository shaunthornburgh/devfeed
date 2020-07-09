<?php


namespace App\Controller;

use App\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Security("is_granted('ROLE_USER')")
 * @Route("/following")
 */
class FollowingController extends AbstractController
{
    /**
     * @Route("/follow/{id}", name="following_follow")
     * @param User $user
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function follow(User $user)
    {
        /** @var User $authenticatedUser */
        $authenticatedUser = $this->getUser();

        if ($user->getId() !== $authenticatedUser) {
            $authenticatedUser->follow($user);

            $this->getDoctrine()->getManager()->flush();
        }

        return $this->redirectToRoute(
            'profile_index',
            ['username' => $user->getUsername()]
        );
    }

    /**
     * @Route("/unfollow/{id}", name="following_unfollow")
     * @param User $user
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function unfollow(User $user)
    {
        /** @var User $authenticatedUser */
        $authenticatedUser = $this->getUser();

        if ($user->getId() !== $authenticatedUser) {
            $authenticatedUser->getFollowing()
                ->removeElement($user);

            $this->getDoctrine()->getManager()->flush();
        }

        return $this->redirectToRoute(
            'profile_index',
            ['username' => $user->getUsername()]
        );
    }
}