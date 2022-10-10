import React from 'react'
import Header from '../components/Header'
import UserForm from '../components/UserForm'
import UserStatics from '../components/UserStatics'
import Sidebar from '../components/Sidebar'

const Form = () => {
  return (
    
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="h-screen flex-auto overflow-auto">
        <Header header={'Form'}/>
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

export default Form