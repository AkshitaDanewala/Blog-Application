import React from 'react'
import Nav from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>

<Nav/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/Register" element={<Register/>}/>



</Routes>



<Footer/>


    </div>
  )
}

export default App