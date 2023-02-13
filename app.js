import express from "express"
import dotenv from "dotenv"
import conn from "./db.js"
import pageRoute from "./routes/pageRoute.js"
import photoRoute from "./routes/photoRoute.js"

dotenv.config()
//connection db
conn()
const app = express()
const port = process.env.PORT
// ejs template engine
app.set("view engine","ejs")


//static files middleware
app.use(express.static("public"))
//!gelen req.body deki json formatını okuyabilmek için
app.use(express.json())
//-------------------------------------
//!below is routes process
app.use("/",pageRoute)
app.use("/photos", photoRoute);
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