import React from 'react'
import AppHeader from '../../Component/appHeader/AppHeader'
import TestimonialCard from '../../Component/testimonialCards/TestimonialCard'

const About = () => {
  return (
    <div>
        <AppHeader headerTitle={'About Us'}  />
 <div className='w-full  px-4 my-10 flex flex-col md:px-24'>
     <div className=' grid grid-cols-1  gap-4 lg:grid-cols-2 '>
           <img src="https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038="
            alt='about-banner' className='rounded-3xl mx-auto lg:mx-0 lg:justify-self-start bg-red-200'
           />
       <div className='flex flex-col items-center justify-center px-4 py-2  text-center lg:items-start lg:text-left'>
           <div className='text-xl font-bold mb-2 text-amber-300  rounded-md'> Who We Are</div>

           <div className='text-3xl font-bold mb-0.5'> We Provide High Quality</div>

           <div className='text-3xl font-bold mb-3'> Articles & Blogs</div>

           <div className='text-slate-600 max-w-2xl'>
            We believe in the power of words to inform, inspire, and impact. Our mission is to provide high-quality 
            articles and blogs that not only engage readers but also deliver value across a wide range of topics.  
            Whether it's thought-provoking insights, helpful tips, or trending topics — our content is crafted to meet
            the needs of modern readers.
           </div>
       </div>
    </div>
          <div className='text-5xl my-14 font-bold border-b-2 py-3 px-4 border-solid border-slate-200 text-center lg:text-left'>Top Authors</div>
          <div className=''><TestimonialCard/></div>
  </div>
    </div>
  )
}

export default About