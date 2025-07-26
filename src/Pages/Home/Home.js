import React, { useState } from 'react'
import AppHeader from '../../Component/appHeader/AppHeader'
import BlogCard from '../../Component/blogCard/BlogCard'
import All from '../../Component/all/All'
import Startups from '../../Component/startups/Startups'
import Security from '../../Component/security/Security'
import Ai from '../../Component/ai/Ai'
import Apps from '../../Component/apps/Apps'
import Tech from '../../Component/tech/Tech'
import Footer from '../../Component/footer/Footer'

const Home = () => {
  const [activeCategory,setActiveCategory]=useState('All')
  const categories=['All','Startups','Security','AI','Apps','Tech']

  return (
    <div >
    <AppHeader headerTitle={'Welcome to Our Blog'}
      headerDesc={`Start your blog today and  join a community of writers and readers who are passionate about sharing their stories and ideas.
        We offer everything you need to get started,from helpful tips and tutorials.`}
        learnmore={'Learn more ➡'}
    />

    <div className=' bg-slate-200 w-full py-6  px-32'>
      <div className="pb-2 border-b-2 border-gray-400 border-solid overflow-x-auto ">
        <div className='flex items-center flex-nowrap w-max'>
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
      </div>
      {activeCategory==='All' && <All/>}
      {activeCategory==='Startups' && <Startups/>}
      {activeCategory==='Security' && <Security/>}
      {activeCategory==='AI' && <Ai/>}
      {activeCategory==='Apps' && <Apps/>}
      {activeCategory==='Tech' && <Tech/>}
      


    </div>

   <Footer/>


    </div>
  )
}

export default Home