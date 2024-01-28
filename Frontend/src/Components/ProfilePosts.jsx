import React from 'react'

const ProfilePosts = () => {
  return (

    <div className='w-full flex mt-8 space-x-8 px-4 bg-red-200 h-[35vh] py-2'>

      <div className='leftdiv w-[35%] bg-red-200 h-[180px] flex justify-center items-center rounded'>
<img src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg" alt="" className='w-full h-full rounded object-cover' />
        
      </div>

      <div className="rightdiv w-[65%] flex flex-col ">

      <h1 className='text-xl font-bold md:mb-2 mb-1 md:text-2xl'>
  10 Uses of Artificial Intelligence in Day to Day Life.</h1>

<p className='description text-sm md:text-lg '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem perferendis iusto error, similique corrupti sapiente.</p>

<div className='bg-green-200 flex flex-col items-end  mb-2 text-sm font-semibold text-gray-500  md:mb-4 px-2 mt-2'>

<div className="creatornamediv">
<span>Creator Name:</span> <span className='ml-1'>@snehasishdev</span>     
</div>

<div className='date&time flex space-x-2'>
  <span>Date & Time:</span><p>16/06/2-23</p>
  <p>16:45</p>
</div>


</div>

      </div>


    </div>






  )
}

export default ProfilePosts