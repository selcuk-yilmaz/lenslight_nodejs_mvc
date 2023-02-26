import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import cookieParser from 'cookie-parser'
import pageRoute from "./routes/pageRoute.js"
import photoRoute from "./routes/photoRoute.js"
import userRoute from "./routes/userRoute.js"
import {checkUser} from "./middlewares/authMiddleware.js"
dotenv.config()
//connection db
conn()
const app = express()
const port = process.env.PORT
// ejs template engine
app.set("view engine","ejs")

//!static files middleware
app.use(express.static("public"))
//!gelen req.body deki json formatını okuyabilmek için
app.use(express.json())
//! form body nin içindeki verilei parse edebilmesi için
app.use(express.urlencoded({extended:true}))
//!tokenı cookie ye kaydetmek için
app.use(cookieParser());
//-------------------------------------
//!below is routes process
//! tüm get isteklerinde checkuser u kontrol et
app.use('*',checkUser)
app.use("/",pageRoute)
app.use("/photos", photoRoute);
app.use("/users", userRoute);
// app.get("/",(req,res)=>{
//     res.render("index")
// })
// app.get("/about",(req,res)=>{
//     res.render("about")
// })
//-----------------------------------------
app.listen(port,()=>{
    console.log(`Aplication running on port:${port}`)
})