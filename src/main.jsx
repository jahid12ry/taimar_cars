import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routers'

import { HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <div className=' bg-black'>
      <div className='max-w-screen-lg mx-auto'>
        <RouterProvider router={router}></RouterProvider>

      </div>

    </div>

    </HelmetProvider>
  
  </StrictMode>,
)
