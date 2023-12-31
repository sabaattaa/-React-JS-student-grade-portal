const {Schema,default:mongoose} =require("mongoose")

const authScheema=new Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model("auth",authScheema)

