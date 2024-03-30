import User from "../models/user.model.js";

export const getUsersForSidebar= async (req,res)=>{
    try{
        const loggedInUserId = req.user._id;
        const allUsersExceptMe = await User.find({_id: {$ne: loggedInUserId}}).select("-password")  
        // User.find({_if: {$ne: loggedInUserId}})--> finds users in User collection/model whose id are not to loggedInUserId 

        res.status(200).json(allUsersExceptMe);
    }catch(error){
        console.log("Error in getUsersForSidebar in user controller: ",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
} 