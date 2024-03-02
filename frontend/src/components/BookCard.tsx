import { Link } from "react-router-dom";
import { TBook } from "../types";

export default function BookCard(props: { book: TBook }) {
    return (
        <Link to={'/' + props.book.id} className="rounded-2xl w-60 h-[450px] cursor-pointer">
            <span className="bg-green-400 rounded-t-full truncate h-[50px] px-5 py-3 cursor-none hover:rounded-t-3xl">{props.book.genre}</span>
            <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" className="w-full rounded-md object-cover h-[350px]" alt="" />
            <div className="w-full rounded-md object-cover h-[50px]">
                <p className="text-white truncate mx-5 font-semibold text-xl my-2">{props.book.title}</p>
                <p className="text-white truncate font-thin mx-5 my-2 text-xs">
                    {props.book.author.firstName + '  ' + props.book.author.lastName}
                </p>
            </div>
        </Link>
    )
}