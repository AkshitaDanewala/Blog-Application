import React from 'react'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Comment = () => {
  return (
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
  )
}

export default Comment