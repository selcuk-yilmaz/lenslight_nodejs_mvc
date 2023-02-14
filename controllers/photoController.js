import Photo from "../models/photoModel.js";


const createPhoto=async (req,res)=>{
    console.log('REQ BODY',req.body);
    const photo =await Photo.create(req.body)
    res.status(201).json({
        succeded:true,
        photo,
    })
}
const getAllPhotos = async (req,res)=>{
    try {
        const photos = await Photo.find({});
        res.status(200).render("photos",{
            photos,
            link:"photos"
        });
        // .json({
        //   succeded: true,
        //   photos,
        // });
        
    } catch (error) {
        res.status(500).json({
          succeded: true,
          error,
        });
    }
}

export { createPhoto, getAllPhotos };