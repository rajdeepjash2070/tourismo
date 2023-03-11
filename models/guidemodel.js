const mongoose=require('mongoose');


const bookedSchema=new mongoose.Schema(
  {
    userid:{ type: String },
    name1:{type:String},
    name3:{type:String},
    name4:{type:String},
    name5:{type:String},
    name6:{type:String},
    address:{type:String},
    
    age1:{type:Number},
    age2:{type:Number},
    age3:{type:Number},
    age4:{type:Number},
    age5:{type:Number},
    contactnumber:{type:Number},
    charge:{type:String},
time:{type:String},
date:{type:String},

  }
);
const guideSchema = new mongoose.Schema(
  {
        name: { type: String },
        address:{ type: String },
        cloudinary_id:{
          type:String,
      },
      avatar:{
        type:String,
    },
        description: { type: String },
        phnumber: { type: String },
        experienceyears:{ type: String },
        experienceplaces:{ type: String },
        storyteller:{ type: String },
        goodlistener:{ type: String },
        languages:{ type: String },
        workingdays:{ type: String },
        workinghours:{ type: String },
        workonholiday:{ type: String },
        workonfestivals:{ type: String },
        package1:{ type: String },
        package2:{ type: String },
        package3:{ type: String },
        package4:{ type: String },
        package5:{ type: String },
        highlightedplaces:{ type: String },
        specializationcourse:{ type: String },
        time1:{type:String},
        time2:{type:String},
        time3:{type:String},
        time4:{type:String},
      updationtime:{type:String},
      updationdate:{type:String},
        state:{ type: String },
        district:{ type: String },
        pin:{ type: String },
        email:{ type: String },
        longi:{ type: String },
        lati:{ type: String },
       
    bookingarr: [bookedSchema],
  },
  {
    timestamps: true,
  }
);

const Guide=mongoose.model('Guide',guideSchema)

module.exports=Guide;

