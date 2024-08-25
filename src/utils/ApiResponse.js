// ye jb hamra response aayega to kya response me dena hai vo btayega
class ApiResponse{
    constructor(statusCode,data,message="Success")
    {
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode <400
    }
}