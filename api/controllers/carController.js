import Car from '../models/Car.js'
import User from '../models/User.js'

export const addCar = async (req,res) =>{
    const {id,plate} = req.body
    try {
        let user = await User.findById(id)        
        if(!user) return  
        const exists = await Car.findOne({plate:plate})   
        if(exists) res.status(409).send({message:`Car with plate ${plate} exist's`})
        const car = new Car({plate})
        car.save()  
         user = await User.findByIdAndUpdate(
            id,
            {
                $push: { cars: car._id }
            },
            { new: true, useFindAndModify: false },
        )      
        res.status(201).send({message:`Car with plate ${plate} added`})
    } catch (error) {
        res.status(409).send({message:`Car with plate ${plate} exist's`})
    }
}

export const deleteCar = async(req,res) =>{
    const {id} = req.params
    try {
        await Car.findByIdAndDelete(id)
        res.status(200).send({message:"Deleted"})
    } catch (error) {
        res.send({message:error.message})
    }
}

