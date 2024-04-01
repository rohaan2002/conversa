import { useState } from "react"
import { useAuthContext } from "../context/auth.context";
import useConversation from "../zustand_store/useConversation.js";

const useSendMessages = () => {

    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();
    const sendMessage = async(message)=>{
        setLoading(true);
        try{
            // send message api ka endpoint [http://localhost:5000/api/message/send/66070be11a372a996190e58a] ye format dia h backend m, "/message" not "/messages" to PLS BC GALTI MAT KARIO
            const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                'Content-type':'application/json'
                },
                body: JSON.stringify({message})
    
            });

            console.log(res);

            const data = await res.json();

            if(data.error) throw new Error (data.error)

            setMessages([...messages, data])
    
        }catch(error){
            console.log(error.message);
            window.alert(error.message);
        }finally{
            setLoading(false);
    
        }

    }

    return {sendMessage, loading}

}

export default useSendMessages
