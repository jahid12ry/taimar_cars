import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
 
import './About.css'
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <SectionTitle subHeading="This is a taxi company" heading="about us"></SectionTitle>
            <div className="md:flex md:ml-20">
                <div>
                     <div className="md:w-[500px] px-10 text-center">
                        <h1 className=" text-white text-xl">
                        TaiMar cars is a family run taxi service based in Oxford. We provide luxury and affordable vehicles according to your needs. We have experienced, professional and friendly taxi drivers who will take you to your destination with care and safety. <br /><br />
                        Our customers are always our main priority and we love to offer our customer best professional services. We pride ourselves on providing a reliable, punctual and confidential taxi service to our clients.
                           <br />
                        </h1>
                     </div>
                     <Link  to="/about-more"><button className="btn btn-outline border-0 border-b-4 md:ml-48 ml-32 my-4 hover:bg-purple-600 text-red-500 uppercase ">Read more</button></Link>
               
                </div>
                <div className="AboutImgBack-Phone ">
                  
              
                </div>
            </div>
           
        </div>
    );
};

export default About;