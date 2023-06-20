const Todo=require("../models/TodoSchema");

exports.deleteTodo=async(req, res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findByIdAndDelete({
            _id:id,
        })

        res.status(500).json({
            success:true,
            message:`${id} is deleted`
        })


    }

    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });

    }
}