import React,{useState} from 'react'
import CarAccordion from './CarAccordion'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import {FaRoad,FaGasPump} from 'react-icons/fa'
import {RiMoneyEuroCircleFill} from 'react-icons/ri'

function UserStatics({user}) {
  const [expand, setExpand] = useState(false)

  return (
          <div className=" bg-gray-800 text-slate-50 rounded-sm p-2 font-bold mb-2 border-gray-200">
            <div className='grid grid-cols-2 gap-8'>
              <h2 className='flex md:text-xl'>{user.firstname} {user.lastname}</h2>
              <div className=' flex md:items-center md:justify-end   '>
              <IoIosArrowDropdownCircle className={`cursor-pointer rounded-full hover:text-white w-8 h-8 hover:bg-slate-400 ${expand && "rotate-180"}`}  size={20} onClick={()=>setExpand(!expand)} />
            </div>
            </div>
            <div className={expand? 'visible':'hidden'}>
              {user.cars.length? (user.cars.map((car)=>{
                return(
                  <div>
                    <CarAccordion car={car}/>
                  </div>
                  )
              })) :<></>}
            </div>
            <div className={expand && user.totalSum>0? 'visible mt-3 p-2':'hidden'}>             
              <h1 className='flex items-center justify-center text-4xl mb-4'>TOTALS</h1>
              <div className='grid sm:grid-cols-1 md:grid-cols-3 border-4 p-1 rounded-md border-red-800 gap-1 mt-2'>
              <div className={user.totalKm>0? 'md:grid md:grid-cols-2 md:gap-2' : 'hidden'}>
                  <div className='md:flex md:justify-end '>
                    <FaRoad size={20}  />
                  </div>
                  <h2>{user.totalKm}Km</h2>
                </div>
                <div className={user.totalSum>0? 'md:grid md:grid-cols-2 md:gap-2' : 'hidden'}>
                  <div className='md:flex md:justify-end '>
                    <RiMoneyEuroCircleFill size={20}  />
                  </div>
                  <h2>{user.totalSum}&euro;</h2>
                </div>                
                <div className={user.totalLitres>0? 'md:grid md:grid-cols-2 md:gap-2' : 'hidden'}>
                  <div className='md:flex md:justify-end '>
                    <FaGasPump size={20}  />
                  </div>
                  <h2>{user.totalLitres}L</h2>
                </div>
              </div>
            </div>
            
          </div>
  )
}

export default UserStatics