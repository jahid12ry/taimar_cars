import { createBrowserRouter  } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home/Home'
import PopularCars from '../Pages/Home/PopularCars/PopularCars'
import AboutMore from '../Pages/Home/About/AboutMore'
import Services from '../Pages/Home/PopularCars/Services'
import Meet from '../Pages/Home/PopularCars/Meet'
import Cost from '../Pages/Home/PopularCars/Cost'
import Available from '../Pages/Home/PopularCars/Available'
import Fast from '../Pages/Home/PopularCars/Fast'
import Contact from '../Pages/Home/Contact/Contact'
import GetAQuotation from '../Pages/Home/GetAQuotation/GetAQuotation'
import AirportPrice from '../Pages/Home/AirportPrice/AirportPrice'
import About from '../Pages/Home/About/About'

export const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/popularCars',
          element:<PopularCars></PopularCars>
        }
        ,
         
        {
          path:'/about-more',
          element:<AboutMore></AboutMore>
        },
        {
          path:"/services",
          element:<Services></Services>
        },
        {
          path:"/meet",
          element:<Meet></Meet>
        },
        {
          path:"/cost",
          element:<Cost></Cost>
        },
        {
          path:"/available",
          element:<Available></Available>
        },
        {
          path:"/fast",
          element:<Fast></Fast>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/getAQuotation",
          element:<GetAQuotation></GetAQuotation>
        },
        {
          path:"/airportPrice",
          element:<AirportPrice></AirportPrice>
        },
        {
          path:"/about",
          element:<About></About>
        }
    ]
   
  }
])