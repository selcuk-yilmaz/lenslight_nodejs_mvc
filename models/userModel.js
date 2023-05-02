import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username area is required"],
      lowercase: true,
      validate:[validator.isAlphanumeric,"Only Alphanumeric characters"]
    },
    email: {
      type: String,
      required: [true, "Email area is required"],
      unique: true,
      validate:[validator.isEmail,"Valid email is required"]
    },
    password: {
      type: String,
      required: [true, "passsword area is required"],
      minLength:[4,"At least 4 character"]
    },
    followers:[
      {
        type: Schema.Types.ObjectId,
        ref:'User',
      },
    ],
    followings:[
      {
        type: Schema.Types.ObjectId,
        ref:'User',
      },
    ]
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save",function(next){
  const user = this;
  // console.log(user.password);
  bcrypt.hash(user.password,10,(err,hash) =>{
    user.password = hash;
    // console.log(user.password);
    next();
  });
});
const User = mongoose.model("User", userSchema);

export default User;
