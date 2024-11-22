import img2 from '../../../../assets/Banner/7.jpg';
import img3 from '../../../../assets/Banner/4.jpg';
import img4 from '../../../../assets/Banner/3.jpg';
import img5 from '../../../../assets/Banner/13.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
 
    return (
       <div className=' md:h-[700px]'>
         <div className='flex'>
            <div className='  w-1/2'>
            <div className='mt-48 md:ml-32 ml-8'>
                    <img className='md:w-80 w-44 md:h-44 h-28 shadow-white shadow-lg ' src={img4} alt="" />

                </div>
                <div className=' absolute md:-mt-20 ml-2 -mt-8'>
                    <img className='md:w-72 w-28 md:h-44 h-24 shadow-white shadow-lg' src={img5} alt="" />

                </div>
            </div>

            <div className='flex w-1/2 md:ml-16 ml-6'>
                <div className='mt-48 '>
                    <img className='md:w-80 w-32 md:h-44 h-28 shadow-white shadow-lg ' src={img3} alt="" />

                </div>
                <div className='md:mt-72 mt-[272px] absolute md:ml-40 ml-12'>
                    <img className='md:w-72 w-28 md:h-44 h-24 shadow-white shadow-lg' src={img2} alt="" />

                </div>
                

            </div>
            
                
        </div>
        <div className='md:w-96 w-[137px]  md:mt-4 md:ml-[300px] ml-28  font-bold text-center p-4 md:text-4xl text-sm'> <h1 className='text-white shadow-lg p-2 shadow-purple-600 hover:text-purple-600'>Enjoy A luxury and affordable way to travel</h1> 
        <Link  to="/getAQuotation"><button className="btn btn-outline  md:text-xl text-sm border-0 border-b-4 ml-2 my-4  hover:bg-purple-600 text-red-500 uppercase ">Get A Quote</button></Link>
        </div>
       </div>
    );
};

export default Banner;