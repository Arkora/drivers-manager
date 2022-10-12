import React from 'react'
import Accordion from './Accordion'


function UserStatics({cars}) {

  return (
    <div className="block  p-6 rounded-lg shadow-lg bg-white h-screen w-4/5 overflow-auto ">
      <h2 className='mb-2 flex text-lg font-bold justify-center'> Cars Statistics </h2>       
      {cars.lenght? (cars.map((car)=>{
        return(<div className=" bg-white border mb-2 border-gray-200">
        <h2 className="mb-0" >{car.plate}</h2>
        {car.metrics.length?(car.metrics.map((metric)=>{
          return(<Accordion metric={metric} />)
          
        })) :<></>}
        </div>)
      })):<></>}
   </div>
  )
}

export default UserStatics