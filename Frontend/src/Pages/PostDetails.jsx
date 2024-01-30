import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Comment from "../Components/Comment"
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {URL} from "../Url"

const PostDetails = () => {

const postId = useParams().id
// console.log(postId)
const [post, setpost] = useState({})


const fetchPost = async()=>{
  try{  

    const res = await axios.get(URL+"/api/posts/"+postId)
    // console.log(res.data)
    setpost(res.data)

  }catch(err){
    console.log(err)
  }
}


useEffect(()=>{
  fetchPost()
},[postId])

  return (
  <div className='maindiv h-[100%]'>

<Navbar/>

<div className='px-8 md:px-[200px] mt-8 bg-yellow-200  '>

<div className='titlediv flex justify-between items-center'>
    <h1 className='text-2xl font-bold text-black md:text-3xl '>
    {post.title}
    </h1>

    <div className='btndiv flex items-center justify-center space-x-2'>
<p className='text-xl'><BiEdit /></p>
<p className='text-xl'><MdDelete /> </p>
    </div>

</div>

<div className='flex items-center justify-between mt-2 md:mt-4 '>
<p>@{post.username}</p>
<div className='date&time flex space-x-2'>
  <span>Date & Time:</span><p>{ new Date(post.updatedAt).toString().slice(0,15)}</p>
  <p>{ new Date(post.updatedAt).toString().slice(16,24)}</p>
</div>

</div>

<img src={post.photo} alt="" className='w-full h-[65vh] mx-auto rounded-lg mt-8' />

<p className='postdescription mx-auto mt-8'>{post.desc}</p>

<div className='categorydiv flex items-center mt-8 space-x-4 font-semibold bg-blue-200'>
<p>categories:</p>

<div className='categories flex justify-center items-center space-x-2'>
{post.categories?.map((c,i)=>(
<>
<h1 key={i} className='bg-gray-300 rounded-lg px-3 py-1'>{c}</h1>

</>
  
))}

</div>


</div>

{/* comment */}
<div className='commentsection flex flex-col mt-4 bg-red-200'>
<h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
<Comment/>
<Comment/>
<Comment/>



</div>

{/* write a comment */}
<div className=' w-full flex flex-col mt-4 md:flex-row  '>
  <input type="text" placeholder='Write a Comment!' className='md:w-[80%] outline-none px-4 py-2 mt-4 md:mt-0 bg-green-200' />
  <button className='bg-black text-white text-sm px-4 py-2 rounded md:w-[20%] mt-4 md:mt-0'>Add Comment</button>
</div>



</div>







<Footer/>


    </div>
  )
}

export default PostDetails