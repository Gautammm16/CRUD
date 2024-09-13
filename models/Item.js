// import mongoose from "mongoose";

// const itemSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   quantity: { 
//     type: Number,
//     default: 1,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.model('Item', itemSchema);




import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email:String,
  username:String,
  passwod:String,
})

export default mongoose.model("User",userSchema);