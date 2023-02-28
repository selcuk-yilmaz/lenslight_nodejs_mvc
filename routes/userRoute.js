import express from "express";
//--------------------
//!iki farklı import şekli var.İkincisini kullanırsan süslü içini direkt kullanabilirsin...
import * as userController from "../controllers/userController.js";
// import { getIndexPage, getAboutPage } from "../controllers/pageController.js";
//------------------------------
import * as authMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router();

router.route("/register").post(userController.createUser);
router.route("/login").post(userController.loginUser);
router.route("/dashboard")
.get(authMiddleware.authenticateToken, userController.getDashboardPage);
router
  .route("/")
  .get(authMiddleware.authenticateToken, userController.getAllUsers);
router
  .route("/:id")
  .get(authMiddleware.authenticateToken, userController.getAUser);


export default router;
