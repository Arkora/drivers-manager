import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from "react-router-dom"
import { login } from '../api'
import { setUser } from '../localStorage'


const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({email:"",password:""})
  const [formErrors, setFormErrors] = useState({})
  const [err, setErr] = useState("")
  const [submit, setSubmit] = useState(false)
 

    const signin = async () =>{       
      try {
        const {data} = await login(formData) 
        setUser(data) 
        navigate('/dashboard')
      } catch (error) {
        setErr(error.response.data.message)
        
      }
    }

    const handleSubmit =  async(e) => {
      e.preventDefault();
      setFormErrors(validate(formData))    
      if ( formErrors && Object.entries(formErrors).length === 0 && submit ) {
       await signin()      
      }
    }

  useEffect(() => { 

 }, [formErrors])

 const validate = (values) => {
   const errors = {};
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

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
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <p  className={err ? "text-red-400 font-bold" : "hidden"} aria-live="assertive">{err}</p>
  <form onSubmit={handleSubmit}>
    <div className="mb-6">
      <label  className=" inline-block mb-2 text-gray-700">Email address</label>
      <input type="email" className=" block w-full px-3
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Enter email" onChange={(e) => setFormData({...formData,email:e.target.value})} />
        <p className='text-red-400'>{formErrors.email}</p>
    </div>
    <div className=" mb-6">
      <label  className=" inline-block mb-2 text-gray-700">Password</label>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" onChange={(e) => setFormData({...formData,password:e.target.value})} />
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
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" onClick={()=>setSubmit(true)} >Sign in</button>
    <p className="text-gray-800 mt-6 text-center">Not a member? <Link to={'/signup'}> <span className="text-blue-600 hover:text-blue-700 cursor-pointer text-base transition ">Register</span></Link>
    </p>
  </form>
</div>
  )
}

export default LoginForm