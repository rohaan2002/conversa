import React, { useEffect, useRef } from 'react'
import Message from './Message'
import MessageSkeleton from '../components/skeletons/MessageSkeletons'
import useGetMessages from '../hooks/useGetMessages'
import useListenMessages from '../hooks/useListenMessages'
const Messages = () => {
  const {messages, loading} = useGetMessages();
  useListenMessages();
  
  const lastMessageRef = useRef(); //so that the view is scrolled to the last msg
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"});
    }, 50)
  },[messages])



  console.log("messages:", messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
    {loading && <><MessageSkeleton/><MessageSkeleton/><MessageSkeleton/> </> }

    {!loading && messages.length>0 && messages.map((message)=>(
      <div key={message._id} ref={lastMessageRef}>
        <Message key={message._id} message={message}/>
      </div>
    ))}

    {!loading && messages.length===0 && (
      <p className='text-center text-white'>Send a message to start a Conversa-tion 😉</p>
    )}
    </div>
  )
}

export default Messages
