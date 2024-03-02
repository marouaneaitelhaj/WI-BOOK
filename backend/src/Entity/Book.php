<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use App\Repository\BookRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BookRepository::class)]
#[ApiResource(
    operations: [
        new GetCollection(
            normalizationContext: ['groups' => ['book:all']]
        ),
        new Get(
            normalizationContext: ['groups' => ['book:one']]
        )
    ]
)]
#[ApiFilter(
    SearchFilter::class,
    properties: ['title' => 'ipartial', 'author.id' => 'exact', 'genre' => 'ipartial']
)]
class Book
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['book:all', 'book:one'])]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(['book:all', 'book:one'])]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['book:all', 'book:one'])]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['book:all', 'book:one'])]
    private ?\DateTimeInterface $publicationDate = null;

    #[ORM\Column(length: 50)]
    #[Groups(['book:all', 'book:one'])]
    private ?string $genre = null;

    #[ORM\ManyToOne(targetEntity: Author::class, inversedBy: 'books')]
    #[Groups(['book:all', 'book:one'])]
    private ?Author $author = null;

    #[ORM\OneToMany(targetEntity: Review::class, mappedBy: 'book')]
    #[Groups(['book:one'])]
    public Collection $reviews;
    

    public function getAuthor(): ?Author
    {
        return $this->author;
    }

    public function setAuthor(?Author $author): static
    {
        $this->author = $author;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPublicationDate(): ?\DateTimeInterface
    {
        return $this->publicationDate;
    }

    public function setPublicationDate(\DateTimeInterface $publicationDate): static
    {
        $this->publicationDate = $publicationDate;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(string $genre): static
    {
        $this->genre = $genre;

        return $this;
    }
    #[ORM\PrePersist]
    public function setPublicationDateValue()
    {
        $this->publicationDate = new \DateTime();
    }
}
