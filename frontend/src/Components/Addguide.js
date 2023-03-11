import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGeoLocation from "./LocationGeo";
import "./Addguide.css"
const Addguide = () => {
  var datetime=()=>{
var showdate=new Date();
var displaydate=showdate.toDateString();
var displaytime=showdate.getHours()+':'+showdate.getMinutes();
  }
  const history = useNavigate();
  const location = useGeoLocation();
  const [data, setData] = useState({
    name: "",
    organame:"",
    updationdate:"",
    updationtime:"",
    address:"",
    image: "",
    description: "",
    phnumber: "",
    state:"",
    district:"",
    pin:"",
    email:"",
    experienceyears:"",
    experienceplaces:"",
    storyteller:"",
    goodlistener:"",
    languages:"",
    workingdays:"",
    workinghours:"",
    workonholiday:"",
    workonfestivals:"",
    package1:"",
    package2:"",
    package3:"",
    package4:"",
    package5:"",
    specializationcourse:"",
    highlightedplaces:"",
    time1:"",
    time2:"",
    time3:"",
    time4:"",
    longi:"",
    lati:"",
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("organame", data.organame);
      formData.append("address", data.address);
      formData.append("description", data.description);
      formData.append("phnumber", data.phnumber);
      formData.append("weblink", data.weblink);
      formData.append("specializationcourse", data.specializationcourse);
      formData.append("state", data.state);
      formData.append("district", data.district);
      formData.append("experienceyears", data.experienceyears);
      formData.append("experienceplaces", data.experienceplaces);
      formData.append("storyteller", data.storyteller);
      formData.append("goodlistener", data.goodlistener);
      formData.append("languages", data.languages);
      formData.append("workingdays", data.workingdays);
      formData.append("workinghours", data.workinghours);
      formData.append("workingfestivals", data.workonfestivals);
      formData.append("workingholiday", data.workonholiday);
      formData.append("package1", data.package1);
      formData.append("package2", data.package2);
      formData.append("package3", data.package3);
      formData.append("package4", data.package4);
      formData.append("package5", data.package5);
      formData.append("time1", data.time1);
      formData.append("time2", data.time2);
      formData.append("time3", data.time3);
      formData.append("time4", data.time4);
      formData.append("pin", data.pin);
      formData.append("highlightedplaces", data.highlightedplaces);
      formData.append("updationdate", data.displaydate);
      formData.append("updationtime", data.displaytime);
      formData.append("email", data.email);
      formData.append("longi", location.coordinates.lng);
      formData.append("lati", location.coordinates.lat);
     
      const res = await fetch(`https://emergecarebackend.onrender.com/hospitals`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({   name: "",
        organame:"",
        address:"",
        updationdate:"",
        updationtime:"",
        image: "",
        description: "",
        phnumber: "",
        state:"",
        district:"",
        pin:"",
        email:"",
        experienceyears:"",
        experienceplaces:"",
        storyteller:"",
        goodlistener:"",
        languages:"",
        workingdays:"",
        workinghours:"",
        workonholiday:"",
        workonfestivals:"",
        package1:"",
        package2:"",
        package3:"",
        package4:"",
        package5:"",
        highlightedplaces:"",
        specializationcourse:"",
        time1:"",
    time2:"",
    time3:"",
    time4:"",
        longi:"",
        lati:""});
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  location.loaded
  ? JSON.stringify(location.coordinates)
  : console.log("Location data not available yet.")
  return (
    <div>
    <h1 className="text-center" style={{backgroundColor:"yellow"}}>Please fillup the form with your accurate aetails</h1>
    <div className="row">
<div className="col-md-6 m-4" style={{width:"550px"}}>
<div className="mt-4">
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Name of the Organisation if you have"
          type="text"
          name="organame"
          value={data.organame}
          onChange={handleChange("organame")}
        />
        
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Your Name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
        
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Address of the Organisation or you are an individual then your address"
      type="text"
      name="address"
      value={data.address}
      onChange={handleChange("address")}
    />
      </div>
      </div>
      <div className="mb-2">
      <input
      className="form-control"
      placeholder="Contact Numbers"
      type="text"
      name="phnumber"
      value={data.phnumber}
      onChange={handleChange("phnumber")}
    />
      </div>
      
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Your Specialization Courses/Course"
  type="text"
  name="specializationcourse"
  value={data.specializationcourse}
  onChange={handleChange("specializationcourse")}
/>
  </div>

  <div className="mb-2">
  <input
  className="form-control"
  placeholder="State"
  type="text"
  name="state"
  value={data.state}
  onChange={handleChange("state")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="District"
  type="text"
  name="district"
  value={data.district}
  onChange={handleChange("district")}
/>
  </div>
 </div>
 <div className="col-md-6">
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="The Pincode of the area"
  type="text"
  name="pin"
  value={data.pin}
  onChange={handleChange("pin")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Your Guide Experience in Years"
  type="text"
  name="experienceyears"
  value={data.experienceyears}
  onChange={handleChange("experienceyears")}
/>
  </div>
  <div className="mb-2">
  <input
  style={{height:"100px"}}
  className="form-control"
  placeholder="The places you have visited (e.g-The Number of Places if it is too huge otherwise name of the places"
  type="text"
  name="experiencepplaces"
  value={data.experienceplaces}
  onChange={handleChange("experienceplaces")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Your Working Days"
  type="text"
  name="workingdays"
  value={data.workingdays}
  onChange={handleChange("workingdays")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Your Working Hours"
  type="text"
  name="workinghours"
  value={data.workinghours}
  onChange={handleChange("workinghours")}
/>
  </div>
  <div class="form-group mb-3">
    <label for="exampleFormControlSelect1">You work on festivals?</label>
    <select id="inputState" className="form-select"  name="workonfestivals" value={data.workonfestivals} onChange={handleChange("workonfestivals")}>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
      
            </select>
  </div>
  <div class="form-group mb-3">
    <label for="exampleFormControlSelect1">You work on Holiday?</label>
    <select id="inputState" className="form-select"  name="workonholiday" value={data.workonfestivals} onChange={handleChange("workonholiday")}>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
      
            </select>
  </div>

  
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Time Slot 1 (Example: 10.00 A.M to 12.00 P.M)"
  type="text"
  name="time1"
  value={data.time1}
  onChange={handleChange("time1")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Time Slot 2"
  type="text"
  name="time2"
  value={data.time2}
  onChange={handleChange("time2")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Time Slot 3"
  type="text"
  name="time3"
  value={data.time3}
  onChange={handleChange("time3")}
/>
  </div>
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Time Slot 4"
  type="text"
  name="time4"
  value={data.time4}
  onChange={handleChange("time4")}
/>
  </div>
  
  <div className="mb-2">
  <input
  className="form-control"
  placeholder="Your Email"
  type="text"
  name="email"
  value={data.email}
  onChange={handleChange("email")}
/>
  </div>
  <div className="mb-2">
  <input
  style={{height:"100px"}}
  className="form-control"
  placeholder="Highlighted Places"
  type="text"
  name="highlightedplaces"
  value={data.highlightedplaces}
  onChange={handleChange("highlightedplaces")}
/>
  </div>


</div>
<div className="col-md-6 m-4">
<div className="mb-2">
      <input
      className="form-control"
      style={{height:"200px"}}
      placeholder="Give a description"
      type="text"
      name="description"
      value={data.description}
      onChange={handleChange("description")}
    />
      </div>
      
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
</div>
     
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
         Post
        </button>
      </div>
    </div>
  );
};

export default Addguide;