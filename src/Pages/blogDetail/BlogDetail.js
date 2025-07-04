import React from 'react'
import { useParams } from 'react-router'
import { TfiWrite } from "react-icons/tfi";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";

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
     <div  className=' flex flex-col  px-10 md:px-24 '>
      <img src='https://media.istockphoto.com/id/2157860285/photo/a-conceptual-image-of-climate-change.jpg?s=612x612&w=0&k=20&c=kicaeQNTK1v1gWZF2yX7Lk-xnW9bFrwhCeIiJk8eKrI='
        alt="blog-Banner" className='h-[400px] w-full object-cover'
      />
      <div className=' text-xl font-medium py-2 xs:text-2xl xs:font-semibold xs:py-4 sm:text-3xl md:text-4xl md:font-bold'>Environmental concern</div>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
        <div className=' flex items-center py-2 sm:py-4 '>
           <div className='w-14 h-14 rounded-full bg-red-100 flex justify-center items-center '>A</div>
           <div className='text-lg font-normal px-2 sm:text-xl sm:font-medium '>Name</div>
        </div>
        <div className='px-2 sm:px-0'>Date</div>
      </div>
      <div className='flex justify-between items-center py-4 my-2 text-lg border-y-2 border-slate-200 border-solid '>
        <div className=' flex justify-between items-center'>
          <div className=' flex  items-center '>
          <span><SlLike/></span>
          <span className='px-0.5'>1</span>
          </div>
          <div className='px-2 flex px-12 items-center'>
            <span><FaRegCommentDots/></span>
            <span className='px-0.5'>2</span>
          </div>
        </div>
        <div>share</div>
      </div>
      <div className='py-10'>
        The environment is the natural world that surrounds us, including the air we breathe,
        the water we drink, the land we live on, and the ecosystems that support life.
        It provides the essential resources and conditions needed for survival and well-being.
         However, human activities such as deforestation, pollution, and overconsumption are putting
         immense pressure on the environment, leading to climate change, loss of biodiversity,
         and natural disasters. Protecting the environment is not just a responsibility but a necessity for ensuring
         a healthy and sustainable future for generations to come.

         Preserving the environment is crucial because it directly impacts our quality of life. Clean air and water, 
         fertile soil, and stable climates are all results of a balanced and healthy environment. Forests act as the lungs
         of our planet, oceans regulate temperature and support marine life, and biodiversity ensures the resilience of ecosystems.
         Unfortunately, rapid industrialization, urban expansion, and the burning of fossil fuels have led to alarming levels of 
         environmental degradation. This has resulted in melting glaciers, rising sea levels, frequent natural disasters, and a
         threat to countless animal and plant species.

         Environmental conservation requires collective effort—from governments enforcing strong environmental laws,
         to industries adopting sustainable practices, and individuals making eco-friendly choices in their daily lives. 
         Simple actions like reducing plastic use, conserving energy, planting trees, and supporting clean energy initiatives
         can make a meaningful difference. The future of our planet depends on our awareness, commitment, and willingness to act now. 
         Protecting the environment is not just about saving nature—it's about saving ourselves.
      </div>
     </div>


    </div>
  )
}

export default BlogDetail