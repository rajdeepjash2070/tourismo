import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Img1 from "./rajdeepimg.png"
import Img2 from "./adityarajimg.jpeg"
import Img3 from "./anurajimg.png"
import Img4 from "./tauhidimg.jpeg"
import "./Home.css"
const Home = () => {
  const id=useParams().id;
  const [hospitals, sethospitals] = useState();
  const [stxt,setstxt]=useState('');
  useEffect(() => {
    const fetchhospitals = async () => {
      const res = await fetch('https://emergecarebackend.onrender.com/hospitals');
      const data = await res.json();
      sethospitals(data);
      console.log(hospitals);
    };
    fetchhospitals();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://emergecarebackend.onrender.com/hospitals/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        const updatedhospitals = hospitals.filter((hospital) => hospital._id !== id);
        sethospitals(updatedhospitals);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a href="#" class="logo" style={{color:"green",fontSize:"25px",marginLeft:"100px"}}><i class="fa-solid fa-mountain-city"></i> <span style={{marginTop:"-10px",marginLeft:"5px"}}>Tourismo</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/dashboard/${id}`} style={{color:"white"}}>Dashboard</a>
      </li>
     
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href={`/emergency/${id}`} style={{color:"white"}}>Local Guides</a>
      </li>
      <li class="nav-item text-center mt-2">
        <a class="nav-link" href="/login" style={{color:"white"}}>Log out</a>
      </li>
     
    </ul>
  </div>

</nav>
<div>
    <ul style={{display:"flex",marginLeft:"330px"}}>
    <li class="nav-item text-center mt-2">
        <a class="nav-link p-4" href={`/languages/${id}`} style={{color:"white",fontSize:"20px",backgroundColor:"orangered"}}>Languages</a>
      </li>
     
      <li class="nav-item text-center mt-2">
        <a class="nav-link p-4" href={`/locations/${id}`} style={{color:"white",fontSize:"20px",backgroundColor:"rgb(0, 202, 165)"}}>Locations</a>
      </li>
      <li class="nav-item text-center mt-2">
        <a class="nav-link p-4" href="/availablity" style={{color:"white",fontSize:"20px",backgroundColor:"grey"}}>Availablity</a>
      </li>
     
    </ul>
  </div>
    <div className="post-section" style={{marginTop:"100px"}}>
   <form className="home-searchcontainer">
<input placeholder="Search by Languages and Locations" type="text" className="pl-4" name="text" style={{fontSize:"17px"}} onChange={event=>{setstxt(event.target.value)}}/>

   </form>
    </div>
   <div className="cards-container">
    <div className="row">
<div className="col-md-3">
<div class="card">
  <img src={Img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rajdeep Jash</h5>
    <p class="card-text">deer tourism pvt. ltd</p>

    <a href="#" class="btn btn-primary">Details</a>
  </div>
</div>
</div>
<div className="col-md-3">
<div class="card">
  <img src={Img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Aditya Raj</h5>
    <p class="card-text">Raj tours pvt. ltd</p>
    <a href="#" class="btn btn-primary">Details</a>
  </div>
</div>
</div>
<div className="col-md-3">
<div class="card">
  <img src={Img3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Anuraj Kumar</h5>
    <p class="card-text">individual</p>
    <a href="#" class="btn btn-primary">Details</a>
  </div>
</div>
</div>
<div className="col-md-3">
<div class="card">
  <img src={Img4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Tauhid Rahaman</h5>
    <p class="card-text">individual</p>
    <a href="#" class="btn btn-primary">Details</a>
  </div>
</div>
</div>
    </div>
   </div>
    </div>
  )
}

export default Home;