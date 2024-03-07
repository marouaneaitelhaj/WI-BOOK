<?php

namespace App\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
use App\Factory\AuthorFactory;
use App\Factory\BookFactory;
use App\Factory\ReviewFactory;
use Zenstruck\Foundry\Test\Factories;
use Zenstruck\Foundry\Test\ResetDatabase;

class ReviewsTest extends ApiTestCase
{

    use ResetDatabase, Factories;


    public function testGetAllReviews(): void
    {
        $author = AuthorFactory::createMany(100);
        $book = BookFactory::createMany(100);
        $review = ReviewFactory::createMany(100);
        $response = static::createClient()->request('GET', '/api/reviews');
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['@id' => '/api/reviews']);
        $this->assertJsonContains(['@context' => '/api/contexts/Review']);
        $this->assertJsonContains(['hydra:totalItems' => 100]);
    }

    public function testGetOneReview(): void
    {
        $author = AuthorFactory::createOne();
        $book = BookFactory::createOne();
        $review = ReviewFactory::createOne();
        $response = static::createClient()->request('GET', '/api/reviews/' . $review->getId());
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['@id' => '/api/reviews/' . $review->getId()]);
        $this->assertJsonContains(['@type' => 'Review']);
        $this->assertJsonContains(['id' => $review->getId()]);
    }

    public function testCreateReview(): void
    {
        $author = AuthorFactory::createOne();
        $book = BookFactory::createOne();
        $response = static::createClient()->request('POST', '/api/reviews', [
            'json' => [
                'fullName' => 'John Doe',
                'email' => 'dkqsd@example.com',
                'comment' => 'Some comment',
                'creationDate' => '2021-01-01T00:00:00+00:00',
                'book' => '/api/books/' . $book->getId(),
            ],
            'headers' => [
                'Content-Type' => 'application/ld+json',
            ],
        ]);
        $this->assertResponseStatusCodeSame(201);
        $this->assertJsonContains(['@type' => 'Review']);
        $this->assertJsonContains(['fullName' => 'John Doe']);
        $this->assertJsonContains(['email' => 'dkqsd@example.com']);
        $this->assertJsonContains(['comment' => 'Some comment']);
        $this->assertJsonContains(['book' => '/api/books/' . $book->getId()]);
    }

    public function testUpdateReview(): void
    {
        $author = AuthorFactory::createOne();
        $book = BookFactory::createOne();
        $review = ReviewFactory::createOne();
        $response = static::createClient()->request('PUT', '/api/reviews/' . $review->getId(), [
            'json' => [
                'fullName' => 'John Doe',
                'email' => 'newdkqsd@example.com',
                'comment' => 'Some comment',
                'creationDate' => '2021-01-01T00:00:00+00:00',
                'book' => '/api/books/' . $book->getId(),
            ],
            'headers' => [
                'Content-Type' => 'application/ld+json',
            ],
        ]);
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['@id' => '/api/reviews/' . $review->getId()]);
        $this->assertJsonContains(['@type' => 'Review']);
        $this->assertJsonContains(['id' => $review->getId()]);
        $this->assertJsonContains(['fullName' => 'John Doe']);
        $this->assertJsonContains(['email' => 'newdkqsd@example.com']);
    }

    public function testDeleteReview(): void
    {
        $author = AuthorFactory::createOne();
        $book = BookFactory::createOne();
        $review = ReviewFactory::createOne();
        $response = static::createClient()->request('DELETE', '/api/reviews/' . $review->getId());
        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(204);
        // $response = static::createClient()->request('GET', '/api/reviews/' . $review->getId());
        // $this->assertResponseStatusCodeSame(404);
    }
}
