import React from 'react'
import AppHeader from '../../Component/appHeader/AppHeader'
import BlogCard from '../../Component/blogCard/BlogCard'

const Home = () => {
  return (
    <div >
    <AppHeader headerTitle={'Welcome to Our Blog'}
      headerDesc={`Start your blog today and  join a community of writers and readers who are passionate about sharing their stories and ideas.
        We offer everything you need to get started,from helpful tips and tutorials.`}
        learnmore={'Learn more --->'}
    />

    <div className=' bg-slate-200 w-full py-6  px-32'>
      <div className="pb-2 border-b-2 border-gray-400 border-solid flex items-center ">
        <div className='mx-16 text-lg font-medium'>All</div>
        <div className='mx-16 text-lg font-medium'>Startups</div>
        <div className='mx-16 text-lg font-medium'>Security</div>
        <div className='mx-16 text-lg font-medium'>AI</div>
        <div className='mx-16 text-lg font-medium'>Apps</div>
        <div className='mx-16 text-lg font-medium'>Tech</div>
        
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