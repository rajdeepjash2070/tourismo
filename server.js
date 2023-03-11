const express=require("express");
const app=express();
const dotenv =require("dotenv");
dotenv.config();
const mongoose =require("mongoose");
const cors = require("cors");
app.use(cors());

//const router=require("./routes/admin-routes");
app.use(express.json());

//app.use("/admin", router);
// const User=require("./models/user");
// const router2=require("./routes/user-routes");
// app.use("/users", router2);





const port = process.env.PORT || 5000;
app.get("/",(req,res)=>{
res.send("Hello from the server side of Healthalizer")
});


app.use("/guides", require("./routes/guide"));
app.use("/users", require("./routes/user"));
app.listen(port,()=>{
    console.log(`Server is running on port no. ${port}`);
})



//8m0MP4Cg1PN3Bo51
//mongodb+srv://rajdeepjash2070:<password>@cluster0.cmj5f.mongodb.net/?retryWrites=true&w=majority
const DB="mongodb+srv://rajdeepjash2070:jppNpELN1ojzkeyE@cluster0.uaqkrjn.mongodb.net/?retryWrites=true&w=majority"
//const DB="mongodb+srv://rajdeepjash2070:8m0MP4Cg1PN3Bo51@cluster0.nwezf.mongodb.net/mernstack1?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGO_URL || DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  
}).then(()=>{
    console.log("connected to database tourguide");
}).catch((error)=>{
    console.log('Error:',error.message);
})

//storage
