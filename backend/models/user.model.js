import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female","other"],
  },
  profilePic: {
    type: String,
    default: "",
  },
}, {timestamps:true}  //will have createdAt and updatedAt fields when the new user data will be entered in mongoDB.
// THIS ACTUALLY WILL DENOTE THE "member since" for the user wrt the chat app membership
);

const User = mongoose.model("User", userSchema); // you have to give the model name as camelcase singular. mongoDB will make "User" as "users" automatically while making collection out of this model

export default User;