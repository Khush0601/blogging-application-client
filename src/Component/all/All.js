import React from 'react'
import BlogCard from '../blogCard/BlogCard'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const All = () => {
  const navigate=useNavigate()
  const [allBlogs,setAllBlogs]=useState([])
  React.useEffect(()=>{
  const getAllBlogs=async()=>{
    try{
    const allBlogs=await axios.get(`http://localhost:8000/bloggingApplication/api/v1/blog/getAllBlogs`)
    const blogsResponse=allBlogs?.data;
    setAllBlogs(blogsResponse)

    }
    catch(e){
    console.log(e?.response?.data?.message)
    }
  }


  
  getAllBlogs()
  },[])

  
  console.log(allBlogs)
  return (
    <div className='flex  flex-col md:flex-row md:justify-between'>
      
      <div className='flex justify-center flex-wrap '>
      {allBlogs.map((blogs)=>{
        return  <BlogCard key={blogs._id} blogBanner={blogs?.blogBanner} title={blogs?.title}  date={blogs?.updatedAt} blogId={blogs._id} />
       })}
      </div>
       <div className='text-center md:w-1/4 mt-6 md:mt-0'>latest post</div>
      </div> 
  )
}

export default All