import Conversations from "./Conversations"
import SearchInput from "./SearchInput"
import LogoutButton from "./LogoutButton"
const Sidebar = () => {
  return (
    // border only applied at right to add that lighting accurate effect
    <div className="p-4 border-r border-r-slate-500 flex flex-col "> 
      <SearchInput/>
      <div className=" divider px-3 "></div>
      <Conversations/>
   
      <LogoutButton/> 
    </div>
  )
}

export default Sidebar
