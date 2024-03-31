import React from 'react'
import {BsSend} from 'react-icons/bs';
const MessageInput = () => {
  return (
    <form action="" className='px-4 my-3'>
        <div className='w-full relative'>
        <input 
        type="text" 
        placeholder="Send something" 
        className=" border-none text-sm p-2.5 bg-gray-700 text-white h-12  w-full rounded-[2rem]" />

        <button type='submit' className='absolute inset-y-0 end-0 pe-3 flex items-center'>
            <BsSend/>
        </button>
        </div>
    </form>
  )
}

export default MessageInput
