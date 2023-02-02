const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const router = require("./route/route")

const PORT = process.env.PORT || 8000

const Base_Uri = "mongodb+srv://hackathon:hackathon123@cluster0.tfewpbd.mongodb.net/test"

app.use(express.json())
app.use(cors())
app.use(router)



mongoose.connect(Base_Uri).then(()=>{
    console.log("MongoDb Connected")
}).catch((error)=>{
    console.log(error)
})






app.listen(PORT,()=>console.log(`Server Running on Local Host ${PORT}`))