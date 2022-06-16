import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/post'
import Header from './components/header'
import Error from './components/error'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
            <Route path="/" component={Home} />
            <Route path="/post" component ={Post} />
            <Route>
                <Error />
            </Route>
            </Routes>
        </Router>
    </React.StrictMode>,
     document.getElementById('root')
)