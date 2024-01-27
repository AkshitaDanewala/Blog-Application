import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='w-full flex  h-[70vh] '>

        <div className="leftdiv w-[50%] h-full bg-blue-200">
            <img src="https://img.lovepik.com/photo/45009/7677.jpg_wh860.jpg" alt="" className='h-full w-full' />
        </div>


<div className=' rightdiv w-[50%] h-full  space-y-6 py-5 flex flex-col items-center justify-center'>
    <h1 className='text-xl font-bold text-center'>LogIn to your account!</h1>

    <input type="email" placeholder='Enter Your Email' className='w-[70%] px-4 py-2 border-2 border-black outline-0 rounded' />
<input type="password" placeholder='Enter Your Password' className='w-[70%] px-4 py-2 border-2 border-black outline-0 rounded ' />
<button className='w-[30%] px-4 py-3 text-xl font-bold text-white bg-black rounded-lg hover:bg-gray-400 hover:text-black'>Log In</button>

<div className='flex items-center justify-center space-x-3'>
<p>New Here?</p>
<p className='text-blue-500 font-bold hover:text-red-500'><Link to="/register">Register Yourself</Link></p>
</div>


</div>

    </div>
  )
}

export default Login