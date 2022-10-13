import React,{useState} from 'react'
import moment from 'moment'
import {IoIosArrowDropdownCircle} from 'react-icons/io'

const Accordion = ({metric}) => {
  const [expand, setExpand] = useState(false)  
      return(
        <div className='px-6  py-2 '>
          <div className='bg-slate-800  border-2 rounded-md  md:grid md:grid-cols-2 mt-2  text-slate-50 font-bold text-lg border-gray-200'>
            <h2 className='flex items-center  '>Date: {moment(metric.created).format('D /MM /YY')}</h2>
            <div className=' flex md:items-center md:justify-end   '>
              <IoIosArrowDropdownCircle className={`cursor-pointer rounded-full hover:text-white w-8 h-8 hover:bg-slate-400 ${expand && "rotate-180"}`}  size={20} onClick={()=>setExpand(!expand)} />
            </div>
          </div>
          <div className={expand?'grid sm"grid-col-1 mt-2 md:grid-cols-3 bg-gray-500 rounded-lg mb-2 py-2 px-6':'hidden'}>
            <h2>Km: {metric.km}</h2>
            <h2>Total: {metric.total}$</h2>
            <h2> {metric.litres}L</h2>
          </div>
        </div>
      )
    
    
  
}

export default Accordion