import React,{useState} from 'react'
import MetricsAccordion from './MetricsAccordion'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import {FaRoad,FaGasPump} from 'react-icons/fa'
import {RiMoneyEuroCircleFill} from 'react-icons/ri'

const CarAccordion = ({car}) => {
  
    const [expand, setExpand] = useState(false)

  return (
          <div className=" bg-gray-800 text-slate-50 rounded-sm p-2 border-2 font-bold my-4 border-gray-200">
            <div className='grid grid-cols-2 gap-8'>
              <h2 className='flex md:text-xl'>{car.plate}</h2>
              <div className=' flex md:items-center md:justify-end   '>
              <IoIosArrowDropdownCircle className={`cursor-pointer rounded-full hover:text-white w-8 h-8 hover:bg-slate-400 ${expand && "rotate-180"}`}  size={20} onClick={()=>setExpand(!expand)} />
            </div>
            </div>
            <div className={expand? 'visible':'hidden'}>
              {car.metrics.length? (car.metrics.map((metric)=>{
                return(<MetricsAccordion metric={metric}/>)
              })) :<></>}
            </div>
            <div className={expand && car.total>0? 'visible  p-2':'hidden'}>
              <hr className='border-2 border-red-800  ' />
              <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-1 mt-2'>
                <div className={car.Km>0? 'md:grid md:grid-cols-2 md:gap-2' : 'hidden'}>
                  <div className='md:flex md:justify-end '>
                    <FaRoad size={20}  />
                  </div>
                  <h2>{car.Km}Km</h2>
                </div>
                <div className={car.total>0? 'md:grid md:grid-cols-2 md:gap-2' : 'hidden'}>
                  <div className='md:flex md:justify-end '>
                    <RiMoneyEuroCircleFill size={20}  />
                  </div>
                  <h2>{car.total}&euro;</h2>
                </div>                
                <div className={car.litres>0? 'md:grid md:grid-cols-2 md:gap-2' : 'hidden'}>
                  <div className='md:flex md:justify-end '>
                    <FaGasPump size={20}  />
                  </div>
                  <h2>{car.litres}L</h2>
                </div>               
              </div>
            </div>
            
          </div>
  )
  
}

export default CarAccordion