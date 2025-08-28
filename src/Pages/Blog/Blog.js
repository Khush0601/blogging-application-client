import React, { useEffect, useState } from 'react'
import AppHeader from '../../Component/appHeader/AppHeader'
import axios from 'axios'
import { ErrorToast } from '../../utils/toast'
import Loading from '../../Component/loading/Loading'
import BlogCard from '../../Component/blogCard/BlogCard'

const Blog = () => {
  const [blogs,setBlogs]=useState([])
  const [loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)

useEffect(()=> {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:8000/bloggingApplication/api/v1/blog/getBlogs?pageNumber=${page}`); 
        setBlogs(res.data);
        setLoading(false);  
      } catch (err) {
        setLoading(false);   
        ErrorToast(err.message);
        console.error("Error fetching blogs:", err);
      } 
    };

    fetchBlogs();
},[page])
console.log(blogs)

   const handleNext = () => {
    if (blogs.length >= 10) {
      setPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };
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
          <div className="w-full flex justify-center my-6 gap-4">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className={`px-4 py-2 rounded ${page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          >
            Previous
          </button>
          
          <span className="self-center">Page {page}</span>
          <button
            onClick={handleNext}
            disabled={blogs.length < 10}
            className={`px-4 py-2 rounded ${blogs.length < 10 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          >
            Next
          </button>
          </div>
        
        
    </div>
  )
}

export default Blog