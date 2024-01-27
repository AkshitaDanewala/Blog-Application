import React from 'react'
import Nav from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>

<Nav/>

<Routes>

<Route path="/" element={<Home/>}/>


</Routes>



<Footer/>


    </div>
  )
}

export default App