import React, { useEffect, useState } from 'react'
import useConversation from '../zustand_store/useConversation'

const useGetMessages = () => {
    const[loading,setLoading] =useState()
    const {messages, setMessages, selectedConversation} = useConversation();
    
    useEffect(()=>{
        const getMessages=async()=>{
            setLoading(true);
            
            try{
                const res = await fetch(`/ap i/message/${selectedConversation._id}`)

                const data = await res.json();

                if(data.error) throw new Error(data.error)

                setMessages(data);

            }catch(error){
                console.log(error.message);
            window.alert(error.message)
        }finally{
            setLoading(false);
        }
        
    }  

    if(selectedConversation) getMessages();
    },[selectedConversation?._id,setMessages])

    return {messages,loading}
}

export default useGetMessages
