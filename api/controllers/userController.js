import User from "../models/User.js";

export const register = async(req,res) =>{
    const {firstname,lastname,email,password} = req.body 
    try {

        const user = new User({firstname,lastname,email,password})
            await user.save()
            res.status(201).send("User created")
        
    } catch (error) {
        console.log(error)
    }   
    //console.log(firstname +" "+ lastname +" "+ email +" "+ password )
    
}

export const login = async (req,res) =>{
    const {email,password} = req.body
    res.status(200).send(email)
}

