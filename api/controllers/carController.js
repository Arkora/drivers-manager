import Car from '../models/Car.js'

export const addCar = async (req,res) =>{
    const {plate} = req.body
    try {
        const car = new Car({plate})
        car.save()
        res.status(201).send("Car with plate added " + plate)
    } catch (error) {
        console.log(error)
    }
}