const express = require("express")
const router = express.Router()
const UserModel = require("../Models/usersModel")
const bcrypt = require("bcrypt")
const PostModel = require("../Models/postsModel")
const CommentModel = require("../Models/commentModel")

//CREATE POST

router.post("/create", async(req,res)=>{
    try{

const newpost = new PostModel(req.body)
await newpost.save()
res.status(200).json(newpost)


    }catch(err){
        res.status(200).json(err)
    }
})







//UPDATE POST

router.put("/:id", async(req,res)=>{
    try{

const updatePost = await PostModel.findByIdAndUpdate(req.params.id,{$set: req.body}, {new:true})
res.status(200).json( updatePost)

    }catch(err){
        res.status(500).json(err)
    }
})


//DELETE POST

router.delete("/:id", async(req,res)=>{
    try{
        await PostModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Post has been deleted")


    }catch(err){
        res.status(200).json(err)
    }
})


//GET POST DETAILS


router.get("/:id", async(req,res)=>{
    try{
        const Post = await PostModel.findById(req.params.id)
        res.status(200).json(Post)


    }catch(err){
        res.status(200).json(err)
    }
})



//GET  ALL POSTS


router.get("/", async(req,res)=>{
    try{
        const Posts = await PostModel.find()
        res.status(200).json(Posts)


    }catch(err){
        res.status(200).json(err)
    }
})



//GET  USERS POSTS


router.get("/user/:userId", async(req,res)=>{
    try{
        const Posts = await PostModel.find({userId: req.params.userId})
        res.status(200).json(Posts)


    }catch(err){
        res.status(200).json(err)
    }
})




module.exports = router
