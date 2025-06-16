import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='w-64 h-64 bg-slate-50 rounded-lg flex flex-col items-center py-8'>
       <div className='w-24 h-24 rounded-full  mb-3 flex items-center justify-center bg-green-300'>A</div>
       <div className='mb-2 font-medium'>Arido David</div>
       <div className='mb-2 '>Director of operations</div>
       <div className='text-gray-500'>12 Article published</div>
    </div>
  )
}

export default TestimonialCard