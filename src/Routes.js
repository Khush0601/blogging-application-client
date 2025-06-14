import React from 'react'
import { Navigate, Route,  Routes } from 'react-router'
import Home from './Pages/Home/Home'
import Register from './Pages/register/Register'
import SignIn from './Pages/signIn/SignIn'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import BlogDetail from './Pages/blogDetail/BlogDetail'
const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route index element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/signUp' element={<Register/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blogDetail/:id' element={<BlogDetail/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  )
}

export default AppRoutes