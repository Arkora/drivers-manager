import React from 'react'
import { useNavigate } from "react-router-dom"


const LoginForm = () => {
    const navigate = useNavigate()

    const handleRegister = () =>{
        navigate("/signup")
    }

    const handleLogin = () => {
        navigate("/dashboard")
    }
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
  <form>
    <div className="form-group mb-6">
      <label  className="form-label inline-block mb-2 text-gray-700">Email address</label>
      <input type="email" className="form-control block w-full px-3
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <div className="form-group mb-6">
      <label  className="form-label inline-block mb-2 text-gray-700">Password</label>
      <input type="password" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
    </div>   
    <button  className="
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
      ease-in-out" onClick={handleLogin}>Sign in</button>
    <p className="text-gray-800 mt-6 text-center">Not a member? <span className="text-blue-600 hover:text-blue-700 cursor-pointer text-base transition " onClick={(e) =>handleRegister()}>Register</span>
    </p>
  </form>
</div>
  )
}

export default LoginForm