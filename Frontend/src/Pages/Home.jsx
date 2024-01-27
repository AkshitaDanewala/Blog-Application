import React from 'react'
import HomePosts from "../Components/HomePosts"
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (

    <>
    <Navbar/>
    
    <div className='px-8 md:px-[200px]'>

<HomePosts/>
<HomePosts/>
<HomePosts/>
<HomePosts/>


</div>
<Footer/>
    
    </>

   
  )
}

export default Home