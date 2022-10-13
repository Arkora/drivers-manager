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
  
  return (
    
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="h-screen flex-auto overflow-auto">
        <Header header={'Form'}/>
       <div className='flex items-center mt-6 justify-center'>
         <UserForm />
       </div>
       <div className='flex items-center  mt-6 justify-center '>
        <div className="block  p-6 rounded-lg shadow-lg bg-white h-screen w-4/5 overflow-auto ">
          <h1 className='mb-2  flex text-4xl font-bold justify-center'> Cars Statistics </h1>       
          <div className=' h-4/5 pt-6 rounded-xl px-4 overflow-y-auto'>
          {cars.length? (cars.map((car)=>{
            return(
              <UserStatics car={car} />
            )
          })):<></>}

          </div>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default Form