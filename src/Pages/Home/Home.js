import React from 'react'
import AppHeader from '../../Component/appHeader/AppHeader'

const Home = () => {
  return (
    <div>
    <AppHeader headerTitle={'Welcome to Our Blog'}
      headerDesc={`Start your blog today and  join a community of writers and readers who are passionate about sharing their stories and ideas.
        We offer everything you need to get started,from helpful tips and tutorials.`}
        learnmore={'Learn more --->'}
    />
    </div>
  )
}

export default Home