import { useEffect, useState } from "react"
import BookCard from "../components/BookCard"
import { TBook } from "../types"
import axios from "axios"
import Pagination from "../components/Pagination"
import { useSearchParams } from "react-router-dom"

export default function Books() {
    const [books, setBooks] = useState<TBook[]>([])
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        console.log()
        axios.get("/books?title=" + searchParams.get('title')).then((response) => {
            setBooks(response.data['hydra:member'])
        })
    }, [searchParams])
    return (
        <div className="">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">books</h2>

                <input type="search" onChange={
                    (e) => {
                        setSearchParams({ title: e.target.value })
                    }
                } name="search" id="search" className="block w-full px-5 py-2 m-5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search books" />
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {books.map((book) => (
                        <BookCard book={book}></BookCard>
                    ))}
                </div>
            </div>
        </div >
    )
}