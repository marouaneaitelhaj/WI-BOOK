import { useEffect } from "react"
import BookCard from "../components/BookCard"
import { useSearchParams } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "@/store/store"
import { reset, setPage } from "@/store/books/bookSlice"
import { getBooks } from "@/store/books/bookActions"

export default function Books() {
    const { books } = useSelector((state: RootState) => state.book)
    const [searchParams, setSearchParams] = useSearchParams({ title: "" });
    const { page } = useSelector((state: RootState) => state.book)
    const { hasMore } = useSelector((state: RootState) => state.book)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(reset())
    }, [searchParams])


    useEffect(() => {
        dispatch(getBooks({ page: page, title: searchParams.get('title') || '' }))
    }, [page, searchParams])

    return (
        <InfiniteScroll
            dataLength={books.length}
            next={() => dispatch(setPage(page + 1))}
            hasMore={hasMore}
            loader={<p className="text-white text-center py-5">Loading...</p>}
            endMessage={<p className="text-white text-center py-5">
                Nothing more to see here
            </p>}
        >
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-white text-5xl">Books</h2>

                <input type="text" value={searchParams.get('title') || ''} onChange={
                    (e) => {
                        setSearchParams({ title: e.target.value })
                    }
                } className="w-full border-none bg-white px-5 py-2 my-10 rounded-md" placeholder="Search books" />
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
                    {books.map((book) => (
                        <BookCard key={book.id + page} book={book}></BookCard>
                    ))}
                </div>
            </div>
        </InfiniteScroll>
    )
}