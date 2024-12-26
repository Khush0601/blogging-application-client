import React from 'react'
import { Navigate, Route,  Routes } from 'react-router'
import Home from './Pages/Home/Home'
const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route index element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
    </>
  )
}

export default AppRoutes