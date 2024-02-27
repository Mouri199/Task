import { FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
    return (
        <div className="lg:flex justify-center  gap-36 bg-red-600 h-[200px] lg:text-2xl text-sm mt-5">
            <div className="flex items-center gap-2 text-white lg:pt-0 pt-10">
                <IoCall className="lg:text-4xl text-2xl" ></IoCall>
                <h1>Toll free 1800 200 1234</h1>
            </div>
            <div className="flex items-center gap-2 text-white lh:my-0 my-5">
                <FaFacebook className="lg:text-4xl text-2xl" ></FaFacebook>
                <h1>www.facebook.com/cripumps</h1>
            </div>

            <div className="flex items-center gap-2 text-white">
                <TfiWorld className="lg:text-4xl text-2xl" ></TfiWorld>
                <h1>www.crigroups.com</h1>
            </div>
        </div>
    );
};

export default Footer;