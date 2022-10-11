import React,{useState,useEffect} from 'react'
import { getUser,setUser} from '../localStorage'
import { addValues,fetchUser } from '../api'


const UserForm = () => {
  const user = getUser()
  const [formData, setFormData] = useState({id:"",km:0,total:0,litres:0})
  const [formErrors, setFormErrors] = useState({})
  const [submit, setSubmit] = useState(false)   
  const [err, setErr] = useState("")

  const handleSubmit =  async(e) => {
    e.preventDefault();
    setFormErrors(validate(formData))    
    if ( formErrors && Object.entries(formErrors).length === 0 && submit ) {
      postValues()
    }
  }

  const postValues = async () =>{
    try {
      await addValues(formData)      
      const response = await fetchUser(user.id)
      setUser(response.data)
    } catch (error) {
      setErr(error.response.data.message)
    }
  }

  
  const validate = (values) => {
    const errors = {};
    if (!values.km) {
      errors.km= "Kilometers are required!"
    } 
    if (!values.total) {
      errors.total="Total is required!"
 }
 if (!values.litres) {
   errors.litres="Litres are required!"
  }
  if (!values.id) {
    errors.id="Plate is required!"
  }
  setErr("")    
  return errors;   
};
useEffect(() => { 

}, [formErrors])

  console.log(formData)
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white md:w-5/6 lg:w-5/6">
      <p  className={err ? "text-red-400 font-bold" : "hidden"} aria-live="assertive">{err}</p>
     <form onSubmit={handleSubmit}>
      <div className='grid md:grid-cols-5  gap-2'>
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
            placeholder="Km" onChange={(e) =>setFormData({...formData,km:e.target.value})} />
            <p className='text-red-400'>{formErrors.km}</p>
        </div>
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
            placeholder="Total" onChange={(e) =>setFormData({...formData,total:e.target.value})}/>
            <p className='text-red-400'>{formErrors.total}</p>
        </div>
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
            placeholder="Litres" onChange={(e) =>setFormData({...formData,litres:e.target.value})}/>
            <p className='text-red-400'>{formErrors.litres}</p>
        </div>
        <div>
            <select type="text" className="
            block
            w-full
            col-span-2
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
            placeholder="Plate" onChange={(e) =>setFormData({...formData,id:e.target.value})} >
              <option value={""} selected></option>
              {user.cars.length?(user.cars.map((car)=>{
              return(<option value={car._id}>{car.plate}</option>)
            })):<></>}</select>
            <p className='text-red-400'>{formErrors.plate}</p>
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
            ease-in-out" onClick={()=>setSubmit(true)}>Save</button>
      </div>
     </form>
    </div>
  )
}

export default UserForm