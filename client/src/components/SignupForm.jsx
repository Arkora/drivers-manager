import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom"
import { signup } from '../api'


const SignupForm = () => {
    const [user, setUser] = useState({firstname:"",lastname:"",email:"",password:""})
    const [formErrors, setFormErrors] = useState({})  
    const [err, setErr] = useState("")
    const [res,setRes] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
    

    const register = async () =>{       
      try {
        const {data} = await signup(user)
        setRes(data.message)
      } catch (error) {
        setErr(error.response.data.message)
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setFormErrors(validate(user))    
      if (Object.entries(formErrors).length === 0 &&isSubmit) {
        
        await register()
      }
    }
  
    useEffect(() => {         
    }, [formErrors])

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.firstname) {
        errors.firstname = "Firstname is required!";
      }
      if (!values.lastname) {
        errors.lastname = "Lastname is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be more than 8 characters";
      } else if (values.password.length > 20) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      setErr("")  
      return errors;   
    };



    

    

    
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
      <p  className={err ? "text-red-400 font-bold" : "hidden"} aria-live="assertive">{err}</p>
      <p  className={res ? "text-green-400 font-bold" : "hidden"} aria-live="assertive">{res}</p>
  <form onSubmit={handleSubmit}>
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
           <p className='text-red-400'>{formErrors.firstname}</p>
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
          <p className='text-red-400'> {formErrors.lastname}</p>
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
        <p className='text-red-400'>{formErrors.email}</p>
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
        placeholder="Password" required onChange={(e) =>setUser({...user,password:e.target.value})} />
        <p className='text-red-400'>{formErrors.password}</p>
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
      active:bg-blue-800 active:shadow-lg" onClick={() => setIsSubmit(true)}>Sign up</button>
      <p className="text-gray-800 mt-6 text-center">Already a member? <Link to={'/'}><span className="text-blue-600 hover:text-blue-700 cursor-pointer text-base transition " >Login</span></Link>
    </p>
  </form>
</div>
  )
}

export default SignupForm