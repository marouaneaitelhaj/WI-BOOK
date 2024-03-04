import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {
    return (
        <ul className="flex justify-around py-5 bg-[#2C2C2C]">
            <div className="w-1/3  flex justify-center">
                <Link to="/" className="w-full flex justify-center">
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[0.5px] flex justify-center items-center rounded-md  w-7 h-7">W</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[1.0px] flex justify-center items-center rounded-md  w-7 h-7">I</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[1.5px] flex justify-center items-center rounded-md  w-7 h-7">B</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[2.0px] flex justify-center items-center rounded-md  w-7 h-7">O</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[2.5px] flex justify-center items-center rounded-md  w-7 h-7">O</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[3.0px] flex justify-center items-center rounded-md  w-7 h-7">K</span>
                </Link>
            </div>
            <div className="w-2/3 flex justify-around">
                <Link to="/" className="text-[#ABA89F] font-bold hover:text-white cursor-pointer">Home</Link>
                <Link to="/books" className="text-[#ABA89F] font-bold hover:text-white cursor-pointer">Books</Link>
                {/* <Link to="/" className="text-white font-bold hover:text-orange-500 cursor-pointer">About</Link> */}
            </div>
        </ul>
    )
}