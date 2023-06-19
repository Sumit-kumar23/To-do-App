const mongoose=require('mongoose');
require("dotenv").config
function dbConnect(){
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>{console.log("Database is connected successfully")})
    .catch((error)=>{console.log("DB is not connected");
    console.log(error.message);
    process.exit(1);  
})
}

module.exports=dbConnect; // export 