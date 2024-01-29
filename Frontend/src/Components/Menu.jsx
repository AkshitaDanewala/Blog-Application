import React from 'react'

const Menu = () => {

const user = false

  return (
    <div className='bg-black w-[180px] flex- flex-col items-start absolute top-12 right-4 rounded-md p-4 space-y-4 md:right-32 '>

{!user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Login</h3>}
{!user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Register</h3>}
{user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Profile</h3>}
{user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Create</h3>}
{user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>My Blogs</h3>}
{user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Log Out</h3>}



    </div>
  )
}

export default Menu