import React from 'react'
import BlogCard from '../blogCard/BlogCard'
import axios from 'axios'
import { useState } from 'react'
// import { useNavigate } from 'react-router'

const BlogFetcher = ({category}) => {
//   const navigate=useNavigate()
  const [allBlogs,setAllBlogs]=useState([])
  const [page, setPage] = useState(1);
  

  React.useEffect(()=>{
  const getAllBlogs=async()=>{
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
  console.log(category,'currentCategory')
  console.log(allBlogs)
  return (
    <div className='flex  flex-col md:flex-row md:justify-between'>
      
      <div className='flex justify-center flex-wrap '>
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

       <div className='text-center md:w-1/4 mt-6 md:mt-0'>latest post</div>
       
      </div> 
  )
}

export default BlogFetcher