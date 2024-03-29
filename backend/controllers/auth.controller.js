export const login =async(req, res)=>{
 
}
export const logout =async(req, res)=>{
    console.log("logout user");
    res.send("logoutedd")
}
export const signup =async(req, res)=>{
    try{
        const {fullName, username, password, confirmPassword} = req.body
      }catch(error){
    
      }
}