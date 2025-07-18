import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="p-6 space-y-4 text-gray-800 bg-yellow-400">
        <nav className="flex flex-col  space-y-4">
            <Link to="/dashboard/userBlog">Blog</Link>
            <Link to="/dashboard/write">Write</Link>
            <Link to="/dashboard/profile">Profile</Link>
        </nav>
    </div>
  )
}

export default SideBar