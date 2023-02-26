import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
  console.log("REQ BODY", req.body);
  await Photo.create({
    name: req.body.name,
    description: req.body.description,
    user: res.locals.user._id,
  });
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
    const photo = await Photo.findById({ _id: req.params.id });
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
