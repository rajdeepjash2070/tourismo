const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Guide = require("../models/guidemodel");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new Guide
    let guide = new Guide({
      name: req.body.name,
      address:req.body.address,
      description: req.body.description,
      phnumber: req.body.phnumber,
      state:req.body.state,
      district:req.body.district,   
      pin:req.body.pin,
      email:req.body.email,
      experienceyears:req.body.experienceyears,
      experienceplaces:req.body.experienceplaces,
      storyteller:req.body.storyteller,
      goodlistener:req.body.goodlistener,
      languages:req.body.languages,
      workingdays:req.body.workingdays,
      workinghours:req.body.workinghours,
      workonholiday:req.body.workonholiday,
      workonfestivals:req.body.workonfestivals,
      package1:req.body.package1,
      package2:req.body.package2,
      package3:req.body.package3,
      package4:req.body.package4,
      package5:req.body.package5,
      highlightedplaces:req.body.highlightedplaces,
      specializationcourse:req.body.specializationcourse,
      time1:req.body.time1,
      time2:req.body.time2,
      time3:req.body.time3,
      time4:req.body.time4,
    updationtime:req.body.updationtime,
    updationdate:req.body.updationdate,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
      longi:req.body.longi,
      lati:req.body.lati,
    });
    // Save Guide
    await guide.save();
    res.json(guide);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let guide = await Guide.find();
    res.json(guide);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find Guide by id
    let guide = await Guide.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(guide.cloudinary_id);
    // Delete Guide from db
    await guide.remove();
    res.json(guide);
  } catch (err) {
    console.log(err);
  }
});
//Everything i have to change from there so i am commenting it out


/*
router.post("/:id",async (req, res) => {
  try {
    let Guide = await Guide.findById(req.params.id);
    // Delete image from cloudinary
    
  

    const newUser = {
      usersid:req.body.userid,
      name: req.body.name,
      email:req.body.email,
      phnumber:req.body.ctnumber,
      address:req.body.address,
      age:req.body.age,
      gender:req.body.gender,
     
    height:req.body.height,
    weight:req.body.weight,
    state:req.body.state,
    district:req.body.district,
    pin:req.body.pin,
    bp:req.body.bp,
    sugerlevel:req.body.sugerlevel,
    timeslot:req.body.timeslot,
    payment:req.body.payment,
      comment:req.body.comment,
      
  }

console.log(req.body.name)
    Guide.patientarr.push(newUser);
    await Guide.save();
    res.status(200).json({
      success: true,
      message: "Review added successfully.",
      Guide,
      newUser
      
  });
  } catch (err) {
    console.log(err);
  }

  
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let Guide = await Guide.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(Guide.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }


    const data = {
      name: req.body.name || Guide.name,
      address:req.body.address || Guide.address,
      description: req.body.description || Guide.description,
      phnumber: req.body.phnumber || Guide.phnumber,
      fees:req.body.fees || Guide.fees,
      time:req.body.time || Guide.time,
      weblink:req.body.weblink || Guide.weblink,
      specialist:req.body.specialist || Guide.specialist,
      edu:req.body.edu || Guide.edu,
      state:req.body.state || Guide.state,
      district:req.body.district || Guide.district,
      postoff:req.body.postoff || Guide.postoff,
      near:req.body.near || Guide.near,
      pin:req.body.pin || Guide.pin,
      ageduration:req.body.ageduration || Guide.ageduration,
      others:req.body.others || Guide.others,
      experience:req.body.experience || dGuide.experience,
      Guides:req.body.Guides || Guide.Guides,
      email:req.body.email || Guide.email,
      avatar: result?.secure_url || Guide.avatar,
      cloudinary_id: result?.public_id || Guide.cloudinary_id,
      longi:req.body.longi || Guide.longi,
      lati:req.body.lati || Guide.lati,
    };
    Guide = await Guide.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(Guide);
  } catch (err) {
    console.log(err);
  }
});

*/

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let guide = await Guide.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(guide.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }


    const data = {

      name: req.body.name || guide.name,
      address:req.body.address || guide.address,
      description: req.body.description || guide.description,
      phnumber: req.body.phnumber || guide.phnumber,
      weblink:req.body.weblink || guide.weblink,
      specialist:req.body.specialist || guide.specialist,
      phnumber1:req.body.phnumber1 || guide.phnumber1,
      phnumber2:req.body.phnumber2 || guide.phnumber2,
      phnumber3:req.body.phnumber3 || guide.phnumber3,
      phnumber4:req.body.phnumber4 || guide.phnumber4,
      phnumber5:req.body.phnumber5 || guide.phnumber5,
      phnumber6:req.body.phnumber6 || guide.phnumber6,
      phnumber7:req.body.phnumber7 || guide.phnumber7,
      phnumber8:req.body.phnumber8 || guide.phnumber8,
      phnumber9:req.body.phnumber9 || guide.phnumber9,
      phnumber10:req.body.phnumber10 || guide.phnumber10,
     
     

    };
    guide = await Guide.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(guide);
  } catch (err) {
    console.log(err);
  }
});
router.post("/:id",async (req, res) => {
  try {
    let guide = await Guide.findById(req.params.id);
    // Delete image from cloudinary
    
  

    const newUser = {
      
      doctor1: req.body.doctor1,
      doctor2: req.body.doctor2,
      doctor3: req.body.doctor3,
      doctor4: req.body.doctor4,
      doctor5: req.body.doctor5,
      doctor6: req.body.doctor6,
      doctor7: req.body.doctor7,
      doctor8: req.body.doctor8,
      doctor9: req.body.doctor9,
      doctor10: req.body.doctor10,
   
      
  }

console.log(req.body.doctor4)
    guide.doctorarr.push(newUser);
    await guide.save();
    res.status(200).json({
      success: true,
      message: "Review added successfully.",
      guide,
      newUser
      
  });
  } catch (err) {
    console.log(err);
  }

  
});

router.put("/ambulances/:id",async (req, res, next) => {
  try {
    let guide = await Guide.findById(req.params.id);
    // Delete image from cloudinary
  


    const data = {

      

    };
    guide = await Guide.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(guide);
  } catch (err) {
    console.log(err);
  }
});




router.post("/:id",async (req, res) => {
  try {
    let guide = await Guide.findById(req.params.id);
    // Delete image from cloudinary
    
  

    const newUser = {
      
      name: req.body.name,
      comment: req.body.comment,
      rating: req.body.rating,
     
      
  }

console.log(req.body.name)
    guide.ambulancearr.push(newUser);
   
    res.status(200).json({
      success: true,
      message: "Review added successfully.",
      guide,
      newUser
      
  });
  } catch (err) {
    console.log(err);
  }

  
});


router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let guide = await Guide.findById(req.params.id);
    // Delete image from cloudinary
   


    const data = {
    
    };
    guide = await Guide.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(guide);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find Guide by id
    let guide = await Guide.findById(req.params.id);
    res.json(guide);
  } catch (err) {
    console.log(err);
  }
});


router.post("/beds/:id",async (req, res) => {
  try {
    let guide = await Guide.findById(req.params.id);
    console.log(req.body.name)

    const newUser = {
      
      name: req.body.name,
     contactnumber:req.body.contactnumber,
      address:req.body.address,
      age:req.body.age,
      charge:req.body.charge,
    state:req.body.state,
    district:req.body.district,
   bedtype:req.body.bedtype,
      
  }


    guide.generalbedsarr.push(newUser);
    await guide.save();
    res.status(200).json({
      success: true,
      message: "Review added successfully.",
      guide,
      newUser
      
  });
  } catch (err) {
    console.log(err);
  }

  
});
module.exports = router;