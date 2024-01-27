import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
  <div className='maindiv h-[100%]'>

<Navbar/>

<div className='px-8 md:px-[200px] mt-8 bg-yellow-200  '>

<div className='titlediv flex justify-between items-center'>
    <h1 className='text-2xl font-bold text-black md:text-3xl '>
    10 Uses of Artificial Intelligence in Day to Day Life.
    </h1>

    <div className='btndiv flex items-center justify-center space-x-2'>
<p><BiEdit /></p>
<p><MdDelete /> </p>
    </div>

</div>

<div className='flex items-center justify-between mt-2 md:mt-4 '>
<p>@snehasishdev</p>
<div className='date&time flex space-x-2'>
  <span>Date & Time:</span><p>16/06/2-23</p>
  <p>16:45</p>
</div>

</div>

<img src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg" alt="" className='w-full h-[65vh] mx-auto rounded-lg mt-8' />

<p className='postdescription mx-auto mt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

<div className='categorydiv flex items-center mt-8 space-x-4 font-semibold bg-blue-200'>
<p>categories:</p>

<div className='categories flex justify-center items-center space-x-2'>

<h1 className='bg-gray-300 rounded-lg px-3 py-1'>Tech</h1>
<h1 className='bg-gray-300 rounded-lg px-3 py-1'>AI</h1>
<h1 className='bg-gray-300 rounded-lg px-3 py-1'>Ola</h1>
<h1 className='bg-gray-300 rounded-lg px-3 py-1'>iPhone</h1>

</div>


</div>


<div className='commentsection flex flex-col mt-4 bg-red-200'>
<h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>

<div className='comments px-2 py-2 bg-gray-200 rounded-lg my-2'>

<div className='personCommentdiv flex items-center justify-between '>
<h3 className='font-bold text-gray-600'>@snehasishdev</h3>
<div className='date&time flex justify-center items-center space-x-4'>
  <span>Date & Time:</span><p className='text-gray-500 text-sm'>16/06/2-23</p>
  <p className='text-gray-500 text-sm'>16:45</p>
  <div className='btndiv flex items-center justify-center space-x-2'>
<p><BiEdit /></p>
<p><MdDelete /></p>
    </div>

</div>

</div>

<p className='px-4 mt-2'>Nice Information</p>


</div>

<div className='comments px-2 py-2 bg-gray-200 rounded-lg my-2'>

<div className='personCommentdiv flex items-center justify-between '>
<h3 className='font-bold text-gray-600'>@snehasishdev</h3>
<div className='date&time flex justify-center items-center space-x-4'>
  <span>Date & Time:</span><p className='text-gray-500 text-sm'>16/06/2-23</p>
  <p className='text-gray-500 text-sm'>16:45</p>
  <div className='btndiv flex items-center justify-center space-x-2'>
<p><BiEdit /></p>
<p><MdDelete /></p>
    </div>

</div>

</div>

<p className='px-4 mt-2'>Nice Information</p>


</div>


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