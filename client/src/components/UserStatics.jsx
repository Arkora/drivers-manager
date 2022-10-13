import React,{useState} from 'react'
import Accordion from './Accordion'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

function UserStatics({car}) {
  const [expand, setExpand] = useState(false)

  return (
          <div className=" bg-gray-800 text-slate-50 rounded-sm p-2 font-bold mb-2 border-gray-200">
            <div className='grid grid-cols-2 gap-8'>
              <h2 className='flex md:text-xl'>{car.plate}</h2>
              <div className=' flex md:items-center md:justify-end   '>
              <IoIosArrowDropdownCircle className={`cursor-pointer rounded-full hover:text-white w-8 h-8 hover:bg-slate-400 ${expand && "rotate-180"}`}  size={20} onClick={()=>setExpand(!expand)} />
            </div>
            </div>
            <div className={expand? 'visible':'hidden'}>
              {car.metrics.length? (car.metrics.map((metric)=>{
                return(<Accordion metric={metric}/>)
              })) :<></>}
            </div>
          </div>
  )
}

export default UserStatics