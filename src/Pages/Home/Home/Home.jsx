import About from "../About/About";
import AirportPrice from "../AirportPrice/AirportPrice";
import Contact from "../Contact/Contact";
import GetAQuotation from "../GetAQuotation/GetAQuotation";
import PopularCars from "../PopularCars/PopularCars";
import Reviews from "../Reviews/Reviews";
 
import Banner from "./Banner/Banner";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>

            </Helmet>
           
            <Banner></Banner>
            <About></About>
            
            <PopularCars></PopularCars>
            <AirportPrice></AirportPrice>
            <GetAQuotation></GetAQuotation>
            <Reviews></Reviews>
            <Contact></Contact>

        </div>
    );
};

export default Home;