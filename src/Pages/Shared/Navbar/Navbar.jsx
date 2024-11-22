import { Link } from "react-router-dom";
import logo from "../../../assets/Banner/hiii.png"
import { FaMailBulk, FaMailchimp, FaWhatsapp, FaYahoo } from "react-icons/fa";


const Navbar = () => {
    const navOption = <>
    <li> <Link to="/" ><button className="btn btn-secondary">Home</button></Link></li>
    <li> <Link to="/about"  ><button className="btn btn-secondary active:bg-slate-500">Home</button></Link></li>
    <li> <Link to="/airportPrice">Airport Price</Link></li>
    <li> <Link to="/getAQuotation">Get A Quote</Link></li>
    <li> <Link to="/popularCars">Services</Link></li>
    <li> <Link to="/contact">Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-90 max-w-screen-lg text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>
                    </div>
                    
                  <div className="flex">
                  <div className="md:w-44 w-24">
                   <Link to="/"> <img className="rounded-lg " src={logo} alt="" /></Link>
                   </div>
                    <div className="flex ml-16 md:mt-6 mt-2 gap-4">
                        <Link to="https://wa.me/441865692930?Hello%there!" target="_blank"> <FaWhatsapp className="w-10 h-10 rounded-full bg-green-700"></FaWhatsapp></Link>
                        <Link to="mailto:fhjahid720@gmail.com?subject=Feedback&body=Hi%20there!"> <FaMailBulk className="w-10 h-10 "></FaMailBulk></Link>
                    </div>
                  </div>
                   
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}

                    </ul>
                </div>
               
            </div>

        </div>
    );
};

export default Navbar;