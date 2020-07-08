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
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Symfony\Component\Security\Core\Security;
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
     * @var AuthorizationCheckerInterface
     */
    private $authorizationChecker;

    /**
     * @var TokenStorageInterface
     */
    private $tokenStorage;

    /**
     * @var Security
     */
    private $security;

    /**
     * PostController constructor.
     * @param Environment $twig
     * @param PostRepository $postRepository
     * @param FormFactoryInterface $formFactory
     * @param EntityManagerInterface $entityManager
     * @param RouterInterface $router
     * @param FlashBagInterface $flashBag
     * @param AuthorizationCheckerInterface $authorizationChecker
     * @param TokenStorageInterface $tokenStorage
     * @param Security $security
     */
    public function __construct(
        Environment $twig,
        PostRepository $postRepository,
        FormFactoryInterface $formFactory,
        EntityManagerInterface $entityManager,
        RouterInterface $router,
        FlashBagInterface $flashBag,
        AuthorizationCheckerInterface $authorizationChecker,
        TokenStorageInterface $tokenStorage,
        Security $security)
    {
        $this->twig = $twig;
        $this->postRepository = $postRepository;
        $this->formFactory = $formFactory;
        $this->entityManager = $entityManager;
        $this->router = $router;
        $this->flashBag = $flashBag;
        $this->authorizationChecker = $authorizationChecker;
        $this->tokenStorage = $tokenStorage;
        $this->security = $security;
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
            if (!$this->security->isGranted('ROLE_USER')) {
                throw new UnauthorizedHttpException('Access denied');
            }

            $post->setUser($this->tokenStorage->getToken()->getUser() );
            $this->entityManager->persist($post);
            $this->entityManager->flush();

            return new RedirectResponse($request->getUri());
        }

        $posts = $this->postRepository->findBy([], ['time' => 'DESC']);

        return new Response(
            $this->twig->render(
                'app/post/index.html.twig', [
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
            if (!$this->authorizationChecker->isGranted('edit', $post)) {
                throw new UnauthorizedHttpException('Access denied');
            }

            $post->setUser($this->tokenStorage->getToken()->getUser() );
            $this->entityManager->flush();

            return new RedirectResponse($request->getUri());
        }

        return new Response(
            $this->twig->render(
                'app/post/show.html.twig', [
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
        if (!$this->authorizationChecker->isGranted('delete', $post)) {
            throw new UnauthorizedHttpException('Access denied');
        }

        $this->entityManager->remove($post);
        $this->entityManager->flush();

        $this->flashBag->add('notice', 'Your post has been removed');

        return new RedirectResponse(
            $this->router->generate('post_index')
        );
    }
}