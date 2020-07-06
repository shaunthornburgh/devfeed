<?php


namespace App\Controller;

use App\Entity\Post;
use App\Form\PostType;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouterInterface;
use Twig\Environment;

/**
 * @Route("/post")
 */
class PostController
{
    /**
     * @var Environment
     */
    private $twig;

    /**
     * @var PostRepository
     */
    private $postRepository;

    /**
     * @var FormFactoryInterface
     */
    private $formFactory;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @var RouterInterface
     */
    private $router;

    /**
     * @var FlashBagInterface
     */
    private $flashBag;

    /**
     * PostController constructor.
     * @param Environment $twig
     * @param PostRepository $postRepository
     * @param FormFactoryInterface $formFactory
     * @param EntityManagerInterface $entityManager
     * @param RouterInterface $router
     */
    public function __construct(
        Environment $twig,
        PostRepository $postRepository,
        FormFactoryInterface $formFactory,
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        FlashBagInterface $flashBag)
    {
        $this->twig = $twig;
        $this->postRepository = $postRepository;
        $this->formFactory = $formFactory;
        $this->entityManager = $entityManager;
        $this->router = $router;
        $this->flashBag = $flashBag;
    }

    /**
     * @Route("/", name="post_index")
     * @param Request $request
     * @return Response
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function index(Request $request)
    {
        $post = new Post();
        $post->setTime(new \DateTime());
        $form = $this->formFactory->create(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($post);
            $this->entityManager->flush();

            return new RedirectResponse($request->getUri());
        }

        $posts = $this->postRepository->findBy([], ['time' => 'DESC']);

        return new Response(
            $this->twig->render(
                'post/index.html.twig', [
                    'posts' => $posts,
                    'form' => $form->createView()
                ]
            )
        );
    }

    /**
     * @Route("/{id}", name="post_show")
     * @param Post $post
     * @param Request $request
     * @return RedirectResponse|Response
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function show(Post $post, Request $request)
    {
        $form = $this->formFactory->create(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return new RedirectResponse($request->getUri());
        }

        return new Response(
            $this->twig->render(
                'post/show.html.twig', [
                    'post' => $post,
                    'form' => $form->createView()
                ]
            )
        );
    }

    /**
     * @Route("/delete/{id}", name="post_delete")
     * @param Post $post
     * @return RedirectResponse
     */
    public function delete(Post $post)
    {
        $this->entityManager->remove($post);
        $this->entityManager->flush();

        $this->flashBag->add('notice', 'Your post has been removed');

        return new RedirectResponse(
            $this->router->generate('post_index')
        );
    }
}