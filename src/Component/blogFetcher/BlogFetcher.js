import React from 'react'
import BlogCard from '../blogCard/BlogCard'
import axios from 'axios'
import { useState } from 'react'
import { ErrorToast } from '../../utils/toast'
import Loading from '../loading/Loading'
// import { useNavigate } from 'react-router'

const BlogFetcher = ({category}) => {
//   const navigate=useNavigate()
  const [allBlogs,setAllBlogs]=useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  

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
  console.log(category,'currentCategory')
  console.log(allBlogs)
  return (
    <div className='flex  flex-col sm:flex-row md:justify-between'>
      
      {loading ? <Loading/> :
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
      }

    <div className="bg-pink-300 w-full sm:w-1/3 lg:w-1/4 mt-6 sm:mt-0 p-4 sm:rounded-lg shadow-md text-center break-words">
  <h2 className="text-lg font-semibold mb-4">Latest Post</h2>
  <div className="space-y-2">
    <p>Hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo uuuuuuuuuuuuuuuuuuuuu</p>
    <p>Hiihhhhhhhhhhhhhhhhh nnnnnnnnnnnnnnnnnnnnnn</p>
    <p>Kkkk nnnnnnnnnnnnnnn bbbbbbbbbb ffffffffffffk</p>
  </div>
</div>



       
      </div> 
  )
}

export default BlogFetcher