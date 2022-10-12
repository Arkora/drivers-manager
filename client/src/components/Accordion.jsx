import React,{useState} from 'react'
import moment from 'moment'

const Accordion = ({metric}) => {
  const [expand, setExpand] = useState(false)  
      return(
        <div >
          <h2 className='bg-slate-800 border mb-2 hover:bg-slate-600 text-slate-50 font-bold text-lg border-gray-200'onClick={()=>setExpand(!expand)}>Date: {moment(metric.created).format('D /MM /YY')}</h2>
          <div className={expand?'grid grid-cols-3 bg-white border mb-2 border-gray-200':'hidden'}>
            <h2>Km: {metric.km}</h2>
            <h2>Total: {metric.total}</h2>
            <h2>Litres: {metric.litres}</h2>
          </div>
        </div>
      )
    
    
  
}

export default Accordion