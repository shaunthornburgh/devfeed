<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FollowNotificationRepository")
 */
class FollowNotification extends Notification implements \JsonSerializable
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     */
    private $followedBy;

    /**
     * @return mixed
     */
    public function getFollowedBy()
    {
        return $this->followedBy;
    }

    /**
     * @param mixed $followedBy
     */
    public function setFollowedBy($followedBy): void
    {
        $this->followedBy = $followedBy;
    }

    public function jsonSerialize()
    {
        return [
            'discr' => 'followedBy',
            'user' => $this->getFollowedBy(),
        ];
    }
}