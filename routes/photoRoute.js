import express from "express";
//--------------------
//!iki farklı import şekli var.İkincisini kullanırsan süslü içini direkt kullanabilirsin...
import * as photoController from "../controllers/photoController.js";
// import { getIndexPage, getAboutPage } from "../controllers/pageController.js";
//------------------------------
const router = express.Router();

router.route("/").post(photoController.createPhoto);

export default router;
