import User from "../models/userModel.js";


const createUser=async (req,res)=>{
    console.log('REQ BODY',req.body);
    const user =await User.create(req.body)
    res.status(201).json({
        succeded:true,
        user,
    })
}



export { createUser };