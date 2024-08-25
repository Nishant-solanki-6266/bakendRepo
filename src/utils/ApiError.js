// class ye hmne isliye kiya ki  error aaye to kesa error aaye kyuki har bar error aayega
// yha (parent :-Error hai) or child :-(ApiError) hai,, or ye node ke documetation se aayega
class ApiError extends Error{

    constructor(
        statuscode,
        message="something went wrong",       // hme pta hai ki dusri class ki velue ko access krne ke liye hum ,, apni class me vo sbhi velue ko constructor me define krna pdta hai Bhai
        errors=[],
        statck=""
    ){
        super(message) // super ne (Error ki jha bhi  cLass hogi) vhase Message ko coll kr liya mtlb (Error) ke constroctor mese use( apni class me  Samil Kr liya)
        this.statuscode=statuscode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
        if(statck){
            this.stack=statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export {ApiError}  