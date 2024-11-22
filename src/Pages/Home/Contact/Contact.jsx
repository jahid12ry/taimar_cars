import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {   FaAddressBook, FaInstagram, FaMobile } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
 

const Contact = () => {
    
    return (
        <div className="p-4">
            <SectionTitle subHeading="Feel Free To Contact" heading="Contact With Us"></SectionTitle>
             <div className=" bg-gray-950">
                
                  <div className="md:flex p-16 text-center">
                    <div className="text-white border-x-4 md:w-72 p-4">
                        <h1 className="text-2xl">Contact By <br /> Moblie <br />01865692930</h1>
                         <div className="bg-blue-800 w-20 p-4 m-4 md:ml-[72px] ml-10 rounded-xl hover:bg-black">
                         <Link to="https://www.facebook.com/profile.php?id=100078520842992"><FaMobile className="text-yellow-400 h-24 w-12"></FaMobile></Link>
                         </div>
                    </div>
                    <div className="text-white border-x-4 md:w-72 p-4 md:ml-8">
                      <h1 className="text-2xl">Contact <br /> By <br />Instagram</h1>
                        <div className="bg-blue-800 w-20 p-4 m-4 md:ml-[72px] ml-10 rounded-xl hover:bg-black">
                        <Link to="https://www.facebook.com/profile.php?id=100078520842992"><FaInstagram className="text-yellow-400 h-24 w-12"></FaInstagram> </Link>
                        </div>
                    </div>
                    <div className="text-white border-x-4 md:w-72 MD:ml-8 p-4">
                        <h1 className="text-2xl">Contact <br /> By <br />Facebook</h1>
                        <div className="bg-blue-800 w-20 p-4 m-4 md:ml-[72px] ml-10 rounded-xl hover:bg-black">
                        <Link to="https://www.facebook.com/profile.php?id=100078520842992">  <FaFacebookF  className="text-yellow-400 h-24 w-12"></FaFacebookF></Link>
                        </div>
                    </div>
                </div>


                <div className="text-white border-y-4 w-96 md:ml-[305px] -ml-6 p-4">
                    <h1 className="text-2xl text-center">Address</h1>
                    <FaAddressBook className="ml-[138px] m-2 w-20 p-2 h-20 rounded-lg hover:bg-yellow-600"></FaAddressBook>
                    <h1 className=" text-center text-lg">John Eccles House, Science Park, <br /> Robert Robinson Ave, Littlemore, <br />Oxford OX4 4GP</h1>
                </div>
                <div className="p-10 md:ml-80 -ml-6">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.913870040092!2d-1.2175562738924288!3d51.71631827186161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c1283c008bc1%3A0x87532618d6557081!2sOxford%20Data%20Recovery!5e0!3m2!1sen!2sbd!4v1727162960119!5m2!1sen!2sbd"
                 width="300" height="250"   allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

             </div>
        </div>
    );
};

export default Contact;