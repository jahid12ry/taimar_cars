import Cover from "../../Shared/Cover/Cover";
 
import Availability from "../../../assets/Banner/open.jpg"
 

const Available = () => {
    return (
        <div>
        <div>
        <Cover img={Availability} title="Availability"></Cover>
        <div className="hero bg-gray-950  py-6">
<div className="hero-content text-center">
<div className="max-w-md">
  <h1 className="md:text-5xl text-2xl font-bold text-white">We can provide </h1>
  <p className="text-white py-6">
  We provide transfers to and from all major airport in the UK. Also with our luxury taxi service you can use us for cruise transfers, corporate travel, business journeys, film sets, special days out such as Royal Ascot, Soho farmhouse, Silverstone Circuit, trips to Oxford University, London or other City tour & special occasions. Whether you are looking for Airport or long distance journey we can manage with our excellent modern car and reliable drivers. We want to create a positive first impression and make all our passengers feel safe and secure when using our taxi services.
  </p>

</div>
</div>
</div>
       
    </div>
        
    </div>
    );
};

export default Available;