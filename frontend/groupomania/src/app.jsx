import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import SignUp from './pages/signup'
import Header from './components/header'
import Auth from "./contexts/auth"
import {hasAuth} from "./services/authApi"
import AuthRoute from "./components/AuthRoute"
import Dashboard from "./pages/dashboard"
 
function App(){
    const [isAuth, setIsAuth] = useState(hasAuth());
    if(!isAuth) {
        return <Login setIsAuth={setIsAuth} />
      }
  return (
    <Auth.Provider value={{isAuth, setIsAuth}}>
        <BrowserRouter>
            <React.Fragment>
                <Header />
            </React.Fragment>
            <Routes>
            <Route path='/' element ={<Dashboard />} />
            <Route path="/login" element ={<Login />} />
            <Route path="/signup" element ={<SignUp />} />
            </Routes>
        </BrowserRouter>
        </Auth.Provider>
  )
}

export default App