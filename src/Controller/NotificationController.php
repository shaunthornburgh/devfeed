<?php

namespace App\Controller;

use App\Repository\NotificationRepository;
use Symfony\Component\Serializer\Normalizer\AbstractObjectNormalizer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Security("is_granted('ROLE_USER')")
 * @Route("/notification")
 */
class NotificationController extends AbstractController
{
    /**
     * @var NotificationRepository
     */
    private $notificationRepository;

    public function __construct(NotificationRepository $notificationRepository)
    {
        $this->notificationRepository = $notificationRepository;
    }

    /**
     * @Route("/unread-count",
     *     name="notifications_unread",
     *     options={"expose"=true}
     * )
     * @return JsonResponse
     */
    public function unreadCount()
    {
        return new JsonResponse([
            'count' => $this->notificationRepository->findUnseenByUser($this->getUser())
        ]);
    }

    /**
     * @Route("/all",
     *     name="notifications_all",
     *     options={"expose"=true}
     * )
     * @return JsonResponse
     */
    public function notifications()
    {
        return new JsonResponse([
            'notifications' =>
                $this->notificationRepository->findBy([
                    'seen' => false,
                    'user' => $this->getUser()
                ]),
        ]);
    }

    /**
     * @Route("/acknowledge-all",
     *     name="notifications_acknowledge_all",
     *     options={"expose"=true}
     * )
     * @return JsonResponse
     */
    public function acknowledgeAll()
    {
        $this->notificationRepository->markAllAsReadByUser($this->getUser());
        $this->getDoctrine()->getManager()->flush();

        return new JsonResponse();
    }
}
