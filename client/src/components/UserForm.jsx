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

  
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white md:w-5/6 lg:w-5/6">
      <p  className={err ? "text-red-400 font-bold" : "hidden"} aria-live="assertive">{err}</p>
     <form onSubmit={handleSubmit}>
      <div className='grid md:grid-cols-5  gap-2'>
        <div>
            <input type="text" className="input" 
            placeholder="Km" onChange={(e) =>setFormData({...formData,km:e.target.value})} />
            <p className='text-red-400'>{formErrors.km}</p>
        </div>
        <div>
            <input type="text" className="input" 
            placeholder="Total" onChange={(e) =>setFormData({...formData,total:e.target.value})}/>
            <p className='text-red-400'>{formErrors.total}</p>
        </div>
        <div>
            <input type="text" className="input" 
            placeholder="Litres" onChange={(e) =>setFormData({...formData,litres:e.target.value})}/>
            <p className='text-red-400'>{formErrors.litres}</p>
        </div>
        <div>
            <select type="text" className="customSelect" 
            placeholder="Plate" onChange={(e) =>setFormData({...formData,id:e.target.value})} >
              <option value={""} selected ></option>
              {user.cars.length?(user.cars.map((car)=>{
              return(<option value={car._id}>{car.plate}</option>)
            })):<></>}</select>
            <p className='text-red-400'>{formErrors.plate}</p>
        </div>
        <button type="submit" className="customButton" onClick={()=>setSubmit(true)}>Save</button>
      </div>
     </form>
    </div>
  )
}

export default UserForm