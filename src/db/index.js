import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';


const connectDB = async()=>{
try{
   const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)   // ye hme return me ak object degaa
   console.log(`\n monogoDB Connected !! DB HOST: ${connectionInstance.connection.host} ${DB_NAME}`);   //  isse hme pta chlta hai ki hmra data host kha ho rha hai .. (mtlb kon se host me connect ho hu localhost par or khi par){monogoDB Connected !! DB HOST: [object Object]} esa hota yadi connectioninstance likte to
}
catch (error){
    console.log("MongoDB connection error Nishant:",error);
     process.exit(1)  // ye pd lena thodaa sa    अगर आपके प्रोग्राम में कोई ऐसा हिस्सा है जहां पर कोई गंभीर गलती हो रही है, और आप चाहते हैं कि प्रोग्राम वहीं बंद हो जाए, तो आप process.exit(1) का उपयोग कर सकते हैं।
}
}
export default  connectDB;   //yha se ese export kr diya ab hum ise import krege .... bhar wale index.js me sb krege


//r- dotenv/config--experimental-json-modules