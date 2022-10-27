import React,{useState} from 'react'
import moment from 'moment'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import {FaRoad,FaGasPump} from 'react-icons/fa'
import {RiMoneyEuroCircleFill} from 'react-icons/ri'
import { deleteMetric,updateMetric } from '../api'

const Accordion = ({metric,setUpdate}) => {
  const [expand, setExpand] = useState(false) 
  const [formData,setFormData] = useState({km:metric.km,total:metric.total,litres:metric.litres})
  const [edit,setEdit] =useState(false)
  
  

  const handleUpdate = async(e) =>{
    e.preventDefault()
    update()
    e.target.reset()
  }
  
  const update = async() =>{
    try {
      const {data} = await updateMetric(metric._id,formData)
      console.log(data)
      setUpdate(true)
     } catch (error) {
      console.log(error)
     }
  }
  
  const handleDelete = async()=>{
    try {
      const {data} = await deleteMetric(metric._id)
      console.log(data)
      setUpdate(true)
    } catch (error) {
      console.log(error)
    }
  }

 
  
      return(
        <div className='px-6  py-2 '>
          <div className='bg-slate-800  border-2 rounded-md  md:grid md:grid-cols-2 mt-2  text-slate-50 font-bold text-lg border-gray-200'>
            <h2 className='flex items-center  '>Date: {moment(metric.created).format('DD /MM /YY')}</h2>
            <div className=' flex md:items-center md:justify-end   '>
              <IoIosArrowDropdownCircle className={`cursor-pointer rounded-full hover:text-white w-8 h-8 hover:bg-slate-400 ${expand && "rotate-180"}`}  size={20} onClick={() => {setExpand(!expand); setEdit(false);}} />
            </div>
          </div>
          <div className={expand?'grid sm"grid-col-1 mt-2 md:grid-cols-4 bg-gray-500 rounded-lg mb-2 py-2 px-6':'hidden'}>
            <div className='md:grid md:grid-cols-2  md:gap-2'>
              <div className='md:flex md:justify-end '>
                <FaRoad size={20}  />
              </div>
              <h2>{metric.km}Km</h2>
            </div>

            <div className='md:grid md:grid-cols-2 md:gap-2' >
              <div className='md:flex md:justify-end '>
                <RiMoneyEuroCircleFill size={20}  />
              </div>
              <h2>{metric.total}&euro;</h2>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-2'>
              <div className='md:flex md:justify-end '>
                <FaGasPump size={20} />
              </div>
              <h2>{metric.litres}L</h2>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-2'>
              <div className='md:flex md:justify-end '>
                <button className='customButton'onClick={()=>handleDelete()}>Delete</button>
              </div>
              <button className='customButton' onClick={(e)=>setEdit(!edit)}>Edit</button>
            </div>
          </div>
          <div >
            <form className={edit?``:`hidden`} onSubmit={handleUpdate}>
              <div  className='grid gap-1 grid-cols-3'>
                <input type='text' className='input' placeholder={formData.km} onChange={(e)=>setFormData({...formData,km:e.target.value})}/>
                <input type='text' className='input' placeholder={formData.total} onChange={(e)=>setFormData({...formData,total:e.target.value})}/>
                <input type='text' className='input' placeholder={formData.litres} onChange={(e)=>setFormData({...formData,litres:e.target.value})}/>
              </div>
              <div className='mt-2 flex items-center justify-center'>
                <button className=' customButton' onClick={()=> handleUpdate(metric._id)}>Update</button>
              </div>
            </form>
          </div>
        </div>
      )
    
    
  
}

export default Accordion