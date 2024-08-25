// ye utils me isliye bna rhe kyuki jo hmane data base connect kia uska bar bar jarrut pdegi to use yha se export kr dege

const asyncHandler=(requestHandler)=>{   //requestHandler ak function diya hai jo ak function ke andr perameater me diya hai
(req,res,next)=>{       //jisme req,res,next parameater hoge        
Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))  //hum reject ke liye bhi bna skte the  but direct catch kr diya(promise.reject(function ka nam or kuch))
}
}// ye thoda smj km aaya promise to thik hai
export {asyncHandler};


// secodn methrord:_hum ese bhi kr skte hai ISe  (try catch se ese krte hai )

/* Bahi yha high order function liyahai jisme function ko function me Parameater ke roop me pass kr diya hai */
/*1..const asynchadler=()=>{} */
/*2..cont asynchandler=(func)=>{()=>{}} */ 
/*3..const asynchandler=(func)=>{} */ // to hum currly bracket hata ke esa kr skte hai imteranaly esa kam krega

// const asyncHandler=(fn)=>async(req,res,next)=>{  //  to hmne ak function bhi bna liya or function pass bhi kr diya or vo function async bhi bnna liya hai
// try {
    
//     await fn(req,res,next)
// } catch (error) {
//     res.status(error.code||500).json({     // fronted wale ke liye ak json msg bhi bhjte hai hum cool lgne ke liye
//         success:false,
//         message:error.message 
//     }) // yadi responce automatic nhi aaye to hmne 500 likhkar bhej diya hai
// }

// }

// export {asyncHandler};   


