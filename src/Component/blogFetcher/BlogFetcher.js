import React from 'react'
import BlogCard from '../blogCard/BlogCard'
import axios from 'axios'
import { useState } from 'react'
import { ErrorToast } from '../../utils/toast'
import Loading from '../loading/Loading'
import { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router'
// import { useNavigate } from 'react-router'

const BlogFetcher = ({category}) => {
  const navigate=useNavigate()
  const [allBlogs,setAllBlogs]=useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [latestBlogs,setLatestBlogs]=useState([])
  const [latestBlogLoading,setLatestBlogLoading]=useState(true)

  React.useEffect(()=>{
  const getAllBlogs=async()=>{
    setLoading(true)
    try{
    const allBlogs=await axios.get(`http://localhost:8000/bloggingApplication/api/v1/blog/getAllBlogs`,
      {
          params: {
            pageNumber: page,
            type: category,
          }
        }
    )
    const blogsResponse=allBlogs?.data;
    setAllBlogs(blogsResponse)

    }
    catch(e){
    console.log(e?.response?.data?.message)
    ErrorToast(e?.response?.data?.message)
    }
  finally {
  setLoading(false);
}
  }
  

 getAllBlogs()
  },[ page, category])

   const handleNext = () => {
    if (allBlogs.length >= 10) {
      setPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  useEffect(()=>{
    const fetchLatestBlogs = async () => {
      setLatestBlogLoading(true)
      try {
        const res = await axios.get(
          "http://localhost:8000/bloggingApplication/api/v1/blog/latestPost/getLatestPost"
        );
        setLatestBlogs(res.data.data);
        setLatestBlogLoading(false);
      } catch (err) {
       ErrorToast("Failed to fetch latest blogs");
        setLatestBlogLoading(false);
      }
    };

    fetchLatestBlogs();
  },[])

  
  return (
    <div className='grid grid-cols-1  sm:grid-cols-5 '>
      
      {loading ? <Loading/> :
      <div className='col-span-1 sm:col-span-4  flex justify-center flex-wrap '>
      {allBlogs.map((blogs)=>{
        return  <BlogCard key={blogs._id} blogBanner={blogs?.blogBanner} title={blogs?.title}  date={blogs?.updatedAt} blogId={blogs._id} />
       })}

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
            disabled={allBlogs.length < 10}
            className={`px-4 py-2 rounded ${allBlogs.length < 10 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          >
            Next
          </button>
        </div>


      </div>
      }

      

   <div className="col-span-1 sm:col-span-1 mx-4 mt-6 sm:mt-0 p-4 sm:rounded-lg break-words">
  <h2 className="text-lg font-semibold mb-4">Latest Post</h2>
  <div className="space-y-2">
    {latestBlogLoading ? (
      <Loading />
    ) : (
      latestBlogs.map((data) => (
        <div
          key={data?._id}
          className="flex items-start space-x-2 mb-4"
        >
          <span className='mt-1'><FaArrowRight className="text-blue-500 flex-shrink-0" /></span>
          <div className="font-medium hover:text-blue-600 hover:underline transition-colors duration-300" onClick={() => navigate(`/blogDetail/${data?._id}`)}>{data?.title}</div>
        </div>
      ))
    )}
  </div>
</div>




       
      </div> 
  )
}

export default BlogFetcher