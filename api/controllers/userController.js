import User from "../models/User.js";
import bcrypt from 'bcrypt'
import Car from "../models/Car.js";
import Metrcis from '../models/Metrics.js'
import mongoose, { model } from "mongoose";
import { query } from "express";

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

export const login = async (req,res) =>{
    const {email,password} = req.body
    
    try{
        const user = await User.findOne({email})
        if(!user) return res.status(404).send({ message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) return res.status(400).send({ message: "Invalid Password" })
        

        const userDetails = {id:user._id,firstname:user.firstname,lastname:user.lastname,role:user.role}
        res.status(200).send(userDetails) 
    }catch(error){
        res.status(404).send({message:error.message})
    }
}

export const getUser = async(req,res) =>{

    const {id} = req.params
    
    try{
        
        const user = await User.findById(id)
        .populate({ path: 'cars',model:'Car',select:'plate metrics', populate: { path: 'metrics', model:'Metrics',select:"km total litres created" }})
                                
        const userDetails = {id:user._id,firstname:user.firstname,lastname:user.lastname,role:user.role,cars:user.cars}        
        res.status(200).send(userDetails) 
        
    }catch(error){
        res.status(404).send({message:error.message})
    }
}



export const getUserWithSum = async(req,res) =>{

    const {id} = req.params
    
    try{
        
        
        var user = await User.aggregate([
          {
            '$match': {
              '_id': mongoose.Types.ObjectId(id)
            }
          },{
              '$lookup': {
                'from': Car.collection.name, 
                 'let': {'cars':'$cars'},
                 'pipeline': [
                  {'$match':{'$expr':{'$in':['$_id','$$cars']}}},
                  {'$lookup':{
                    'from':Metrcis.collection.name,
                    'let':{'metrics':'$metrics'},
                    'pipeline':[
                      {'$match':{'$expr':{'$in':['$_id','$$metrics']}}}
                    ],
                    'as':'metrics'
                  }},
                  {
                    $set: {
                       total: { $sum: "$metrics.total" },
                       
                    }
                  }
                 ],
                 'as':"cars"
              }
            },{
              '$project': {
              'firstname': 1, 
              'lastname': 1, 
              'role':1,
              'cars': {'_id': 1,'plate': 1,'total':1,'metrics': {
                  '_id':1,
                  'km': 1, 
                  'total': 1, 
                  'litres': 1,
                  'created':1
                  }
                }
              }
            }
          ]) 
          
        const userDetails = {id:user[0]._id,firstname:user[0].firstname,lastname:user[0].lastname,role:user[0].role,cars:user[0].cars}    
        
        res.status(200).send(userDetails) 
        
    }catch(error){
        res.status(404).send({message:error.message})
    }

}

export const userReports = async (req,res) =>{
  const {start,end} = req.query
  
  try {
    var user = await User.aggregate([
     {
          '$lookup': {
            'from': Car.collection.name, 
             'let': {'cars':'$cars'},
             'pipeline': [
              {'$match':{'$expr':{'$in':['$_id','$$cars']}}},
              {'$lookup':{
                'from':Metrcis.collection.name,
                'let':{'metrics':'$metrics'},
                'pipeline':[
                  {'$match':{'$expr':{'$in':['$_id','$$metrics']}}}
                ],
                'as':'metrics'
              }},
              {
                $match: {
                   'metrics.created': { $gt:new Date(start), $lt:new Date(end) },
                   
                }
                
              },
              {
                $set:{                  
                  'total': { $sum: "$metrics.total" },
                  'Km': { $sum: "$metrics.km" },
                  'litres': { $sum: "$metrics.litres" },
                }

              },              
             ],
             'as':"cars"
          }
        },
        {
          $set:{                  
            'totalSum': { $sum: "$cars.total" },
            'totalKm': { $sum: "$cars.Km" },
            'totalLitres': { $sum: "$cars.litres" },
          }
        },       
        {
          '$project': {
          'firstname': 1, 
          'lastname': 1, 
          'role':1,
          'cars': {'_id': 1,'plate': 1,'total':1,'Km':1,'litres':1,metrics: {
              '_id':1,
              'km': 1, 
              'total': 1, 
              'litres': 1,
              'created':1
              }
            },
          'totalSum' :1,
          'totalKm':1,
          'totalLitres':1
          }
        }
      ])    
    res.send(user)
  } catch (error) {
    res.status(404).send({message:error.message})
  }
}

