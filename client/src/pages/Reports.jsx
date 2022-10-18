import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import DatePicker from '../components/DatePicker'
import { fetchReport } from '../api'
import UserStatics from '../components/UserStatics'


const Reports = () => {
  const [query, setQuery] = useState({start:"",end:""})
  const [data, setData] = useState([])

  const getReport = async () =>{
    try {
      const {data} = await fetchReport(query)     
      setData(data)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  useEffect(()=>{
    getReport()    
  },[query])

  return (
    <div className="h-screen flex flex-row justify-start">
    <Sidebar />
    <div className="h-screen flex-auto overflow-auto">
     <Header header={'Reports'}/>
     <div className='flex items-center mt-6 justify-center'>
      <DatePicker setQuery={setQuery} query={query}/>      
    </div>
    <div className='flex items-center h-screen mt-6 justify-center '>
        <div className='block  p-6 rounded-lg shadow-lg bg-white h-screen w-4/5 overflow-auto'>
          <h1 className='mb-2  flex text-4xl font-bold justify-center'>DRIVERS REPORTS</h1>
          {data && data.length? (data.map((user)=>{
            return(
              <div className='mt-6'>
                <UserStatics user={user} />

              </div>
            )
          })) : <></>}
        </div>
      </div>    
   </div>
 </div>
  )
}

export default Reports