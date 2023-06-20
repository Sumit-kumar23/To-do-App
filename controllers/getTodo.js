const Todo=require("../models/TodoSchema");


exports.getTodo = async(req,res) => {
    try {
        // fetching all todo items from database

        const todos=await Todo.find({});
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Data is fetched"

        })
         
           
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Data cannnot be fetched, Try again later",
            message:err.message,
        })
    }
}

exports.getTodoById = async(req,res) =>{
    try {
        const id=req.params.id;  
        const todo=await Todo.findById({_id:id})

        // not found
        if(!todo){
            return res.status(404).json({
                success:false,

                message:"not found"
            })

        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} found successfully`
        })
    } 
    catch (error) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Error",
            message:err.message,
        })
    }
}