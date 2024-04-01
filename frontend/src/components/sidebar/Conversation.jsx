import React from 'react'
import useConversation from './../../zustand_store/useConversation.js'
const Conversation = ({conversation, lastIdx, emoji}) => {

  const {selectedConversation, setSelectedConversation}=useConversation();

  const isSelected = selectedConversation?._id===conversation._id; 
  return (
    <>
    
    <div className={`flex gap-3 items-center hover:bg-green-400 p-1 py-1 cursor-pointer rounded-[2rem] ${isSelected ? 'bg-green-400': ''}`}
    onClick={()=>setSelectedConversation(conversation)}
    >
        {/* avatar part */}
      <div className='avatar online p-1'>
        <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt="user avatar" />
        </div>
      </div>

    {/* name and emoji part */}
      <div className=' flex flex-col flex-1'>
        <div className=' flex gap-3 justify-between '>
            <p className='font-bold text-gray-200'>{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
        </div>
      </div>
    </div>
    <div className=' divider my-0 py-0 h-1'/>
    </>
  )
}

export default Conversation
