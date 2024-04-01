import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const useGetConversations = () => {
  const [loading,setLoading]= useState(false);
  const [conversations, setConversations]= useState([]);  
  //jitne database m h usse ek kam dikhege users (conversations side m jo dikhengi, isliye conversations kehre bs) console m  kyuki khud(currently loggedin user) ko exclude krra

  useEffect(()=>{
   const getConversation=async()=>{
    setLoading(true);
    try{
        const res = await fetch("/api/users"); //since its a GET request you cant see any payload after it
        const data = await res.json();
        if(data.error){
            throw new Error (data.error);
        } 
        setConversations(data);
    }catch(error){
        console.log(data.error);
        window.alert(data.alert);
    }finally{
        setLoading(false);
    }
   }

   getConversation();
  },[])

  return {loading,conversations};
}

export default useGetConversations
