import React, { lazy, Suspense } from 'react'
import { Navigate, Route,  Routes } from 'react-router'

import PrivateRoutes from './Component/privateRoute/PrivateRoute'
import Loading from './Component/loading/Loading';

const Home = lazy(() => import("./Pages/Home/Home"));
const Register = lazy(() => import("./Pages/register/Register"));
const SignIn = lazy(() => import("./Pages/signIn/SignIn"));
const About = lazy(() => import("./Pages/About/About"));
const Services = lazy(() => import("./Pages/Services/Services"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const BlogDetail = lazy(() => import("./Pages/blogDetail/BlogDetail"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const UserBlog = lazy(() => import("./Component/userBlog/UserBlog"));
const Write = lazy(() => import("./Component/write/Write"));
const Profile = lazy(() => import("./Component/profile/Profile"));
const CreateBlog = lazy(() => import("./Component/createBlog/CreateBlog"));
const EditBlog = lazy(() => import("./Component/editBlog/EditBlog"));

const AppRoutes = () => {
  return (
    <>
    <Suspense fallback={<Loading />}>
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
           <Route path='/createBlog' element={<PrivateRoutes><CreateBlog/></PrivateRoutes>}/>
          <Route path="/editBlog/:blogId" element={<EditBlog/>} />
          
           <Route path="/dashboard" element={<PrivateRoutes><Dashboard/></PrivateRoutes>}>
            <Route index element={<UserBlog />} />
            <Route path="userBlog" element={<UserBlog />} />
            <Route path="write" element={<Write />} />
            <Route path="profile" element={<Profile />} />
            
           </Route>
        </Routes>
     </Suspense>
    </>
  )
}

export default AppRoutes