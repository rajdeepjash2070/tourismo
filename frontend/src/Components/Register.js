import React, { useState,useEffect } from 'react'
import "./Bookappointment.css"
 import axios from "axios"
 import { useNavigate,useParams } from 'react-router-dom'
 import Buttonclick from "./button-click.wav"
 import useSound from 'use-sound';
 import useGeoLocation from "../Components/LocationGeo";
import "./Register.css"
 const Bookappointment = () => {

    const location = useGeoLocation();
   const history=useNavigate();
   const [inputs,setInputs]=useState({
    name:"",
   email:"",
   password:"",
   country:"",
   state:"",
  district:"",
   phnumber:"",
   age:"",
 longi:"",
 lati:"",

   });
   //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
   const [checked,setChecked]=useState(false);
   const handleChange=(e)=>{
     setInputs((prevState)=>({
 ...prevState,
 [e.target.name]:e.target.value
     }))
   }
   const sendRequest=async()=>{
     await axios.post(`https://emergecarebackend.onrender.com/users/register`,{
        name:String(inputs.name), 
      country:String(inputs.country),
      state:String(inputs.state),
      district:String(inputs.district),
      phnumber:String(inputs.phnumber),
      email:String(inputs.email),
      age:String(inputs.age),
      password:String(inputs.password),
      longi:String(location.coordinates.lng),
      lati:String(location.coordinates.lat)

     }).then(res=>res.data);
   }
   //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
   const handleSubmit=(e)=>{
     e.preventDefault();
   
     sendRequest().then(()=>history(`/success`))
   }


   const [audio]=useSound(Buttonclick);

   location.loaded
   ? JSON.stringify(location.coordinates)
   : console.log("Location data not available yet.")
   return (
     <div>
        
        <h1  className='text-center bg-warning text-white'>Register Yourself for Proper Guidence in Tourism</h1>
        

         <form className='p-4 register-form' onSubmit={handleSubmit}>
         
      <div className="mb-3">
        <input
        
          className="form-control"
          placeholder="Your Name"
          type="text"
          
          value={inputs.name}
          onChange={handleChange}
          name="name"
        />
        
      </div>
      {/* <div className="mb-3">
        <input
          className="form-control"
          placeholder="Your Gender"
          type="text"
          
          value={inputs.gender}
          onChange={handleChange}
          name="gender"
        />
        
      </div> */}

      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" value={inputs.gender}
          onChange={handleChange}
          name="gender"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Your Gender
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{fontSize:"17px",color:"green"}}>
    <a class="dropdown-item" href="#">Male</a>
    <a class="dropdown-item" href="#">Female</a>
    <a class="dropdown-item" href="#">Transgender</a>
  </div>
</div>
     
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Your Country"
      type="text"
      
      value={inputs.country}
      onChange={handleChange}
      name="country"
    />
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Your State"
      type="text"
      
      value={inputs.state}
      onChange={handleChange}
      name="state"
    />
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Your District"
      type="text"
      
      value={inputs.district}
      onChange={handleChange}
      name="district"
    />
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Give Your Phone number so we can contact you"
      type="text"
      
      value={inputs.phnumber}
      onChange={handleChange}
      name="phnumber"
    />
      </div>
      
 
  
  
  
  
 
 

  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Your Age"
  type="text"
 
  value={inputs.age}
  onChange={handleChange}
  name="age"
/>
  </div>
 
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Your Email"
  type="text"
  
  value={inputs.email}
  onChange={handleChange}
  name="email"
/>
  </div>
  <div className="mb-3">
        <input
          className="form-control"
          placeholder="Your password"
          type="text"
          
          value={inputs.password}
          onChange={handleChange}
          name="password"
        />
        
      </div>

   {/* state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds */}
   
   <button type="submit" class="btn btn-primary" onClick={audio}>Submit</button>
 </form>
        
      <div className='symptoms-container'>


      </div>

         </div>
   )
 }

 export default Bookappointment