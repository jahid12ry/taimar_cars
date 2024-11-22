import Cover from "../../Shared/Cover/Cover";
 
import meet from "../../../assets/Banner/meet.jpg"
 
const Meet = () => {
    return (
        <div>
        <div>
        <Cover img={meet} title="Meet and Greet"></Cover>
        <div className="hero bg-gray-950 py-6">
<div className="hero-content text-center">
<div className="max-w-md">
  <h1 className="md:text-5xl text-2xl font-bold text-white">We can provide </h1>
  <p className="text-white py-6">
  Your driver will be waiting for you holding a sign with your name on at our meeting point in Airport when you arrive. We use several flight monitoring systems and we will be aware if your flight is delayed or due to arrive early. You can enjoy your flight in the knowledge that we will be waiting for you at the correct time of arrival.
  </p>

</div>
</div>
</div>
       
    </div>
        
    </div>
    );
};

export default Meet;