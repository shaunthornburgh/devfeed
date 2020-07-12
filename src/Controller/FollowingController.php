<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/following")
 */
class FollowingController extends AbstractController
{
    /**
     * @Route("/follow/{id}",
     *     name="following_follow",
     *     options={"expose"=true}
     * )
     * @param User $user
     * @return JsonResponse
     */
    public function follow(User $user)
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();

        if (!$currentUser instanceof User) {
            return new JsonResponse([], Response::HTTP_UNAUTHORIZED);
        }

        if ($user->getId() !== $currentUser) {
            $currentUser->follow($user);

            $this->getDoctrine()->getManager()->flush();
        }

        return new JsonResponse([
            'following' => $currentUser->getFollowing()->contains($user)
        ]);
    }

    /**
     * @Route("/unfollow/{id}",
     *     name="following_unfollow",
     *     options={"expose"=true}
     * )
     * @param User $user
     * @return JsonResponse
     */
    public function unfollow(User $user)
    {
        /** @var User $currentUser */
        $currentUser = $this->getUser();

        if (!$currentUser instanceof User) {
            return new JsonResponse([], Response::HTTP_UNAUTHORIZED);
        }

        if ($user->getId() !== $currentUser) {
            $currentUser->getFollowing()
                ->removeElement($user);

            $this->getDoctrine()->getManager()->flush();
        }

        return new JsonResponse([
            'following' => $currentUser->getFollowing()->contains($user)
        ]);
    }
}