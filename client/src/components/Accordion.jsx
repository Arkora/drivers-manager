import React from 'react'

const Accordion = ({car}) => {
  return (
    <div className=" bg-white border mb-2 border-gray-200">
    <h2 className="mb-0" >
      {car.plate}
    </h2>
    {car.metrics.length? (car.metrics.map((metric)=>{
      return(
        <div>
          <h2>{metric.km}</h2>
          <h2>{metric.total}</h2>
          <h2>{metric.litres}</h2>
        </div>
      )
    })) : <></>}
    </div>
  )
}

export default Accordion