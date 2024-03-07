import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {
    return (
        <ul className="flex justify-around py-5 bg-[#2C2C2C]" data-cy="navbar-container">
            <div className="w-1/3  flex justify-center" data-cy="logo-container">
                <Link to="/" className="w-full flex justify-center">
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[0.5px] flex justify-center items-center rounded-md  w-7 h-7">W</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[1.0px] flex justify-center items-center rounded-md  w-7 h-7">I</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[1.5px] flex justify-center items-center rounded-md  w-7 h-7">B</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[2.0px] flex justify-center items-center rounded-md  w-7 h-7">O</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[2.5px] flex justify-center items-center rounded-md  w-7 h-7">O</span>
                    <span className="hover:bg-[#E4DFC2] bg-[#ABA89F] mx-[3.0px] flex justify-center items-center rounded-md  w-7 h-7">K</span>
                </Link>
            </div>
            <div className="w-2/3 flex justify-around" data-cy='router-container'>
                <Link to="/" data-cy='home-router' className="text-[#ABA89F] font-bold hover:text-white cursor-pointer">Home</Link>
                <Link to="/books" data-cy='books-router' className="text-[#ABA89F] font-bold hover:text-white cursor-pointer">Books</Link>
            </div>
        </ul>
    )
}