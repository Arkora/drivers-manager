import React from 'react'
import { useNavigate } from "react-router-dom"

const SignupForm = () => {
    const navigate = useNavigate()

    const handleLogin = () =>{
        navigate("/")
    }
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  <form>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <input type="text" className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
           placeholder="First name" />
      </div>
      <div className="mb-6">
        <input type="text" className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
          placeholder="Last name" />
      </div>
    </div>
    <div className="form-group mb-6">
      <input type="email" className=" block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        placeholder="Email address" />
    </div>
    <div className="form-group mb-6">
      <input type="password" className=" block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
        placeholder="Password" />
    </div>
    
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Sign up</button>
      <p className="text-gray-800 mt-6 text-center">Already a member? <span className="text-blue-600 hover:text-blue-700 cursor-pointer text-base transition " onClick={(e) =>handleLogin()}>Login</span>
    </p>
  </form>
</div>
  )
}

export default SignupForm