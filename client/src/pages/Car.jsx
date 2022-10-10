import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import CarForm from '../components/CarForm'

const Car = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
    <Sidebar />
    <div className="h-screen flex-auto overflow-auto">
      <Header header={'Car Form'}/>
     <div className='flex items-center mt-48 justify-center'>
       <CarForm/>
     </div>    
    </div>
  </div>
  )
}

export default Car