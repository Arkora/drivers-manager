import Car from '../models/Car.js'
import User from '../models/User.js'

export const addCar = async (req,res) =>{
    const {plate} = req.body
    try {          
        const exists = await Car.findOne({plate:plate})   
        if(exists) res.status(409).send({message:`Car with plate ${plate} exist's`})
        const car = new Car({plate})
        car.save()
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

export const getCar = async(req,res) =>{
    const {id} = req.params

    try {
        const car = await Car.findById(id)
        .populate({ path: 'metrics', model:'Metrics',select:"km total litres created" })
        .select('plate metrics')
        res.status(200).send(car)
    } catch (error) {
        res.send({message:error.message})
    }
}

export const getCars = async(req,res)=>{
    try {
        const cars = await Car.aggregate().project({'_id':1,'plate':1})
        res.status(200).send(cars)
    } catch (error) {
        res.send({message:error.message})
    }
}

