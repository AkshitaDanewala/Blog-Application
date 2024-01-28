const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()


//database
const connectDb = async()=>{
    try{
await mongoose.connect(process.env.MONGO_DB)
console.log("database connected")

    }catch(error){
        console.log(error)
    }
}
 const port = process.env.PORT

app.listen(process.env.PORT, ()=>{
    connectDb()
    console.log(`Port is running on ${port}`)
})