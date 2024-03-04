import { Link } from "react-router-dom";

export default function () {
    return (
        <div className="h-[600px] flex justify-center items-center">
            <div className="bg-[#2F2E2E] w-screen h-[250px] flex items-center">
                <img className="h-[500px] ml-72" src="https://static.wixstatic.com/media/2e2a49_140ba1569d4a49ba8cdfac408ede5aa4~mv2.png" alt="" />
                <div className="flex items-center w-full flex-col">
                    <p className="my-1 text-[#E8E4C5] text-[70px]">
                        A Path Of Life
                    </p>
                    {/* <p className="my-1 font-light  text-[#E8E4C5]">From WiBook!</p> */}
                    <Link to='/books' className="my-1 border px-5 py-2 text-[#E8E4C5] rounded-md hover:border-[#2F2E2E] hover:text-[#2F2E2E] hover:bg-[#E8E4C5] border-[#E8E4C5]">See All</Link>
                </div>
            </div>
        </div>
    )
}