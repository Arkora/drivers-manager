import mongoose from 'mongoose'

const carSchema = mongoose.Schema({
    plate: { type: String, required: true, unique:true },
    users:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    metrics: [{type:mongoose.Schema.Types.ObjectId,ref:"Metrics"}]
})

export default mongoose.model("Car",carSchema)