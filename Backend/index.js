const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./Routes/auth")
const userRoute = require("./Routes/usersRoute")
const postRoute = require("./Routes/postsRoute")



const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB)
        console.log("database connected")
    }catch(err){
        console.log(err)
    }
}

//middlewares
dotenv.config()
app.use(express.json())
app.use("/api/auth",authRoute )
app.use("/api/users",userRoute )
app.use("/api/posts",postRoute )








app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log("app is running on port 5000"+process.env.PORT)
})