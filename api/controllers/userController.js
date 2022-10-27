import User from "../models/User.js";
import bcrypt from 'bcrypt'



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

