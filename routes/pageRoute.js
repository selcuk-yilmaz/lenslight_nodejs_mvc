import express from "express"
//--------------------
//!iki farklı import şekli var.İkincisini kullanırsan süslü içini direkt kullanabilirsin...
import * as  pageController from "../controllers/pageController.js"
// import { getIndexPage, getAboutPage } from "../controllers/pageController.js";
//------------------------------
// import * as authMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router()
router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage)
router.route("/register").get(pageController.getRegisterPage)
router.route("/login").get(pageController.getLoginPage)



export default router