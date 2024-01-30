import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import axios from 'axios'
import {URL} from "../Url"

const Menu = () => {

const {user}  = useContext(UserContext)
const {setuser} = useContext(UserContext)

const handleLogout= async()=>{
try{
 const res =  await axios.get(URL+"/api/auth/logout", {withCredentials: true})
//  console.log(res)
setuser(null)


}catch(err){
  console.log(err)
}

}


  return (
    <div className='bg-black w-[180px] flex- flex-col items-start absolute top-12 right-4 rounded-md p-4 space-y-4 md:right-32 '>

{!user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Login</h3>}
{!user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Register</h3>}
{user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Profile</h3>}
{user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>Create</h3>}
{user && <h3 className='text-white text-sm hover:text-gray-500 cursor-pointer'>My Blogs</h3>}
{user && <h3  onClick={handleLogout} className='text-white text-sm hover:text-gray-500 cursor-pointer'>Log Out</h3>}



    </div>
  )
}

export default Menu