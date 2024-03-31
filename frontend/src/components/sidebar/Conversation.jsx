import React from 'react'

const Conversation = () => {
  return (
    <>
    
    <div className=' flex gap-3 items-center hover:bg-green-400 p-1 py-1 cursor-pointer rounded-[2rem]'>
        {/* avatar part */}
      <div className='avatar online p-1'>
        <div className='w-12 rounded-full'>
            <img src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/user-512.png" alt="user avatar" />
        </div>
      </div>

    {/* name and emoji part */}
      <div className=' flex flex-col flex-1'>
        <div className=' flex gap-3 justify-between '>
            <p className='font-bold text-gray-200'>Rohaan</p>
            <span className='text-xl'>🦄</span>
        </div>
      </div>
    </div>
    <div className=' divider my-0 py-0 h-1'/>
    </>
  )
}

export default Conversation
