import BookCard from "../components/BookCard"
import { TBook } from "../types"

export default function Book() {
    const books: TBook[] = [
        {
            id: 1,
            title: "The Great Gatsby",
            description: "A story of the American Dream and its illusions.",
            publicationDate: "April 10, 1925",
            genre: "Fiction",
            author: {
                id: 1,
                firstName: "F. Scott",
                lastName: "Fitzgerald",
                bibliography: "American author known for his novels and short stories.",
                deathDate: "December 21, 1940",
                books: []
            }
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            description: "A powerful story of racial injustice and moral growth.",
            publicationDate: "July 11, 1960",
            genre: "Fiction",
            author: {
                id: 2,
                firstName: "Harper",
                lastName: "Lee",
                bibliography: "American novelist best known for this novel.",
                deathDate: "February 19, 2016",
                books: []
            }
        },
    ]
    return (
        <div className="">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">books</h2>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {books.map((book) => (
                        <BookCard book={book}></BookCard>
                    ))}
                </div>
            </div>
        </div>
    )
}