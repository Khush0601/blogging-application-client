import React from 'react'
import { useParams } from 'react-router'

const BlogDetail = () => {
    const params=useParams()
    console.log(params.id)
  return (
   <div className='bg-red-500 w-full h-full'>
      Blog Detail {params.id} 
    </div>
  )
}

export default BlogDetail