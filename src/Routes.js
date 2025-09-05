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
    
      <Routes>
         <Route index element={<Navigate to="/home"/>}/>
         <Route path="/home" element={<Home />}/>
         <Route path="/signUp" element={<Suspense fallback={<Loading />}><Register /></Suspense>} />
         <Route path="/signIn" element={<Suspense fallback={<Loading />}><SignIn /></Suspense>} />
         <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
         <Route path="/services" element={<Suspense fallback={<Loading />}><Services /></Suspense>} />
         <Route path="/blog" element={<Suspense fallback={<Loading />}><Blog /></Suspense>} />
         <Route path="/blogDetail/:id" element={<Suspense fallback={<Loading />}><BlogDetail /></Suspense>} />
         <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>} />
         <Route path="/createBlog" element={<Suspense fallback={<Loading />}><PrivateRoutes><CreateBlog /></PrivateRoutes></Suspense>} />
         <Route path="/editBlog/:blogId" element={<Suspense fallback={<Loading />}><EditBlog /></Suspense>} />
          
         <Route path="/dashboard" element={<Suspense fallback={<Loading />}><PrivateRoutes><Dashboard /></PrivateRoutes></Suspense>} >
          <Route index element={<Suspense fallback={<Loading />}><UserBlog /></Suspense>} />
          <Route path="userBlog" element={<Suspense fallback={<Loading />}><UserBlog /></Suspense>} />
          <Route path="write" element={<Suspense fallback={<Loading />}><Write /></Suspense>} />
          <Route path="profile" element={<Suspense fallback={<Loading />}><Profile /></Suspense>} />
         </Route>
      </Routes>
     
    </>
  )
}

export default AppRoutes