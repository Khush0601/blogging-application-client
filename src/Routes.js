import React from 'react'
import { Navigate, Route,  Routes } from 'react-router'
import Home from './Pages/Home/Home'
import Register from './Pages/register/Register'
import SignIn from './Pages/signIn/SignIn'
const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route index element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/signUp' element={<Register/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
        </Routes>
    </>
  )
}

export default AppRoutes