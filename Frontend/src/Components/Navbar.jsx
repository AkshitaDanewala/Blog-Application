import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Menu from "../Components/Menu"
import { UserContext} from '../Context/UserContext';

const Navbar = () => {

const [menu, setmenu]= useState(false)
const [prompt, setprompt] = useState("")
const navigate = useNavigate()
// console.log(prompt)

const showMenu = ()=>{
  setmenu(!menu)
}

const {user} = useContext(UserContext)
// console.log(user)
  return (
    <div className='flex items-center justify-between px-6 md:px-[200px] py-4 '>
        
        <h1 className='text-2xl md:text-xl font-extrabold'><Link to="/">BlogVista</Link> </h1>

        <div className='flex justify-ceneter items-center space-x-0'>
         <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))}  className='text-xl cursor-pointer'><BsSearch /></p>
         <input onChange={(e)=> setprompt(e.target.value)}  className='outline-none px-3 py-1 bg-gray-200 rounded-full' type="text" placeholder='Search Your Post' />

        </div>  

        <div className=' hidden md:flex items-center justify-center  space-x-2 md:space-x-4'>

   {user? <h3> <Link to="/write">Create Post</Link></h3> : <h3> <Link to="/login">Login</Link> </h3>}
   { user?  <div onClick={showMenu}>
    <p className='cursor-pointer relative'><FaBars /></p>
    {menu && <Menu/>}
   </div>:<h3> <Link to="/register">  Register</Link> </h3>}
        </div>
    

        <div onClick={showMenu}  className=' menudiv md:hidden text-lg'>
<p className='cursor-pointer relative'><FaBars /></p>
{menu && <Menu/>}
        </div>



    </div>
  )
}

export default Navbar