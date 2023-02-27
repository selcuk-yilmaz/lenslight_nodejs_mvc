import Photo from "../models/photoModel.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const createPhoto = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename:true,
      folder:"lenslight_tr",
    }
  );
console.log("result", result);
  // console.log("REQ BODY", req.body);
  await Photo.create({
    name: req.body.name,
    description: req.body.description,
    user: res.locals.user._id,
    url:result.secure_url
  });

fs.unlinkSync(req.files.image.tempFilePath)

  res.status(201).redirect("/users/dashboard");
};


const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).render("photos", {
      photos,
      link: "photos",
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
};
const getAPhoto = async (req, res) => {
  try {
    const photo = await Photo.findById({ _id: req.params.id }).populate("user");
    res.status(200).render("photo", {
      photo,
      link: "photos",
    });
  } catch (error) {
    res.status(500).json({
      succeded: true,
      error,
    });
  }
};

export { createPhoto, getAllPhotos, getAPhoto };
