import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/post'
import Header from './components/header'
import Error from './components/error'
 
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <React.Fragment>
                <Header />
            </React.Fragment>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element ={<Post />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
     document.getElementById('root')
)