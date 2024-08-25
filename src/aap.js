// 8 va video yha se chalu hua hai app se
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
const app= express();

//(1.. hme origin set krna pdega ki kon sa browser hmara backend se bt kr skta hai ,,hmne cors origin .env me difine kiya sb aa skte hai*laga diya hai to)
app.use(cors({
    origin:process.env.CORS_ORIGIN,              // kon kon se origin allow kr rhe hai,,, ise enve me define bhi krna hoga
    Credential:true
}));  // BHaii app me hmne express ki power nikal li ,usme se hmne USe Ka use Kiya ,,USE Ka use hmesa middleWare Ke Liye Kiya jata hai,,,, Or Cors KA use Origin ko Set Krne KE liye Kiya Jata hai ki hme kon kon se url ya origin ko hmare backend se data or batchhit kre ese me koi bhi hmare Backend se data le lega or bt krne Lag jayeg

//(2..ise configration khte hai) ab hmare website me kuch data json me aayega kuch url se aayega kuch data cookie me aayega to hme json ki limit dene pdegi
app.use(express.json({limit:"16kb"}))  // bhai iska mtlb ki express me json ko bhi allow krne do jiski limit 16:kb rhegi
app.use(express.urlencoded({extended:true,limit:"16kb"})) // iska use express me jb url se bhi hmari velue aati hato %20 + likha aata hai to url ke data ko smhjhne ke Liye Urlencoded ka Use Kiya Jata Hai,,, extend ke andr hum or object ka use kr kste hai islieye extend ka use  kiya hai,, or limit Bhi de di Hmne
app.use(express.static("public"));     // iska use Yadi hmari (pdf ya foto aai) to hmare public folder me rkh lege bad me hai iska USe
app.use(cookieParser())    // iska use backend ka jo bhi bhi data hai vo user ke coockie me dal dega ,,,,iske bad Hum UTils me Geye theAsyncHandler

export {app};