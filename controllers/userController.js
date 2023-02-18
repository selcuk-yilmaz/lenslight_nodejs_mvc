import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createUser=async (req,res)=>{
    try {
        // console.log('REQ BODY',req.body);
        const user =await User.create(req.body)
        res.status(201).json({
          succeded: true,
          user,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        }); 
    }
}
const loginUser = async (req,res)=>{
    try {
        const {username,password} = req.body
        // console.log("req.body",req.body);
        const user = await User.findOne({username:username})
        let same = false
        if (user){
            same = await bcrypt.compare(password, user.password);
            // console.log("same",same);
        }else{
            return res.status(401).json({
                succeded: false,
                error: 'There is no such user'
            })
        }
        if (same) {
            const token = createToken(user._id);
            res.cookie("jsonwebtoken",token,{
                httpOnly:true,
                maxAge:1000*60*60*24,
            });
          res.status(200)
          .json({
            user,
            // token: createToken(user._id)
          });
        //   .send("You are logged in")
        } else {
          res.status(401).json({
            succeded: false,
            error: "passwords are not matched",
          });
        }
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error:'this is not entrance try'
        }); 
    }
}
const createToken = (userId) =>{
    return jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'1d',
    });
};
export { createUser, loginUser };