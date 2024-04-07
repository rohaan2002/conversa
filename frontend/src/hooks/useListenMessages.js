import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socket.context'
import useConversation from '../zustand_store/useConversation';
import notifSound from './../assets/notif.wav'

const useListenMessages = () => {
 const {socket}=useSocketContext();
 const {messages, setMessages}=useConversation();

 useEffect(()=>{

    socket.on("newMessage",(newMessage)=> {
        setMessages([...messages,newMessage])
        const sound = new Audio(notifSound);
        sound.play();
    } )


    return ()=>{ socket.off('newMessage') }; //turns off when it has listened for one message, then useEffect loads again once  the messages are updated
 },[socket,messages,setMessages])
}

export default useListenMessages
