
import Cover from "../../Shared/Cover/Cover"; 
import coverImg from "../../../assets/Banner/0.jpg";

 
 
const AboutMore = () => {
     
    return (
        <div>
         
          <Cover img={coverImg} title="about more"></Cover>
          <div className="hero bg-gray-950 py-6">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-white">We can provide </h1>
      <p className="text-white py-6">
      Our service includes airport transfers, cruise transfers, corporate travel, business journeys, film sets, special days out such as Bicester Village, Soho farmhouse, Silverstone Circuit, trips to Oxford University, London or other City other special occasions. Our vehicles have FREE WIFI upon request for our clients to enjoy during their journey.
      </p>
    
    </div>
  </div>
</div>
       
   
           
        </div>
    );
};

export default AboutMore;