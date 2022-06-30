import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import SignUp from './pages/signup'
import Dashboard from "./pages/dashboard"
import Post from "./pages/post"
 
function App(){
  return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element ={<Home />} />
            <Route path='/dashboard' element ={<Dashboard />} />
            <Route path="/login" element ={<Login />} />
            <Route path="/signup" element ={<SignUp />} />
            <Route path="/post" element = {<Post />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App