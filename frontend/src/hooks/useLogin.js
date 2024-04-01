import { useState } from 'react'
import { useAuthContext } from '../context/auth.context';

// CORS BYPASS KARNE KE LIYE PROXY USE KIA H, SEE IN vite.config.js

const useLogin = () => {
const [loading,setLoading]=useState(false);
const {setAuthUser}=useAuthContext();

const login =async(userName, password)=>{

    const success = handleInputErrors({userName, password})
    if(!success) return;
    setLoading(true);

    try{
         const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({userName,password})
        });

        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.setItem("conversa-user", JSON.stringify(data))
        setAuthUser(data);

    }catch(error){
        // if(!data) window.alert("Incorrect Credentials");
        console.log(data.error);
        window.alert(data.error)
    }finally{
        setLoading(false)
    }
}
    return {loading, login};
}

export default useLogin



function handleInputErrors({userName,password}) {
    if ( !userName || !password) {
    //   toast.error("Please fill in all fields");
      window.alert("Please fill in all fields");
      return false;
    }
    // if (password !== confirmPassword) {
    //   toast.error("Incorrect Password bro!");
    //   window.alert("Incorrect Password bro!");
    //   return false;
    // }

  
    return true;
  }
  