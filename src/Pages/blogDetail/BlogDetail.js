import React from 'react'
import { useParams } from 'react-router'
import { TfiWrite } from "react-icons/tfi";
const BlogDetail = () => {
    const params=useParams()
    console.log(params.id)
  return (
   <div className='bg-slate-100 w-full h-full'>
     <div className='flex justify-between px-10 py-4 items-center'>
      <div className=''>logo</div>
      <div className='flex items-center'> 
      <div className='mx-4 flex items-center'>
      <div className='mx-1'><TfiWrite/></div>
      <div className=''>Write</div>
      </div>
      <div className='w-14 h-14 rounded-full bg-red-100 flex justify-center items-center '>A</div>
      </div>
     </div>
     <div  className='bg-yellow-200 px-48 flex flex-col items-center'>
      <img src='https://media.istockphoto.com/id/2157860285/photo/a-conceptual-image-of-climate-change.jpg?s=612x612&w=0&k=20&c=kicaeQNTK1v1gWZF2yX7Lk-xnW9bFrwhCeIiJk8eKrI='
        alt="blog-Banner" className='w-[650px] h-[450px]'
      />
      <div>blogTitle</div>

      
      <div>User Details</div>
      <div>Like comment box</div>
      <div>blog content</div>
     </div>


    </div>
  )
}

export default BlogDetail