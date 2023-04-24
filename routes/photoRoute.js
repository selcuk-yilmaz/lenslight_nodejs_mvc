import express from "express";
//--------------------
//!iki farklı import şekli var.İkincisini kullanırsan süslü içini direkt kullanabilirsin...
import * as photoController from "../controllers/photoController.js";
// import { getIndexPage, getAboutPage } from "../controllers/pageController.js";
//------------------------------
const router = express.Router();
//! bu sayfadaki her yerde / == /photos demektir
router.route("/").post(photoController.createPhoto);
router.route("/").get(photoController.getAllPhotos);
router.route("/:id").get(photoController.getAPhoto);
router.route("/:id").delete(photoController.deletePhoto);
router.route("/:id").put(photoController.updatePhoto);

export default router;
