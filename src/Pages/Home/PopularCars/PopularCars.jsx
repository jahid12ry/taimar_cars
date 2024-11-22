 
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
 
import popular1 from "../../../assets/Banner/10.jpg"
import cost from "../../../assets/Banner/cost.jpg"
import meet from "../../../assets/Banner/meet.jpg"
import acc from "../../../assets/Banner/acc.jpg"
import open from "../../../assets/Banner/open.jpg"
import { Link } from "react-router-dom";
 
const PopularCars = () => {
    
    return (
        <div className="mb-12">
          
            <SectionTitle
                subHeading="Choose any of them"
                heading="Services">

            </SectionTitle>
            <div className="grid md:grid-cols-3 gap-10">

            <div className="card bg-gray-950 ml-5 w-80 shadow-xl">
             <figure className="px-10 pt-10">
                <img src={popular1}className="rounded-xl" />
             </figure>
             <div className="card-body items-center text-center">
                <h2 className="card-title text-white">Services</h2>
                 <p className="text-white">We provide transfers to and from all major airport in the UK. </p>
               <div className="card-actions">
                   <Link  to="/services"><button className="btn btn-outline border-0 border-b-4 ml-2 my-4 hover:bg-purple-600 text-red-500 uppercase ">view more</button></Link>
               </div>
             </div>
            </div>

            <div className="card bg-gray-950 w-80 ml-5 shadow-xl">
             <figure className="px-10 pt-10">
                <img src={meet}className="rounded-xl" />
             </figure>
             <div className="card-body items-center text-center">
                <h2 className="card-title text-white">Meet and Greet</h2>
                 <p className="text-white">We provide transfers to and from all major airport in the UK. </p>
               <div className="card-actions">
                   <Link  to="/meet"><button className="btn btn-outline border-0 border-b-4 ml-2 my-4 hover:bg-purple-600 text-red-500 uppercase ">view more</button></Link>
               </div>
             </div>
            </div>

            <div className="card bg-gray-950 w-80 ml-5 shadow-xl">
             <figure className="px-10 pt-10">
                <img src={cost}className="rounded-xl" />
             </figure>
             <div className="card-body items-center text-center">
                <h2 className="card-title text-white">Cost Effective</h2>
                 <p className="text-white">Our price is at a competitive fixed rate, so you can be assured of a stress free journey all at times. </p>
               <div className="card-actions">
                   <Link  to="/cost"><button className="btn btn-outline border-0 border-b-4 ml-2 my-4 hover:bg-purple-600 text-red-500 uppercase ">view more</button></Link>
               </div>
             </div>
            </div>

            <div className="card bg-gray-950 w-80 ml-5 shadow-xl">
             <figure className="px-10 pt-10">
                <img src={acc}className="rounded-xl" />
             </figure>
             <div className="card-body items-center text-center">
                <h2 className="card-title text-white">Fast Response</h2>
                 <p className="text-white">Call us or request an online quotation and request and the traveller will receive an email or text confirmation as quickly as possible. [Email always within the hour.].</p>
               <div className="card-actions">
                   <Link  to="/fast"><button className="btn btn-outline border-0 border-b-4 ml-2 my-4 hover:bg-purple-600 text-red-500 uppercase ">view more</button></Link>
               </div>
             </div>
            </div>

            <div className="card bg-gray-950 w-80 ml-5  shadow-xl">
             <figure className="px-10 pt-10">
                <img src={open}className="rounded-xl" />
             </figure>
             <div className="card-body items-center text-center">
                <h2 className="card-title text-white">Availability</h2>
                 <p className="text-white">BUSINESS HOURS <br />
Open <br /> Everyday <br />
08:00 – 23:30 </p>
               <div className="card-actions">
                   <Link  to="/available"><button className="btn btn-outline border-0 border-b-4 ml-2 my-4 hover:bg-purple-600 text-red-500 uppercase ">view more</button></Link>
               </div>
             </div>
            </div>


        
            </div>
        </div>
    );
};

export default PopularCars;