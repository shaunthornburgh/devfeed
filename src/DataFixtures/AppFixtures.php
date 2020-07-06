<?php

namespace App\DataFixtures;

use App\Entity\Post;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 10; $i++) {
            $post = new Post();
            $post->setText('Some random text ' . rand(0, 100));
            $post->setTime(new \DateTime());
            $manager->persist($post);
        }

        $manager->flush();
    }
}
