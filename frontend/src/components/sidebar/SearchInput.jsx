import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form action="" className="flex items-center gap-2">
      <input type="text"placeholder="Search..." className="input input-bordered h-10 rounded-[2rem]" />
      <button type="submit" className=" btn btn-circle bg-green-400 text-gray-600">
      <IoSearchSharp className="w-6 h-6 text-black outline-none"/>
      </button>
    </form>
  )
}

export default SearchInput
