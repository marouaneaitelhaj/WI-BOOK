<?php

namespace App\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
use App\Entity\Author;
use App\Entity\Book;
use App\Factory\AuthorFactory;
use App\Factory\BookFactory;
use Zenstruck\Foundry\Test\Factories;
use Zenstruck\Foundry\Test\ResetDatabase;

class BooksTest extends ApiTestCase
{
    use ResetDatabase, Factories;


    public function testGetAllBooks(): void
    {
        AuthorFactory::createMany(100);
        BookFactory::createMany(100);
        $response = static::createClient()->request('GET', '/api/books');
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['@id' => '/api/books']);
        $this->assertJsonContains(['@context' => '/api/contexts/Book']);
        $this->assertJsonContains(['hydra:totalItems' => 100]);
    }

    public function testCreateBook(): void
    {
        $author = AuthorFactory::createOne();
        $response = static::createClient()->request('POST', '/api/books', [
            'json' => [
                'title' => 'The Book',
                'description' => 'Some description',
                'publicationDate' => '2021-01-01T00:00:00+00:00',
                'genre' => 'Action',
                'author' => '/api/authors/' . $author->getId(),
            ],
            'headers' => [
                'Content-Type' => 'application/ld+json',
            ],
        ]);
        $this->assertResponseStatusCodeSame(201);
        $this->assertJsonContains(['@type' => 'Book']);
        $this->assertJsonContains(['title' => 'The Book']);
        $this->assertJsonContains(['description' => 'Some description']);
        $this->assertJsonContains(['genre' => 'Action']);
        $this->assertJsonContains(['author' => '/api/authors/' . $author->getId()]);
    }

    public function testUpdateBook(): void
    {
        $author = AuthorFactory::createOne();
        $book = BookFactory::createOne();
        $response = static::createClient()->request('PUT', '/api/books/' . $book->getId(), [
            'json' => [
                'title' => 'The Book',
                'description' => 'Some description',
                'publicationDate' => '2021-01-01T00:00:00+00:00',
                'genre' => 'Action',
                'author' => '/api/authors/' . $author->getId(),
                'reviews' => [],
            ],
            'headers' => [
                'Content-Type' => 'application/ld+json',
            ],
        ]);
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['@id' => '/api/books/' . $book->getId()]);
        $this->assertJsonContains(['@type' => 'Book']);
        $this->assertJsonContains(['id' => $book->getId()]);
        $this->assertJsonContains(['title' => 'The Book']);
        $this->assertJsonContains(['description' => 'Some description']);
        $this->assertJsonContains(['genre' => 'Action']);
        $this->assertJsonContains(['author' => '/api/authors/' . $author->getId()]);
    }

    public function testDeleteBook(): void
    {
        $author = AuthorFactory::createOne();
        $book = BookFactory::createOne();
        $response = static::createClient()->request('DELETE', '/api/books/' . $book->getId());
        $this->assertResponseStatusCodeSame(204);
        // $response = static::createClient()->request('GET', '/api/books/' . $book->getId());
        // $this->assertResponseStatusCodeSame(404);
    }

    public function testGetOneBook(): void
    {
        $author = AuthorFactory::createOne();
        $book = BookFactory::createOne();
        $response = static::createClient()->request('GET', '/api/books/' . $book->getId());
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['@id' => '/api/books/' . $book->getId()]);
        $this->assertJsonContains(['@type' => 'Book']);
        $this->assertJsonContains(['id' => $book->getId()]);
        $this->assertJsonContains(['title' => $book->getTitle()]);
        $this->assertJsonContains(['description' => $book->getDescription()]);
        $this->assertJsonContains(['genre' => $book->getGenre()]);
        $this->assertJsonContains(['author' => [
            '@id' => '/api/authors/' . $author->getId(),
            '@type' => 'Author',
            'id' => $author->getId(),
            'firstName' => $author->getFirstName(),
            'lastName' => $author->getLastName(),
            'bibliography' => $author->getBibliography(),
        ]]);
    }
}
