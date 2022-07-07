import React, { useState, useEffect } from 'react'
import HeaderLogged from '../components/headerLogged'
import {getAllPosts, getOnePost} from "../actions/postActions"
import Post from './post'
import {useParams} from "react-router-dom"


function Dashboard() {
 return (
 <div>
    <HeaderLogged>
    </HeaderLogged>
 </div>
 )
}

export default Dashboard