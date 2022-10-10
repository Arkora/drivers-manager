import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'


const Reports = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
    <Sidebar />
    <div className="h-screen flex-auto overflow-auto">
     <Header header={'Reports'}/>
     <div className='flex items-center mt-6 justify-center'>
      
    </div>    
   </div>
 </div>
  )
}

export default Reports