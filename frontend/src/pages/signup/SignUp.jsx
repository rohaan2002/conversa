import React from 'react'
import { Link } from 'react-router-dom'
import GenderCheckBox from './GenderCheckBox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'
const Signup = () => {
  const [inputs,setInputs]= useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: '', 
  })

  const {loading, signup} = useSignup();

  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs, gender: gender})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  }  

  return (
    <div className=" flex flex-col items-center justify-center min-w-[500px] mx-auto ">
    <div className="w-full p-6 rounded-[2rem] shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25">
      <h1 className="text-3xl font-semibold text-center text-gray-200">
        SIGN UP FOR
        <span className="conversa-thematic text-4xl"> Conversa.</span>
      </h1>
      <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text ">Full Name</span>
            </label> 
            <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-12 rounded-[2rem]"
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs, fullName:e.target.value})}
            />
          </div>

          <div>
          <label htmlFor="" className="label p-2">
                <span className="text-base label-text">
                Username
                </span>
            </label>
            <input type="text" placeholder="Craft a Username" className="w-full input input-bordered h-12  rounded-[2rem]" 
            value={inputs.userName}
            onChange={(e)=>setInputs({...inputs, userName:e.target.value})}
            />
          </div>
            
          <div>
          <label htmlFor="" className="label p-2">
                <span className="text-base label-text">
                Password
                </span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-12  rounded-[2rem]"
            value={inputs.password}
            onChange={(e)=>setInputs({...inputs, password:e.target.value})}
            />
          </div>
            
          <div>
          <label htmlFor="" className="label p-2">
                <span className="text-base label-text">
               Confirm Password
                </span>
            </label>
            <input type="password" placeholder="" className="w-full input input-bordered h-12  rounded-[2rem]"
            value={inputs.confirmPassword}
            onChange={(e)=>setInputs({...inputs, confirmPassword:e.target.value})}
            />
          </div>
            
          <GenderCheckBox onCheckboxChange= {handleCheckboxChange} selectedGender={inputs.gender}/>

          <div>
                <Link to="/login" className="text-base hover:underline hover:text-blue-300 m-2 inline-block">
                    Already have an account? Login.
                </Link>

                <div>
                    <button className="btn btn-block btn-base text-base mt-2">SIGN ME UP</button>
                </div>

          </div>
        </form>
    </div>
    </div>
  )
}

export default Signup
