import React from 'react'
import { useNavigate } from 'react-router'

const BlogCard = ({blogBanner,title,date,blogId}) => {
  const navigate=useNavigate()
  const onBlogClick=(blogId)=>{
  navigate(`/blogDetail/${blogId}`)
  }
  console.log(blogId)
  return (
    <div className='w-72 bg-red-300 h-80 p-4 flex flex-col m-6 rounded-md shadow-lg' onClick={()=>onBlogClick(blogId)}>
      <div className='w-64 bg-yellow-200 h-32 mb-2'>
        <img src={blogBanner} alt={title} className='w-64 h-32 mb-2 object-cover bg-gray-200 ' />
      </div>
      <div className='w-64 bg-yellow-100 h-32 mb-2'>{title}</div>
      <div className='w-64 bg-yellow-200 h-8 mb-1'>khshboo</div>
      <div className='w-64 bg-yellow-200 h-8 '>{date}</div>
      <div></div>
    </div>
  )
}

export default BlogCard