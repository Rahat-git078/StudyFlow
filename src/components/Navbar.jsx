
import { FiBookOpen } from "@react-icons/all-files/fi/FiBookOpen";
import { Link } from "react-router";

const Navbar = () => {
     
    return (
        
        <div className="bg-[#f0f1eb]">
            <nav className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
                <a href="/" className="flex items-center gap-2 font-bold text-xl text-[#0e7c66]" aria-label="StudyFlow home">
                    <FiBookOpen className="h-8 w-8" aria-hidden="true" />
                    <span>StudyFlow</span>
                </a>
                <ul className="hidden items-center gap-6 text-slate-700 md:flex">
                    <li><a href="#features">Features</a></li>
                    <Link to="/features"><li><a href="#features">How It Works</a></li></Link>
                    <Link to="/how-it-works"><li><a href="#how-it-works">How It Works</a></li></Link>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
                <div className="flex items-center gap-2">
                   <Link to="/signin">

                    <button className="cursor-pointer rounded-md bg-[#0e7c66] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#0a5d4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e7c66]">Log in</button>

                   </Link> 
                    <button className="cursor-pointer rounded-md bg-[#0e7c66] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#0a5d4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e7c66]">Get started</button>
                </div>
            </nav>
        </div>

    )

}

export default Navbar;