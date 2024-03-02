import { useEffect, useState } from "react"
import BookCard from "../components/BookCard"
import { TBook } from "../types"
import axios from "axios"

export default function Book(props: { bookId: string | undefined }) {
    const [book, setBook] = useState<TBook>()
    useEffect(() => {
        axios.get("/books/" + props.bookId).then((response) => {
            setBook(response.data)
        })
    }, [])
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <div className="flex flex-col-reverse">
                        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                            <div className="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">

                            </div>
                        </div>

                        <div className="aspect-w-1 aspect-h-1 w-full">
                            <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel">
                                <img src="https://bodleianshop.co.uk/cdn/shop/products/SpeakingVolumes.jpg?v=1646308052" alt="Angled front view with bag zipped and handles upright." className="h-full w-full object-cover object-center sm:rounded-lg"/>
                            </div>

                        </div>
                    </div>

                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{book?.title}</h1>

                        

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6 text-base text-gray-700">
                                <p>{book?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}