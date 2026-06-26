import React, { useEffect } from 'react'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData, setAllUsers, setAllComponents } from './redux/userSlice.js'
import Generate from './pages/Generate.jsx'
import { useState } from 'react'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AllComponents from './pages/AllComponents.jsx'
import MyComponents from './pages/MyComponents.jsx'
import Pricing from './pages/Pricing.jsx'

export const ServerURL = "https://virtualui-pj54.onrender.com"

const App = () => {
    const dispatch = useDispatch()
    const {userData} = useSelector((state) => state.user)
    const [authChecked, setAuthChecked] = useState(false)
     
    useEffect(() => {
        const fetchUser = async() => {
            try{
                const res = await axios.get(ServerURL + "/api/user/current-user", {withCredentials: true})
                dispatch(setUserData(res.data))
                setAuthChecked(true)
            }catch(error){
                console.error("Error fetching user:", error)
                dispatch(setUserData(null))
                setAuthChecked(true)
            } 
        }
        fetchUser() 
    },[])

    useEffect(() => {
        if(!userData){
            return;
        }
        const fetchAllUsers = async() => {
            try{
                const userRes = await axios.get(ServerURL + "/api/user/all-users", {withCredentials: true})
                dispatch(setAllUsers(userRes.data))
                console.log(userRes.data)
            }catch(error){
                console.error("Error fetching user:", error)
                dispatch(setAllUsers(null))
            }
        }

        const fetchAllComponents = async() => {
            try{
                const componentRes = await axios.get(ServerURL + "/api/component/all-components", {withCredentials: true})
                dispatch(setAllComponents(componentRes.data))
                console.log(componentRes.data)
            }catch(error){
                console.error("Error fetching user:", error)
                dispatch(setAllComponents(null))
            }
        }
        fetchAllComponents()

        fetchAllUsers()
    },[userData, dispatch])

  return (
    <>
    {
        !authChecked && <div className="fixed top-0 left-0 w-full h-1 bg-[#35ebff] animate-pulse z-50">

        </div>
    }
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/generate' element={<Generate />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/components' element={<AllComponents />} />
        <Route path='/my-components' element={<MyComponents />} />
        <Route path='/pricing' element={<Pricing />} />
    </Routes>
    </>
  )
}

export default App
