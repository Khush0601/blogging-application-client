import React, { useState } from 'react'
import AppHeader from '../../Component/appHeader/AppHeader'
import BlogCard from '../../Component/blogCard/BlogCard'

const Home = () => {
  const [activeCategory,setActiveCategory]=useState('All')
  const categories=['All','Startups','Security','AI','Apps','Tech']

  return (
    <div >
    <AppHeader headerTitle={'Welcome to Our Blog'}
      headerDesc={`Start your blog today and  join a community of writers and readers who are passionate about sharing their stories and ideas.
        We offer everything you need to get started,from helpful tips and tutorials.`}
        learnmore={'Learn more --->'}
    />

    <div className=' bg-slate-200 w-full py-6  px-32'>
      <div className="pb-2 border-b-2 border-gray-400 border-solid flex items-center ">
        {/* <div className='mx-16 text-lg font-medium'>All</div> */}
        {categories.map((category)=>{
           return <div
            key={category}
            className={`mx-16 text-lg font-medium cursor-pointer pb-1 border-b-2 transition-all duration-200 
            ${activeCategory === category? 'text-amber-600 text-xl border-amber-600' : ' border-transparent'}`}
            onClick={()=>setActiveCategory(category)}
          >{category}

          </div>

        })}
       
        
      </div>
      <div className='flex justify-between'>
       <BlogCard/>
       <div>latest post</div>
      </div>


    </div>




    </div>
  )
}

export default Home