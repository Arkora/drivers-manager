import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import UserForm from '../components/UserForm'
import CarAccordion from '../components/CarAccordion'
import Sidebar from '../components/Sidebar'
import { getUser} from '../localStorage'
import { fetchUser } from '../api'

const Form = () => {
  const user = getUser()
  const [cars, setCars] = useState([])

  const fetchData = async () =>{
    try {
      const {data} = await fetchUser(user.id)
      setCars(data.cars)
      console.log(data.cars)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  
  useEffect(()=>{
    fetchData()   
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
          <h1 className='mb-2  flex text-4xl font-bold justify-center'> CARS STATISTICS </h1>       
          <div className=' h-4/5 pt-6 rounded-xl px-4 overflow-y-auto'>
          {cars.length? (cars.map((car)=>{
            return(
              <CarAccordion car={car} />
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