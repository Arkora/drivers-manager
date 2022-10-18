import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: { type: String, required:  true },
  lastname: { type: String, required:  true },
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  role:     { type: String, required: true, default: 'user'},
  created:  { type: Date, default:  Date.now},
  cars: [{ type:mongoose.Schema.Types.ObjectId, ref:"Car" }] 
});



export default mongoose.model("User", userSchema);