import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import { signup } from '../api'


const SignupForm = () => {
    const [user, setUser] = useState({firstname:"",lastname:"",email:"",password:""})
    const navigate = useNavigate()

    const handleLogin = () =>{
        navigate("/")
    }

    const register = async () =>{ 
      console.log(user)
      try {
        const {data} = await signup(user)
        console.log(data)        
        

      } catch (error) {
        console.log(error.response.data)
      }
    }

    

    
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
  {/* {<form>} */}
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
           placeholder="First name" onChange={(e) =>setUser({...user,firstname:e.target.value})}/>
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
          placeholder="Last name" onChange={(e) =>setUser({...user,lastname:e.target.value})}/>
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
        placeholder="Email address" onChange={(e) =>setUser({...user,email:e.target.value})} />
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
        placeholder="Password" onChange={(e) =>setUser({...user,password:e.target.value})} />
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
      active:bg-blue-800 active:shadow-lg" onClick={register}>Sign up</button>
      <p className="text-gray-800 mt-6 text-center">Already a member? <span className="text-blue-600 hover:text-blue-700 cursor-pointer text-base transition " onClick={(e) =>handleLogin()}>Login</span>
    </p>
  {/* </form> */}
</div>
  )
}

export default SignupForm