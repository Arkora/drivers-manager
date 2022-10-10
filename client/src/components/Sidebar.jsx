import React,{useState} from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { MdSettings, MdDashboard} from 'react-icons/md'
import {BsFillArrowLeftCircleFill,BsInboxFill,BsFillPersonFill,BsBarChartLineFill} from 'react-icons/bs'
import {SiPlatformdotsh} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'



const Sidebar = () => {
    
    const [open, setOpen] = useState(false);

    

  return (
    <div className={` ${ open ? "w-72" : "w-20 " } bg-gray-800 h-screen p-5  pt-8 relative duration-300`} >
    <BsFillArrowLeftCircleFill size={35} className={`absolute cursor-pointer -right-3 top-9 w-7 text-slate-50 bg-gray-800 p-1 rounded-full ${!open && "rotate-180"}`}
      onClick={() => setOpen(!open)} />
    <div className="flex gap-x-4 items-center">
      <CgProfile size={35} className={`cursor-pointer text-slate-50 duration-500 ${ open && "rotate-[360deg]" }`} />
      <h1 className={`text-white origin-left font-medium text-xl duration-200 ${ !open && "scale-0" }`} > Jordan Petersnon </h1>
    </div>
    <div className='mt-20'>
      <ul className="pt-6 ">
          <Link to="/dashboard">
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-200 text-slate-50 hover:text-black text-sm items-center gap-x-4`}>
              <MdDashboard size={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>Dashboard</span>
            </li>          
          </Link>
          <Link to='/inbox'>
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-200 text-slate-50 hover:text-black text-sm items-center gap-x-4`}>
              <BsInboxFill size={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>Inbox</span>
            </li>
          </Link>
          <Link to='/form'>
            <li className={`flex  rounded-md p-2 mt-6 cursor-pointer hover:bg-slate-200 text-slate-50 hover:text-black text-sm items-center gap-x-4`}>
              <SiPlatformdotsh size={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>Form</span>
            </li>
          </Link>
          <Link to='/profile'>
            <li className={`flex  rounded-md p-2  cursor-pointer hover:bg-slate-200 text-slate-50 hover:text-black text-sm items-center gap-x-4`}>
              <BsFillPersonFill size={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>Profile</span>
            </li>
          </Link>
          <Link to='/reports'>
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-200 text-slate-50 hover:text-black text-sm items-center gap-x-4`}>
              <BsBarChartLineFill size={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>Reports</span>
            </li>
          </Link>
          <Link to='/settings'>
            <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-200 text-slate-50 hover:text-black text-sm items-center gap-x-4`}>
              <MdSettings size={20} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>Settings</span>
            </li>
          </Link>
      </ul>
    </div>
    <Link to={'/'} className='flex  rounded-md p-2 mt-20 cursor-pointer hover:bg-slate-200 text-slate-50 hover:text-black text-sm items-center gap-x-4 '>
     <FaPowerOff size={20} /> <span className={`${!open && "hidden"} origin-left duration-200`}> Log Out</span>
    </Link>
  </div>
    
  )
}

export default Sidebar