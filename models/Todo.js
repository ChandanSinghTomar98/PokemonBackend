const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema(
    {
      name:{
        type:String,
        required:true,
        maxLength:50,
      },
      breed:{
        type:String,
        required:true,
        maxLength:50,
      },
      description:{
        type:String,
        required:true,
        maxLength:500,
      }
      
    }
);
module.exports=mongoose.model("Todo",todoSchema);