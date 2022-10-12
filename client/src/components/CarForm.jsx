import React,{useState,useEffect} from 'react'
import { addCar, deleteCar,fetchUser } from '../api'
import { getUser,setUser } from '../localStorage'


const CarForm = () => {
  const user = getUser()  
  const [res, setRes] = useState("")
  const [err, setErr] = useState("") 
  const [formData, setFormData] = useState({id:user.id,plate:""})
  const [cars,setCars] = useState(user.cars)
  const [update, setUpdate] = useState(false)

  const postCar = async () =>{
    try {
      const {data} = await addCar(formData)
      setRes(data.message)
      const response = await fetchUser(user.id)
      setUser(response.data)    
      setUpdate(true)   
    } catch (error) {
      setErr(error.response.data.message)
    }
  }
  const delCar = async (id) =>{
    try {
      const {data} = await deleteCar(id)
      setRes(data.message)
      const response = await fetchUser(user.id)
      setUser(response.data)   
      setUpdate(true)      
    } catch (error) {
      setErr(error.response.data.message)
    }
  }

 
  
  useEffect(()=>{

    if(update){
      setCars(user.cars)
      setUpdate(false)
    }
    
  },[update])
  


  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
      <p  className={err ? "text-red-400 font-bold " : "hidden"} aria-live="assertive">{err}</p>
      <p  className={res ? "text-green-400 font-bold " : "hidden"} aria-live="assertive">{res}</p>
      
        {cars.length ? (cars.map((car)=>{
          return(
            <div className='grid grid-cols-2 gap-1 mb-1 overflow-y overflow-y-visible '>
              <h1>{car.plate}</h1>
              <button className='w-full
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
      ease-in-out' onClick={() => delCar(car._id)}>Delete</button>
            </div>
          )
        })):<></>}

      
      <div className=" mt-6 mb-6">
      <label  className="form-label inline-block mb-2 text-gray-700">Add new car plate</label>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={(e)=> setFormData({...formData,plate:e.target.value})} placeholder="Enter Car Plate" />
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
      ease-in-out" onClick={() => postCar()}  >Add Plate</button>

    </div>
  )
}

export default CarForm