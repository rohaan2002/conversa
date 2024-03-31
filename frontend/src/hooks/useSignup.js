import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/auth.context";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const{authUser, setAuthUser}= useAuthContext(); //authUser ka kaam wse h ni idhr kch
  const signup = async({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({fullName,userName,password,confirmPassword,gender})
      })
      
      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }

      // local Storage
      localStorage.setItem("conversa-user", JSON.stringify(data))
      setAuthUser(data);
      // context
      console.log(data);

    } catch (error) {
      toast.error(error.message);
      window.alert(error.message)
    } finally {
      setLoading(false);
    }
  };
    return{loading,signup};
};

export default useSignup;

function handleInputErrors({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    window.alert("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Incorrect Password bro!");
    window.alert("Incorrect Password bro!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password should be atleast 6 character strong.");
    window.alert("Password should be atleast 6 character strong.");
    return false;
  }

  return true;
}
