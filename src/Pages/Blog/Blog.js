import React, { useEffect, useState } from 'react'
import AppHeader from '../../Component/appHeader/AppHeader'
import axios from 'axios'
import { ErrorToast } from '../../utils/toast'
import Loading from '../../Component/loading/Loading'
import BlogCard from '../../Component/blogCard/BlogCard'

const Blog = () => {
  const [blogs,setBlogs]=useState([])
  const [loading,setLoading]=useState(true)

useEffect(()=> {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:8000/bloggingApplication/api/v1/blog/getBlogs"); 
        setBlogs(res.data);
        setLoading(false);  
      } catch (err) {
        setLoading(false);   
        ErrorToast(err.message);
        console.error("Error fetching blogs:", err);
      } 
    };

    fetchBlogs();
},[])
console.log(blogs)

  return (
    <div>
        <AppHeader headerTitle={'Blog Page'}/>

        <div className='flex flex-wrap justify-center my-10 px-2 xs:px-8 sm:px-12'>
          {
      loading ?<Loading/> :blogs.map((data,index)=>{
        return <BlogCard blogBanner={data?.blogBanner} title={data?.title} blogId={data?._id} />
      })
        }
        </div>
        
    </div>
  )
}

export default Blog