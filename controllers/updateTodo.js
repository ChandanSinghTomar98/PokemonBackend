//import model
const Todo=require("../models/Todo");

//define route handler
exports.updateTodo=async(req,res)=>{
      try{
        const {id}=req.params;
        const{name,breed,description}=req.body;

        const todo=await Todo.findByIdAndUpdate(
            {_id:id},
            {name,breed,description},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:'updated successfully',
        })

      }catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message
            }
        )
      }
}