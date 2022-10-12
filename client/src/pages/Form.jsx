import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import UserForm from '../components/UserForm'
import UserStatics from '../components/UserStatics'
import Sidebar from '../components/Sidebar'
import { getUser } from '../localStorage'

const Form = () => {
  const user = getUser()
  const [cars, setCars] = useState([])
  useEffect(()=>{
    setCars(user.cars)
  },[])
  console.log(user.cars[0].metrics)
  return (
    
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="h-screen flex-auto overflow-auto">
        <Header header={'Form'}/>
       <div className='flex items-center mt-6 justify-center'>
         <UserForm />
       </div>
       <div className='flex items-center mt-6 justify-center '>
        <UserStatics cars={cars} />
      </div>
      </div>
    </div>
    
  )
}

export default Form