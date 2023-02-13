import Photo from "../models/photoModel.js";


const createPhoto=(req,res)=>{
    console.log(req.body);
    const photo = Photo.cretate(req.body)
    res.status(201).json({
        succeded:true,
        photo,
    })
}


export { createPhoto };