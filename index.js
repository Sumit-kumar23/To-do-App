const express=require('express');
const app=express();

require("dotenv").config(); // load config from .env to process
const PORT=process.env.PORT || 4000;

app.use(express.json());  // parser  or middleware


// import route
const todoRoutes=require("./routes/todos");

// mounting routes 
app.use("/api/v1", todoRoutes)


app.listen((PORT), ()=>{
    console.log(`Server started at ${PORT}`);

})

const dbConnect=require("./config/database");
dbConnect();


// default route
app.get("/", (req, res)=>{
    res.send(`<h1>This is home page</h1>`);
       
})