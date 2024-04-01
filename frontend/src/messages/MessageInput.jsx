import React from 'react'
import { useState } from 'react';
import {BsSend} from 'react-icons/bs';
import useSendMessages from '../hooks/useSendMessage';
const MessageInput = () => {
  const [message, setMessage]= useState();
  const {loading, sendMessage} = useSendMessages();

  const handleSubmit =async(e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form action="" className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
        <input 
        type="text" 
        placeholder="Send something" 
        className=" border-none text-sm p-2.5 bg-gray-700 text-white h-12  w-full rounded-[2rem]" 
        value={message} //remember its the single source of truth thing/controlled input, so assigning values work both side here
        onChange={(e)=>setMessage(e.target.value)}
        />

        <button type='submit' className='absolute inset-y-0 end-0 pe-3 flex items-center'>
          { loading? <span className=' loading loading-spinner'></span> :  
            <BsSend/>
          }
        </button>
        </div>
    </form>
  )
}

export default MessageInput
