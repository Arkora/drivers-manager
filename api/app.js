import express from "express"
import bodyParser from 'body-parser'
import Cors from 'cors'
import userRouter from './routes/userRouter.js'
import carRouter from './routes/carRouter.js'
import dotenv from 'dotenv'
import mongoose from "mongoose"




dotenv.config();
const app = express();

const PORT = 8000;

app.use(Cors())
app.use(bodyParser.json())
app.use('/user',userRouter)
app.use('/car',carRouter)





app.get('/',(req,res) =>{
    res.send("Api v1.0");
});


mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("DB Connected")
})


app.listen(PORT,()=>{console.log("Server running on port: 8000")})