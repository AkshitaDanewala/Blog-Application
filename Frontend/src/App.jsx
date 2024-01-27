import React from 'react'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import { Route, Routes } from 'react-router-dom'
import PostDetails from './Pages/PostDetails'


const App = () => {
  return (
    <div>


<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/Register" element={<Register/>}/>
<Route path="/posts/post/:id" element={<PostDetails/>}/>




</Routes>





    </div>
  )
}

export default App