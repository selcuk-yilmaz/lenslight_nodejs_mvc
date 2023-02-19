import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
const authenticateToken = async (req, res, next) => {
  try {
    // const authHeader = req.headers['authorization'];
    // console.log("authHeader", authHeader);
    //-----------------------
    //!aşağıyı artık header dan değil cookie den alacağız
    // const token =
    //   req.headers["authhorization"] &&
    //   req.headers["authhorization"].split(" ")[1];
    const token = req.cookies.jwt;
    //-----------------------------
    //!aşağıyı yeni baştan kurgulayacağız
    // if (!token) {
    //   return res.status(401).json({
    //     succeeded: false,
    //     error: "No token available",
    //   });
    // }
    // req.user = await User.findById(
    //   jwt.verify(token, process.env.JWT_SECRET).userId
    // );
    // next();
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
          console.log(err.message);
          res.redirect("/login");
        } else {
          next();
        }
      });
    }else{
      res.redirect("/login");
    }
    //-------------------------------
  } catch (error) {
    res.status(401).json({
      succeeded: false,
      error: "Not authorized",
    });
  }
};
export { authenticateToken };
