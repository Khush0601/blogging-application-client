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
    const allBlogs=await axios.get('http://localhost:8000/bloggingApplication/api/v1/blog/getAllBlogs')
    const blogsResponse=allBlogs?.data;
    setAllBlogs(blogsResponse)

    }
    catch(e){
    console.log(e?.response?.data?.message)
    }
  }
  getAllBlogs()
  },[])

  // const onBlogClick=(blogId)=>{
  //   navigate(`/blogDetail/${blogId}`)
  // }
  console.log(allBlogs)
  return (
    <div className='flex justify-between'>
      
      <div className='flex flex-wrap' >
      {allBlogs.map((blogs)=>{
        return  <BlogCard key={blogs._id} blogBanner={blogs?.blogBanner} title={blogs?.title}  date={blogs?.updatedAt} blogId={blogs._id} />
       })}
      </div>
       <div>latest post</div>
      </div> 
  )
}

export default All