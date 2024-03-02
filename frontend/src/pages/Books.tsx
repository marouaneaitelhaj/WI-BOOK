import { useEffect, useState } from "react"
import BookCard from "../components/BookCard"
import { TBook } from "../types"
import axios from "axios"

export default function Books() {
    const [books, setBooks] = useState<TBook[]>([])
    useEffect(() => {
            axios.get("/books").then((response) => {
                console.log(response.data)
            })
    }, [])
    return (
        <div className="">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">books</h2>

                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {books.map((book) => (
                        <BookCard book={book}></BookCard>
                    ))}
                    {books.map((book) => (
                        <BookCard book={book}></BookCard>
                    ))}
                    {books.map((book) => (
                        <BookCard book={book}></BookCard>
                    ))}
                    {books.map((book) => (
                        <BookCard book={book}></BookCard>
                    ))}
                    {books.map((book) => (
                        <BookCard book={book}></BookCard>
                    ))}
                    {books.map((book) => (
                        <BookCard book={book}></BookCard>
                    ))}
                </div>
            </div>
        </div>
    )
}