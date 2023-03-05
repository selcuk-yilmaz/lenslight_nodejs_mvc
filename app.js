import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import cookieParser from 'cookie-parser'
import pageRoute from "./routes/pageRoute.js"
import photoRoute from "./routes/photoRoute.js"
import userRoute from "./routes/userRoute.js"
import {checkUser} from "./middlewares/authMiddleware.js"
import fileUpload from "express-fileupload"
import {v2 as cloudinary} from "cloudinary"
import methodOverride from "method-override";


dotenv.config()
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})
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
//!cloudinary e yüklediğimiz görselller için geçici temp folder oluşcak onun için
app.use(fileUpload({useTempFiles:true}))
//!link e tıklayarak put işlemşini yapabilmek için
app.use(methodOverride("_method",{methods:['POST','GET']}))
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