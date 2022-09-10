const mongoose=require("mongoose");
require('dotenv').config()

const db_connect=async()=>{
    try {
        const result=await mongoose.connect(
            process.env.DB_URI
        );
        console.log('database connected')
    } catch (error) {
        console.log(error);
        
    }
}
module.exports=db_connect;