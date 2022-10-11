import Car from '../models/Car.js'
import Metrics from '../models/Metrics.js'

export const addValue = async (req,res) =>{
    const {id,km,total,litres} = req.body
    try{
        
        const car = await Car.findById(id)  
       
        
        
        const metric = new Metrics({km,total,litres})
        metric.save()
         await Car.findByIdAndUpdate(
            id,
            {
                $push: { metrics: metric._id }
            },
            { new: true, useFindAndModify: false },
        )
        res.status(201).send({message:`OK`})

    }catch(error){
        res.status(409).send({message:`Something gone wrong`}) 
    }

}