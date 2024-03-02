import { useEffect, useState } from "react"
import BookCard from "../components/BookCard"
import { TBook } from "../types"
import axios from "axios"
import Pagination from "../components/Pagination"
import { useSearchParams } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroll-component"

export default function Books() {
    const [books, setBooks] = useState<TBook[]>([])
    const [searchParams, setSearchParams] = useSearchParams({ title: "" });
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        setBooks([])
        setPage(1)
        if (searchParams.get('title') !== "") {
            fetchData()
        }
    }, [searchParams])

    function fetchData() {
        axios.get("/books?page=" + page + "&title=" + searchParams.get('title')).then((response) => {
            setBooks(prevBooks => [...prevBooks, ...response.data['hydra:member']]);
            setPage(prevPage => prevPage + 1);
        });
    }

    return (
        <InfiniteScroll
            dataLength={books.length}
            next={fetchData}
            hasMore={true}
            loader={<p>Loading...</p>}
            endMessage={<p>No more data to load.</p>}
        >
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">books</h2>

                <input type="search" value={searchParams.get('title') || ''} onChange={
                    (e) => {
                        setSearchParams({ title: e.target.value })
                    }
                } name="search" id="search" className="block w-full px-5 py-2 m-5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search books" />
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                    {books.map((book) => (
                        <BookCard key={book.id + page} book={book}></BookCard>
                    ))}
                </div>
            </div>
        </InfiniteScroll>
    )
}