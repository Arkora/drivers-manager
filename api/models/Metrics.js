import mongoose from "mongoose";

const metricSchema = mongoose.Schema({
  user_id:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
  km: { type: Number, required:  true },
  total: { type: Number, required:  true },
  litres: { type: Number, required:  true },
  created:  { type: Date, default:  Date.now}
 
});

export default mongoose.model("Metrics", metricSchema);