import React from 'react'
import { MdSettings} from 'react-icons/md'
import {BsInboxFill,BsFillPersonFill,BsBarChartLineFill} from 'react-icons/bs'
import {AiFillCar,AiOutlineForm} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='block p-6 rounded-lg  mt-20 bg-white lg:w-full'>
      <div className='grid lg:grid-cols-3 gap-1 '>   

        <Link to={'/profile'} className='flex'>
        
         <div className='hover:bg-slate-400 hover:text-slate-50 p-6 h-full items-center justify-center flex rounded-lg shadow-lg mt-20 bg-white lg:w-full'>
          <BsFillPersonFill size={50}  />
          <h1 className='text-xl'>Profile</h1>          
         </div>         
       
        </Link>

        <Link to={'/settings'} className='flex '>
         <div className='hover:bg-slate-400 hover:text-slate-50 p-6 h-full items-center justify-center flex rounded-lg shadow-lg mt-20 bg-white lg:w-full'>
          <MdSettings size={50} />
          <h1 className='text-xl'>Settings</h1>          
         </div>
        </Link>

        <Link to={'/reports'} className='flex '>
         <div className='hover:bg-slate-400 hover:text-slate-50 p-6 h-full items-center justify-center flex rounded-lg shadow-lg mt-20 bg-white lg:w-full'>
          <BsBarChartLineFill size={50} />
          <h1 className='text-xl'>Reports</h1>          
         </div>
        </Link>
       
        <Link to={'/inbox'} className='flex '>
         <div className='hover:bg-slate-400 hover:text-slate-50 p-6 h-full items-center justify-center flex rounded-lg shadow-lg mt-20 bg-white lg:w-full'>
          <BsInboxFill size={50} />
          <h1 className='text-xl'>Inbox</h1>          
         </div>
        </Link>

        <Link to={'/form'} className='flex '>
         <div className='hover:bg-slate-400 hover:text-slate-50 p-6 h-full items-center justify-center flex rounded-lg shadow-lg mt-20 bg-white lg:w-full'>
          <AiOutlineForm size={50} />
          <h1 className='text-xl'>Form</h1>          
         </div>
        </Link >
        
        <Link to={'/car'} className='flex '>
         <div className='hover:bg-slate-400 hover:text-slate-50 p-6 h-full items-center justify-center flex rounded-lg shadow-lg mt-20 bg-white lg:w-full'>
          <AiFillCar size={50} />
          <h1 className='text-xl'>Car Form</h1>          
         </div>
        </Link >
      

      </div>
    </div>
  )
}

export default Dashboard