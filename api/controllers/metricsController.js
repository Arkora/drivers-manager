import mongoose from 'mongoose'
import Car from '../models/Car.js'
import Metrics from '../models/Metrics.js'

export const addValue = async (req,res) =>{
    const {user_id,car_id,km,total,litres} = req.body

    try{     
        var exist = await Car.find({ '$and':[{'_id':car_id},{'users':user_id}]})
              
          
        if(exist.length === 0){
            const metric = new Metrics({user_id,km,total,litres})
            metric.save()
            await Car.findByIdAndUpdate(car_id,
                {
                    $push: {users:user_id, metrics:metric._id },
                    
                },
                {new: true, useFindAndModify: false },
                
            )
        }else{
            const metric = new Metrics({user_id,km,total,litres})
            metric.save()
            await Car.findByIdAndUpdate(car_id,
                {
                    $push: { metrics:metric._id },
                    
                },
                {new: true, useFindAndModify: false },
                
            )
        }

         res.status(201).send({message:`OK`})

    }catch(error){
        res.status(409).send({message:`Something gone wrong`}) 
        
    }

}

export const deleteMetric = async(req,res) =>{
    const {id} = req.params
    try {
        await Metrics.findByIdAndDelete(id)
        res.status(200).send({message:"Deleted"})
    } catch (error) {
        res.send(409).send({message:error})
    }
}

export const updateMetric = async(req,res) =>{
    const {id} = req.params
    const {km,total,litres} = req.body
    try {
       const updated =  await Metrics.findByIdAndUpdate(id,{km:km,total:total,litres:litres})
       res.send(200).send(updated)
    } catch (error) {
        res.send(409).send({message:error})
    }
}