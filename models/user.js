const mongoose=require("mongoose");
const schema=mongoose.Schema;

const userSchema = new schema({
    name: String,
    age: String,
    email:{type:String, unique:true}
  });

  const User = mongoose.model('User',userSchema);
  module.exports=User;
  