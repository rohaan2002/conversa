import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand_store/useConversation";
import useGetConversations from './../../hooks/useGetConversations'
const SearchInput = () => {
  const [search,setSearch] = useState("");
  const {selectedConversation, setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length<3) return window.alert("search term should be atleast 3 characters long")
    
    const searchedConv = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))

    if (searchedConv){
      setSelectedConversation(searchedConv)
      setSearch('')
    }else{
      window.alert("no such result found!")
    }
  }
  return (
    <form action="" className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input type="text"placeholder="Search..." className="input input-bordered h-10 rounded-[2rem]" 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <button type="submit" className=" btn btn-circle bg-green-400 text-gray-600">
      <IoSearchSharp className="w-6 h-6 text-black outline-none"/>
      </button>
    </form>
  )
}

export default SearchInput
