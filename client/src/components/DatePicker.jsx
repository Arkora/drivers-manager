import React,{useState} from 'react'

const DatePicker = ({setQuery,query}) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(); 
 
  return (
    <div className=" block p-6 rounded-lg shadow-lg bg-white md:w-5/6 lg:w-5/6 ">
      <div className='flex items-center justify-center sm:w-1/2 md:w-full' >
        <div className='grid md:grid-cols-3  p-2 gap-1' >
          <div className='flex items-center justify-center'>
            <h2 className='font-semibold'>FROM</h2>
            <span className='mx-2'>
              <input type='date' className='input' onChange={(e)=> setStartDate(new Date(e.target.value))} />
            </span>
          </div>
          <div className='flex items-center justify-center'>
            <h2 className='font-semibold'>UNTIL</h2>
            <span className='mx-2 '>
            <input type='date' className='input' onChange={(e)=> setEndDate(new Date(e.target.value))} />

            </span>
          </div>
          <div>
          <button className=" customButton " onClick={()=>setQuery({...query,start:startDate,end:endDate})}>Show Results</button></div> 
        </div>
      </div>
    </div>
  )
}

export default DatePicker