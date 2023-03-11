const mongoose = require("mongoose");


const guideSchema= new mongoose.Schema(
  {
    guidename:{type:String},
    bookeddate:{type:String},
    charge:{type:String},
    address:{type:String},
    contactnumber:{type:String},
    
  }
);

const UserSchema = new mongoose.Schema(
  {
    userid:{type:String},
    name: { type: String },
    age:{type:String},
    address:{type:String},
    email:{type:String},
    phnumber:{type:String},
    gender:{type:String},
    guidearr:[guideSchema],
    state:{type:String},
    district:{type:String},
    pin:{type:String},
    prescriptionavatar:{type:String},
    prescriptioncloudinary_id:{type:String},
  
    comment: { type: String },
    rating: { type: Number },
    password: {type:String},
   
  },
);

module.exports =  mongoose.model('User', UserSchema)


