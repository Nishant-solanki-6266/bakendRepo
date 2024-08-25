// require ('dotenv').config({path: './env'})
// hum yha env ko import jese use kr skte hai
import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './aap.js';
  
dotenv.config({
  path:'./.env'    // iske bad pankaj,json me bhi setting ki bahi .. ye sb jum (import) ko use krne ke liye kr rhi require se bhi ho jata but sb jgh import or yha require to acha nhu lgta na isliye  .thoda dyan se bhai yaha hi error aai thi
})

connectDB()
.then(()=>{
app.listen(process.env.PORT||8000,()=>{
console.log(`Server is Running at port :${process.env.PORT}`);

})
})
.catch((err)=>{
  console.log("MongoDb Connection Failed!!",err)
})








// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';   // ye hmne database ka nam import kr liya hai
// import express from 'express'
// const app=express();
// // express ke nadr bhut sare listen hote hai yha (on) ka use kiya or bhi krege
// ;(async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("error",(error)=>{                  // database conneat hone ke bad yadi hmare express me kuch glti ho jati hai to ye error dega
//         console.log("Error:",error);
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`app is lestening on port${process.env.PORT}`);
//        })
//     }
//     catch(error){
//         console.log("Error:",error);
//         throw error
    // }
// })() 
  // imedentely invoked function use kiya ye behatar aprouch hai isliye   //  suruaat me semicolon bhi lgaya jata hai yadi hum khi upr bhul jaye hai isliye ye bhi bhetar approuch hai