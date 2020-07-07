<?php

namespace App\DataFixtures;

use App\Entity\Post;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $this->loadUsers($manager);
        $this->loadPosts($manager);
    }

    private function loadPosts(ObjectManager $manager)
    {
        for ($i = 0; $i < 10; $i++) {
            $post = new Post();
            $post->setText('Some random text ' . rand(0, 100));
            $post->setTime(new \DateTime());
            $post->setUser($this->getReference('shaunthornburgh'));
            $manager->persist($post);
        }

        $manager->flush();
    }

    private function loadUsers(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername('shaunthornburgh');
        $user->setFullName('Shaun Thornburgh');
        $user->setEmail('personal@shaunthornburgh.com');
        $user->setPassword(
            $this->passwordEncoder->encodePassword(
                $user,
                'pass1234'
            )
        );

        $this->addReference('shaunthornburgh', $user);

        $manager->persist($user);
        $manager->flush();
    }
}
