import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name:{type:String, required:true}, 
    email: {type:String, required : true, unique : true}, 
    password : {type:String, required:true}, 
    profileImageUrl:{type:String, default:"https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg"}, 
    role: {type:String, enum:["admin","user"], default:"user"},
  },{timestamps:true}
)

const User = mongoose.model("User",userSchema);

export default User;