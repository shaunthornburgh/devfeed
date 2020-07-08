<?php


namespace App\Controller;


use App\Entity\Post;
use App\Entity\User;
use App\Form\PostType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Routing\Annotation\Route;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile/{username}", name="profile_index")
     * @param User $user
     * @param Request $request
     * @return RedirectResponse|Response
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function index(Request $request, User $user)
    {
        $post = new Post();
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$this->isGranted('ROLE_USER')) {
                throw new UnauthorizedHttpException('Access denied');
            }

            $entityManager = $this->getDoctrine()->getManager();

            $post->setUser($this->getUser() );
            $entityManager->persist($post);
            $entityManager->flush();

            return new RedirectResponse($request->getUri());
        }

        $response = $this->renderView(
                'app/profile/index.html.twig', [
                    'posts' => $user->getPosts(),
                    'form' => $form->createView(),
                    'user' => $user
                ]
            );

        return new Response($response);
    }

    /**
     * @Route("/profile/{username}/followers", name="profile_followers")
     * @param User $user
     * @return RedirectResponse|Response
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function followers(User $user)
    {
        $response = $this->renderView(
            'app/profile/followers.html.twig', [
                'user' => $user
            ]
        );

        return new Response($response);
    }

    /**
     * @Route("/profile/{username}/following", name="profile_following")
     * @param User $user
     * @return RedirectResponse|Response
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function following(User $user)
    {
        $response = $this->renderView(
            'app/profile/following.html.twig', [
                'user' => $user
            ]
        );

        return new Response($response);
    }
}