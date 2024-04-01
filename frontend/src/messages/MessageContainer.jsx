import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../zustand_store/useConversation";
const MessageContainer = () => {
  // const noChatSelected = true;


  const{selectedConversation, setSelectedConversation}=useConversation();
  
  // CLEANUp FUNCTION - wroks in a special way, just chatGPT how the fq it does - nulls the selectedConversation state so when logout and login again, no chat isnt selected!
  useEffect(()=>{
    return ()=> setSelectedConversation(null);
  },[setSelectedConversation])
  

  return (
    <div className=" flex flex-col md:min-w-[450px]  ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2 h-12 flex items-center">
            <span className="label-text text-lg">To:&nbsp;&nbsp;{"  "}</span>

            <span className="text-gray-900 font-bold text-lg">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col  items-center gap-2">
        <div className="flex flex-row">
          <p className="text-2xl">Welcome to&nbsp;</p>
          <p className="conversa-thematic text-3xl"> Conversa.</p>
        </div>
        <span className="text-sm text-gray-800 font-semibold flex items-center">
          (A Vanity MERN-stack project by&nbsp; <p className="text-base text-black font-bold">Rohan</p>)
        </span>
        <br />
        <br />
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-5xl text-center" />
      </div>
    </div>
  );
};
