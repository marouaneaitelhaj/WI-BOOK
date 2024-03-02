<?php

namespace App\DataFixtures;

use App\Entity\Book;
use App\Factory\AuthorFactory;
use App\Factory\BookFactory;
use App\Factory\ReviewFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        AuthorFactory::new()->createMany(300);
        BookFactory::new()->createMany(100);
        ReviewFactory::new()->createMany(1000);
    }
}
