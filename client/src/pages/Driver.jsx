import React from 'react'
import Header from '../components/Header'
import UserForm from '../components/UserForm'
import UserStatics from '../components/UserStatics'
import UserDashboard from '../components/UserDashboard'

const Driver = () => {
  return (
    
    <div className="h-screen flex flex-row justify-start">
      <UserDashboard />
      <div className="h-screen flex-auto overflow-auto">
        <Header />
       <div className='flex items-center mt-6 justify-center'>
         <UserForm />
       </div>
       <div className='flex items-center mt-6 justify-center '>
        <UserStatics />
      </div>
      </div>
    </div>
    
  )
}

export default Driver