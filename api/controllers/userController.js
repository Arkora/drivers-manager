import User from "../models/User.js";
import bcrypt from 'bcrypt'
import Car from "../models/Car.js";
import Metrcis from '../models/Metrics.js'
import mongoose, { model } from "mongoose";


export const register = async(req,res) =>{
    
    const {firstname,lastname,email,password} = req.body 
    const encryptedPassword = await bcrypt.hash(password, 10)
    try {
        
        const user = new User({firstname,lastname,email,password:encryptedPassword})
            await user.save()
            res.status(201).send({message:"Signup Successfull"})
        
    } catch (error) {
        res.status(409).send({message:"Email Already exists"})
    }   
    
    
}

