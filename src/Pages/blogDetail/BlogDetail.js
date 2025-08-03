import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { TfiWrite } from "react-icons/tfi";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { UserContext } from '../../App';
import Footer from '../../Component/footer/Footer';
import logo from "../../Assets/blogging-icon-27.jpg"
import BackButton from '../../Component/backButton/BackButton';
import Loading from '../../Component/loading/Loading';

const BlogDetail = () => {
    const {user}=useContext(UserContext)
    const params=useParams()
    const navigate=useNavigate()
    const[blogDetails,setBlogDetails]=useState([])
    const[loading,setLoading]=useState(true)
    console.log(params.id)

   useEffect(()=>{
     const fetchBlogDetails=async()=>{
      setLoading(true)
      try{
      const apiResponse=await axios.get(`http://localhost:8000/bloggingApplication/api/v1/blog/${params.id}`)
      const result=apiResponse?.data;
      setBlogDetails(result)
      }
      catch(e){
        console.log(e)
      }
      finally {
  setLoading(false);
}
    }
    fetchBlogDetails()
   },[params.id])
   
  console.log(user,'user')
   console.log(blogDetails,'blogDetails')
  return (
   <div className='bg-slate-100 w-full h-full'>
     <div className='flex justify-between px-10 py-4 items-center'>
      <div >
         <img src={logo} alt="app logo" className="w-12 h-12 object-contain" />
      </div>
      <div className='flex items-center'> 
      <div className='mx-4 flex items-center'>
     <div className="p-2 bg-amber-100 text-amber-600 rounded-full cursor-pointer shadow-md hover:bg-amber-200 transition">
      <TfiWrite size={20} onClick={()=>navigate('/createBlog')}/>
     </div>
      <div className=''>Write</div>
      </div>
      <img className='w-14 h-14 rounded-full bg-red-100 flex justify-center items-center ' src={user?.picture} alt={user?.name}/>
      </div>
     </div>
     <BackButton/>
    {loading ? <Loading/> : <div  className=' flex flex-col  px-10 md:px-24 '>
      <img src={blogDetails?.blogBanner}
        alt="blog-Banner" className='h-[400px] w-full object-cover'
      />
      <div className=' text-xl font-medium py-2 xs:text-2xl xs:font-semibold xs:py-4 sm:text-3xl md:text-4xl md:font-bold'>{blogDetails?.title}</div>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
        <div className=' flex items-center py-2 sm:py-4 '>
           <div className='w-14 h-14 rounded-full bg-red-100 flex justify-center items-center '>K</div>
           <div className='text-lg font-normal px-2 sm:text-xl sm:font-medium '>{blogDetails?.userId?.name}</div>
        </div>
        <div className='px-2 sm:px-0'>{blogDetails?.createdAt?.slice(0, 10)}</div>
      </div>
      <div className='flex justify-between items-center py-4 my-2 text-lg border-y-2 border-slate-200 border-solid '>
        <div className=' flex justify-between items-center'>
          <div className=' flex  items-center '>
          <span><SlLike/></span>
          <span className='px-0.5'>{blogDetails?.likeCount}</span>
          </div>
          <div className='px-2 flex px-12 items-center'>
            <span><FaRegCommentDots/></span>
            <span className='px-0.5'>{blogDetails?.comment?.length}</span>
          </div>
        </div>
        <div>share</div>
      </div>
      <div className='py-10'>
      {blogDetails?.content}

      </div>
     </div>}
    <Footer/>

    </div>
  )
}

export default BlogDetail