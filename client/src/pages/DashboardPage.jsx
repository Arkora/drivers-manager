import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const DashboardPage = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
    <Sidebar />
    <div className="h-screen flex-auto overflow-auto">
      <Header header={'Dashboard'}/>
     <div className='flex items-center mt-6 justify-center'>
       <Dashboard />
     </div>    
    </div>
  </div>
  )
}

export default DashboardPage