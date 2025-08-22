import React from 'react'

const TestimonialCard = ({image,name,designation,desc}) => {
  return (
    <div className='w-64 h-64 bg-slate-50 rounded-lg flex flex-col items-center py-8 m-4'>
       <img src={image} alt={name}  className="w-20 h-20 rounded-full object-cover mx-auto lg:mx-0"/>
       <div className='mb-2 font-medium'>{name}</div>
       <div className='mb-2 '>{designation}</div>
       <div className='text-gray-500 text-center'>{desc}</div>
    </div>
  )
}

export default TestimonialCard