import React from 'react'

const Header = () => {
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white lg:w-full" >
        <div className='grid grid-cols-3 gap-0'>
          <div>
           <p className="text-gray-800 mt-6 font-bold ">Name: <span className="text-blue-600 hover:text-blue-700 cursor-pointer text-base transition " >Driver Name</span>
           </p>
          </div>
          <div>
           <p className="text-gray-800 mt-6 font-bold ">Name: <span className="text-blue-600 hover:text-blue-700 cursor-pointer text-base transition " >Driver Name</span>
           </p>
          </div>
          <div>
           <p className="text-gray-800 mt-6 font-bold ">Name: <span className="text-blue-600 hover:text-blue-700 cursor-pointer text-base transition " >Driver Name</span>
           </p>
          </div>
          
        </div>
    </div>
  )
}

export default Header