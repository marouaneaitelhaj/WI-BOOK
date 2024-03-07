<?php

namespace App\Tests;

use ApiPlatform\Symfony\Bundle\Test\ApiTestCase;
use App\Factory\AuthorFactory;
use Zenstruck\Foundry\Test\Factories;
use Zenstruck\Foundry\Test\ResetDatabase;

class AuthorsTest extends ApiTestCase
{
    use ResetDatabase, Factories;

    public function testGetAllAuthors(): void
    {
        AuthorFactory::createMany(100);
        $response = static::createClient()->request('GET', '/api/authors');
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['@id' => '/api/authors']);
        $this->assertJsonContains(['@context' => '/api/contexts/Author']);
        $this->assertJsonContains(['hydra:totalItems' => 100]);
    }

    public function testCreateAuthor(): void
    {
        $response = static::createClient()->request('POST', '/api/authors', [
            'json' => [
                'firstName' => 'Jane',
                'lastName' => 'Doe',
                'bibliography' => 'Some bio',
            ],
            'headers' => [
                'Content-Type' => 'application/ld+json',
            ],
        ]);
        $this->assertResponseStatusCodeSame(201);
        $this->assertJsonContains(['@id' => '/api/authors/1']);
        $this->assertJsonContains(['@type' => 'Author']);
        $this->assertJsonContains(['firstName' => 'Jane']);
        $this->assertJsonContains(['lastName' => 'Doe']);
        $this->assertJsonContains(['bibliography' => 'Some bio']);
    }

    public function testUpdateAuthor(): void
    {
        $author = AuthorFactory::createOne();
        $response = static::createClient()->request('PUT', '/api/authors/' . $author->getId(), [
            'json' => [
                'firstName' => 'Jane',
                'lastName' => 'Doe',
                'bibliography' => 'Some bio',
            ],
            'headers' => [
                'Content-Type' => 'application/ld+json',
            ],
        ]);
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['@id' => '/api/authors/' . $author->getId()]);
        $this->assertJsonContains(['@type' => 'Author']);
        $this->assertJsonContains(['id' => $author->getId()]);
        $this->assertJsonContains(['firstName' => 'Jane']);
        $this->assertJsonContains(['lastName' => 'Doe']);
        $this->assertJsonContains(['bibliography' => 'Some bio']);

        $response = static::createClient()->request('GET', '/api/authors/' . $author->getId());
        $this->assertJsonContains(['firstName' => 'Jane']);
        $this->assertJsonContains(['lastName' => 'Doe']);
        $this->assertJsonContains(['bibliography' => 'Some bio']);
    }

    public function testDeleteAuthor(): void
    {
        $author = AuthorFactory::createOne();
        $response = static::createClient()->request('DELETE', '/api/authors/' . $author->getId());
        $this->assertResponseIsSuccessful();
        $this->assertResponseStatusCodeSame(204);

        // echo "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
        // $responqskldjqklsdjse = static::createClient()->request('GET', '/api/authors/' . $author->getId());
        // $this->assertResponseStatusCodeSame(404);
    }

    public function testGetAuthor(): void
    {
        $author = AuthorFactory::createOne();
        $response = static::createClient()->request('GET', '/api/authors/' . $author->getId());
        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(['id' => $author->getId()]);
        $this->assertJsonContains(['firstName' => $author->getFirstName()]);
        $this->assertJsonContains(['lastName' => $author->getLastName()]);
        $this->assertJsonContains(['bibliography' => $author->getBibliography()]);
        $this->assertJsonContains(['@type' => 'Author']);
    }
}
