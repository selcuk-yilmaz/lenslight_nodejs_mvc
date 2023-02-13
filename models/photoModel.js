import mongoose from "mongoose"


const {Schema} = mongoose

const photoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  uploadedAt: {
    type: String,
    required: true,
  },
});
const Photo = mongoose.model("photo",photoSchema)

export default Photo