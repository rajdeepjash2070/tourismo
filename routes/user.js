const router = require("express").Router();
const User=require("../userDetails");

router.post("/register", async (req, res) => {
    try {
      // Upload image to cloudinary
      
  
      // Create new user
      let user = new User({
    name:req.body.name,
    age:req.body.age,
    address:req.body.address,
    bp:req.body.bp,
    email:req.body.email,
    sugerlevel:req.body.sugerlevel,
    password: req.body.password,
    longi:req.body.longi,
      lati:req.body.lati,
      });
      // Save user
      await user.save();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  });
  
  router.get("/", async (req, res) => {
    try {
      let user = await User.find();
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      // Find user by id
      let user = await User.findById(req.params.id);
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  });


  
  router.post("/userbookbed/:id",async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      console.log(req.params.id);
     
      const newUser = {
         hospitalname:req.body.hospitalname,
         date:req.body.date,
         charge:req.body.charge,
         address:req.body.address,
         contactnumber:req.body.contactnumber,
         bedtype:req.body.bedtype,
    }
  
  console.log(req.body.hospitalname)
      user.bedsarr.push(newUser);
      await user.save();
      res.status(200).json({
        success: true,
        message: "Appointment added successfully.",
        user,
        newUser
        
    });
    } catch (err) {
      console.log(err);
    }
  
    
  });
  

  module.exports = router;