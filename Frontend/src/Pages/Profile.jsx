import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProfilePosts from '../Components/ProfilePosts'

const Profile = () => {
  return (
    <div className='maindiv'>
<Navbar/>

<div className=' flex px-8 md:px-[200px] mt-8  md:flex-row flex-col-reverse md:items-start items-start' >
{/* bg-blue-200  */}

<div className="leftdiv flex flex-col w-full md:w-[70%] bg-yellow-200 mt-8 space-y-2 md:mt-0  ">
{/* bg-red-200 */}
    <h1 className='text-xl font-bold mb-5'>Your Posts:</h1>
<ProfilePosts/>
<ProfilePosts/>
<ProfilePosts/>
<ProfilePosts/>

</div>


<div className="rightdiv md:sticky md:top-0 flex justify-start md:justify-end items-start  w-full md:w-[30%]  py-1  md:items-end bg-green-200 px-5  ">

  <div className="rightdiv2box   flex flex-col space-y-4 items-start ">


  <h1 className='text-xl font-bold mb-4 '>Profile</h1>
<input className='outline-none px-4 py-2 text-gray-500  rounded'  type="text"  placeholder='Your Username' />
<input className='outline-none px-4 py-2 text-gray-500 rounded'  type="email" placeholder='Your Email' />
<input className='outline-none px-4 py-2 text-gray-500 rounded'  type="password" placeholder='Your Password'  />

<div className="btnsdiv flex items-center space-x-4 mt-8  bg-red-200">
    <button className='bg-black text-white rounded px-4 py-2  font-semibold cursor-pointer hover:text-black hover:bg-gray-400 mb-2 '>Update</button>
    <button className='bg-black text-white rounded px-4 py-2 font-semibold cursor-pointer hover:text-black hover:bg-gray-400 mb-2'>Delete</button>

</div>


  </div>




</div>


</div>








    <Footer/>


    </div>
   
  )
}

export default Profile