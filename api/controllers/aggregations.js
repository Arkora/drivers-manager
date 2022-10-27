import User from "../models/User.js";
import Car from "../models/Car.js";
import Metrics from "../models/Metrics.js";
import mongoose from "mongoose";

export const getDriverReports = async (req,res) =>{
    const {id} = req.params

    try{
        var driver = await Car.aggregate([
            {
                '$match':{
                    'users':mongoose.Types.ObjectId(id)
                }
            },
            {'$lookup':{
                'from': Metrics.collection.name,
                'let':{'metrics':'$metrics'},
                'pipeline':[
                  {
                    '$match':{
                        '$and':[
                            {'$expr':{'$in':['$_id','$$metrics']}},
                            {'user_id':mongoose.Types.ObjectId(id)}
                        ]
                        
                    }
                }
                ],
                'as':'metrics'
              }
            },
            {
                $set:{                  
                  'total': { $sum: "$metrics.total" },
                  'Km': { $sum: "$metrics.km" },
                  'litres': { $sum: "$metrics.litres" },
                }

              },
            {
                '$project':{
                    "_id":1,
                    "plate":1,
                "metrics":{'_id':1,'km':1,'total':1,'litres':1,'created':1},
                    'total':1,
                    'Km':1,
                    'litres':1
                }
            }
            
        ])

        res.status(200).send({cars:driver})
    }catch(error){
        res.send(error.message)
    }
}
export const driversReports = async (req,res) =>{
    const {start,end} = req.query   

    try{
        var drivers = await Car.aggregate([
            
            {'$lookup':{
                'from': Metrics.collection.name,
                'let':{'metrics':'$metrics'},
                'pipeline':[
                  {'$match':{'$and':[
                    {'$expr':{'$in':['$_id','$$metrics']}},
                    {'created': { $gt:new Date(start), $lt:new Date(end) }}
                ]}},
                 
                ],
                'as':'metrics'
              }
            },            
            {
                '$unwind':'$metrics'
            },            
            {
                '$lookup':{
                    'from':User.collection.name,
                    'let':{'users':'$users'},
                    'pipeline':[
                         {'$match':{'$expr':{'$in':['$_id','$$users']}}}
                    ],
                    'as':'users'
                }
            },
            {
                '$unwind':'$users'
            },
            {
                '$group':{
                    '_id':{'user':"$users._id",'firstname':'$users.firstname','lastname':'$users.lastname'}, 
                    'metrics':{
                        '$push':{
                            '$cond':[
                                {'$eq':['$users._id','$metrics.user_id']},
                                {
                                    '_id':'$metrics._id',
                                    'user_id':'$metrics.user_id',
                                    'km':'$metrics.km',
                                    'total':'$metrics.total',
                                    'litres':'$metrics.litres',
                                    'created':'$metrics.created',
                                    
                                },
                                false
                            ]
                            
                        }
                    },              
                
                },
            },            
            {
                $set:{                  
                    'totalSum': { $sum: "$metrics.total" },
                    'totalKm': { $sum: "$metrics.km" },
                    'totalLitres': { $sum: "$metrics.litres" }, 
                    'firstname':'$_id.firstname',                 
                  }
                  
            },           
            {
                '$project':{                    
                    'users':{'firstname':1,'lastname':1,'_id':1},
                    "metrics":{'_id':1,'km':1,'total':1,'litres':1,'user_id':1,'created':1,'sumTotal':1},
                    'totalSum':1,
                    'totalKm':1,
                    'totalLitres':1
                }
            }
        ])
        
        res.status(200).send(drivers)
    }catch(error){
        res.send(error.message)
    }
}