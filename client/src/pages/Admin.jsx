import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Admin = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="h-screen flex-auto overflow-auto">
        <Header />           
      </div>
    </div>
  )
}

export default Admin