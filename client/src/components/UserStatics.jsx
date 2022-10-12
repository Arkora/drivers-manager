import React from 'react'
import Accordion from './Accordion'

function UserStatics({cars}) {
  return (
    <div className="block  p-6 rounded-lg shadow-lg bg-white h-screen w-4/5 overflow-auto ">
        <h2 className='mb-2 flex text-lg font-bold justify-center'> Cars Statistics </h2>
        {cars.length?(cars.map((car)=>{
          return(<Accordion car={car}/>)
        })):<></>}       

     
    </div>
  )
}

export default UserStatics