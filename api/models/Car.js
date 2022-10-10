import mongoose from 'mongoose'

const carSchema = mongoose.Schema({
    plate: { type: String, required: true, unique:true },
    metrics:[{type:mongoose.Schema.Types.ObjectId,ref:"Metric"}]
})

export default mongoose.model("Car",carSchema)