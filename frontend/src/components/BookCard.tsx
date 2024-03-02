import { Link } from "react-router-dom";
import { TBook } from "../types";

export default function BookCard(props: { book: TBook }) {
    return (
        <div className="m-3 bg-zinc-900 flex relative justify-center items-center rounded-tr-lg">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="w-full flex justify-end absolute ">
                    <span className=" mr-2 mt-2 font-bold w-40 p-4 rounded-full bg-yellow-400 text-black truncate">#{props.book.genre}</span>
                </div>
                <div>
                    <img className="object-cover w-52  h-80 hover:brightness-75" src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" />
                </div>
                <div className="px-5 py-3">
                    <div className=" text-white text-lg mb-2 w-40">
                        <p className="truncate">{props.book.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}