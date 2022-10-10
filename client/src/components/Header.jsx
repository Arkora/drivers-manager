import React from 'react'

const Header = ({header}) => {
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-gray-800 text-slate-50 lg:w-full" >        
        <div className='flex items-center  justify-center'>
          <h1 className=' text-2xl font-bold'>{header}</h1>
        </div>
    </div>
  )
}

export default Header