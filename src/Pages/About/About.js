import React from 'react'
import AppHeader from '../../Component/appHeader/AppHeader'
import TestimonialCard from '../../Component/testimonialCards/TestimonialCard'
import Footer from '../../Component/footer/Footer'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ErrorToast } from '../../utils/toast'
import Loading from '../../Component/loading/Loading'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const [testimonialData,setTestimonialData]=useState([])
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
   const fetchTestimonialDetails=async()=>{
     try {
        const res = await axios.get("http://localhost:8000/bloggingApplication/api/v1/blog/testimonial/getTestmonial"); 
        setTestimonialData(res.data); 
        setLoading(false);
      } catch (err) {
        ErrorToast("Failed to load testimonials");
        setLoading(false);
      }
   }
   fetchTestimonialDetails()
  },[])
  console.log(testimonialData)
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

 <div className="px-4 lg:px-8">
  <div className="text-3xl md:text-4xl lg:text-5xl my-10 font-bold border-b-2 py-3 border-slate-200 text-center lg:text-left">
    Top Authors
  </div>
  {loading ? ( <Loading />) : (
   <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  breakpoints={{
    640: { slidesPerView: 1 }, 
    768: { slidesPerView: 2 }, 
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 }, 
  }}
  className="pb-8"
>
  {testimonialData.map((data) => (
    <SwiperSlide key={data?._id} className="h-auto">
      <TestimonialCard
        image={data?.image}
        name={data?.name}
        designation={data?.designation}
        desc={data?.desc}
      />

    
    </SwiperSlide>
  ))}
</Swiper>

  )}
</div>

  </div>
  <Footer/>
    </div>
  )
}

export default About