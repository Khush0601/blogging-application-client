import React from 'react'
import BlogCard from '../blogCard/BlogCard'

const All = () => {
  return (
    <div className='flex justify-between'>
       <BlogCard/>
       <div>latest post</div>
      </div> 
  )
}

export default All