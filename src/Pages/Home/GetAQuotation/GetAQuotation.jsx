import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
 
const GetAQuotation = () => {
  const [startDate, setStartDate] = useState(new Date());

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zbv1qfj', 'template_hlqjmlg', form.current, {
        publicKey: 'tCKam4l1_QEABK6DS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div className="py-4">
            <SectionTitle subHeading="Please Write Here" heading="Get A Quotatiion"></SectionTitle>
            <div className="hero min-h-screen"
                 style={{
               backgroundImage: "url(https://i.ibb.co.com/TWXWwLv/2.jpg)",}}>

  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-neutral-content text-center ">


 
  <div className="hero-content opacity-80 ">
     
    <div className="card bg-gray-950 md:w-96 shrink-0 shadow-2xl">
      <form ref={form} onSubmit={sendEmail} className="card-body md:ml-12">
        <div className="form-control">
          <label className="label">
            
            <input type="text" name="from_name" placeholder="Name" className="input input-bordered  text-black" required />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
      
            <input type="email" name="from_email" placeholder="email" className="input input-bordered   text-black " required />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
             
            <input type="number" name="number"  placeholder="Phone Number" className="input input-bordered  text-black  " required />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            
            <input type="text" name="pickUpPoint" placeholder="Pick Up Point" className="input input-bordered  text-black" required />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
        
            <input type="text" name="destination" placeholder="Destination" className="input input-bordered text-black" required />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
         
            
          
            <DatePicker className="input input-bordered  text-black" selected={startDate} onChange={(date) => setStartDate(date)} name="date"/>
             
          </label>
        </div>

        <div className="form-control">
          <label className="label">
        
          
            <input type="number" name="passenger" placeholder="Number of passengers" className="input input-bordered  text-black" required />
          </label>
        </div>
        
        <div className="form-control w-56 mt-6">
        <button type="submit" className="btn btn-outline border-0 border-b-4 ml-2 my-4 hover:bg-purple-600 text-red-500 uppercase ">Send</button> 
         
        </div>
      </form>
    </div>
  </div>

    


  </div>
</div>



      
        </div>
    );
};

export default GetAQuotation;