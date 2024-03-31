import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-start'>
        
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="{https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/user-512.png}" alt="avatar image" />
            </div>
        </div>


        <div className='chat-bubble text-white bg-green-500'> Sup my guy</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-start'>01:52</div>
      
    </div>
  )
}

export default Message
