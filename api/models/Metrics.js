import mongoose from "mongoose";

const metricSchema = mongoose.Schema({
  km: { type: Number, required:  true },
  total: { type: Number, required:  true },
  litres: { type: Number, required:  true },
  created:  { type: Date, default:  Date.now}
});

export default mongoose.model("Metric", metricSchema);