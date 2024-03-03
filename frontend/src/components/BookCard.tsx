import { Link } from "react-router-dom";
import { TBook } from "../types";

export default function BookCard(props: { book: TBook }) {
    const pictures : string[] = [
        "https://static.wixstatic.com/media/2e2a49_da30973d55744cdd98ffd271be5c367c~mv2.png",
        "https://static.wixstatic.com/media/2e2a49_140ba1569d4a49ba8cdfac408ede5aa4~mv2.png",
        "https://static.wixstatic.com/media/2e2a49_31515e7b084f4c0ab6bc38877c46df16~mv2.png",
    ]
    function getRandomPict(): string {
        const randomIndex = Math.floor(Math.random() * pictures.length);
        return pictures[randomIndex];
    }
    return (
        <Link to={'/' + props.book.id} className="rounded-2xl w-60 h-[450px] m-5 cursor-pointer">
            {/* <span className="bg-green-400 rounded-t-full truncate h-[50px] px-5 py-3 cursor-none hover:rounded-t-3xl transition-all duration-100">{props.book.genre}</span> */}
            <img src={getRandomPict()} className="w-full rounded-md object-cover h-[300px]  hover:h-[350px] transition-all duration-100" alt="" />
            <div className="w-full rounded-md object-cover h-[50px]">
                <p className="text-[#2C2C2C] truncate mx-5 font-semibold text-xl my-2">{props.book.title}</p>
                <p className="text-gray-600 truncate font-thin mx-5 my-2 text-xs">
                    {props.book.author.firstName + '  ' + props.book.author.lastName}
                </p>
            </div>
        </Link>
    )
}