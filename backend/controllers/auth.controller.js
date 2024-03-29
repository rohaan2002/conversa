import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";

export const signup =async(req, res)=>{
    try{
        const {fullName, userName, password, confirmPassword,gender} = req.body
        if(password!==confirmPassword){
            return res.status(400).json({error: "Password do not match"})
        }
        const user = await User.findOne({userName})
        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        // HASH THE PASSWORD USING BCRYPTJS, if you dont anyone with access to your MongoDB database can simply see your password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        // avatar profile pic API - https://avatar-placeholder.iran.liara.run/

        // for girl random - https://avatar.iran.liara.run/public/girl
        // for boy random - https://avatar.iran.liara.run/public/boy
        // will give diff dp everytime u refresh

        // for same everytime you specify a username(any)-
        // https://avatar.iran.liara.run/public/boy?username=rohan
        // would give same dp everytime u refresh

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`


      //agr sb password verified and username unique to upr dp generate hogi or fir naye user ki detail jayengi acc to User model jo create kia h using userSchema in mongoose (see user.model.js)

        const newUser = new User({
            fullName: fullName,   //you can write fullName only cz when the key and value are same named, you can just write the value
             userName:userName,
             password: hashedPassword,
             gender: gender,
            profilePic: (gender==="male")? boyProfilePic: girlProfilePic
          
        })

        if(newUser){
            // Generate JWT token here

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,   //ye _id mongo khud se generate karta  h (jruri hoti bhai ye bhot) 
            fullName:  newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        })
}
       
         
      } catch(error){
        console.log("some error in signup controller , maybe see if api working correctly or something else", error.message);
        res.status(500).json({error: `Internal Server Error`})
      }
}

export const login =(req, res)=>{
 
}

export const logout =(req, res)=>{
    console.log("logout user");
    res.send("logoutedd")
}