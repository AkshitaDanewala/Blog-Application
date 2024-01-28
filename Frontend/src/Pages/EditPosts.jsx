import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ImCross } from "react-icons/im";

const EditPosts = () => {


const [category, setcategory] = useState("")
const [categories, setcategories] = useState([])
  // this is for categories array

const addCategory = ()=>{

  let updatedcategories = [...categories]
  updatedcategories.push(category)
  setcategory("")
  setcategories(updatedcategories)
}

const deleteCategory = (i)=>{
   let updatedcategories = [...categories]
   updatedcategories.splice(i)
  setcategories(updatedcategories)

}









  return (
    <div >
    <Navbar/>
    
    <div className='px-6 md:px-[200px] mt-8'>
    <h1 className='font-bold md:text-2xl text-xl '>Update Post</h1>    
    
    <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
    <input type="text" placeholder='Enter post title' className='px-4 py-2 outline-none border border-black '/>
    <input type="file" className='px-4'/>
    
    <div className='flex flex-col'>
    
    <div className='flex items-center space-x-4 md:space-x-8 bg-red-200'>
    <input  value={category} onChange={(e)=> setcategory(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category' type='text'/>
    <div  onClick={addCategory} className="btndiv bg-black text-white rounded px-4 py-2 font-semibold cursor-pointer">ADD</div>
    </div>
    
    
    {/* categoriesdiv */}
    <div className='categorydiv  flex px-4 mt-3 '>
    
    {categories?.map((c, i)=>(
      
      <div  key={i} className='categoryname flex items-center justify-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
        <p>{c}</p>
    <p onClick={()=> deleteCategory(i)}  className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross /></p>
    
    </div>
      ))}
    
    
    
    
    
    
    </div>
    
    
    </div>
    
    <textarea className='px-4 py-2 outline-none' id="" cols={30} rows={15} placeholder='Enter post description'></textarea>
    
    <button className='bg-black w-full md:w-[20% ] mx-auto text-white font-semibold rounded px-4 py-2 md:text-xl text-lg'>Update</button>
    
    </form>
    
    </div>
    
    
    
    
    
    
    
    
    
    <Footer/>
    
    
        </div>
  )
}

export default EditPosts