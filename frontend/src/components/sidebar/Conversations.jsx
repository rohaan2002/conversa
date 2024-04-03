import React from 'react'
import Conversation from './Conversation.jsx';
import useGetConversations from '../../hooks/useGetConversations.js';
import getRandomEmoji from './../../utils/emojis.js'
import { useSocketContext } from '../../context/socket.context.jsx';

const Conversations = () => {
 const {loading, conversations}= useGetConversations();
console.log("CONVERSATIONS: ",conversations);
  return (
    <div className=' py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation,idx)=>(
        <Conversation
          key ={conversation._id}
          conversation={conversation}
          emoji = {getRandomEmoji()}
          lastIdx = {idx===conversations.length-1}
        />
      ))}
     {loading ? <span className=' loadingloading-spinner'></span> : null}
    </div>
  )
}

export default Conversations
