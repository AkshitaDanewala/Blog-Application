import React from 'react'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import { Route, Routes } from 'react-router-dom'
import PostDetails from './Pages/PostDetails'
import CreatePost from './Pages/CreatePost'
import EditPosts from './Pages/EditPosts'
import Profile from "./Pages/Profile.jsx"

const App = () => {
  return (
    <div>


<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/Register" element={<Register/>}/>
<Route path="/write" element={<CreatePost/>}/>
<Route path="/posts/post/:id" element={<PostDetails/>}/>
<Route path="/edit/:id" element={<EditPosts/>}/>
<Route path="/profile/:id" element={<Profile/>}/>







</Routes>





    </div>
  )
}

export default App