import React from 'react'
import { useNavigate } from 'react-router';

const Write = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen  px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Want to write your own blog?</h1>
        <p className="text-lg text-gray-600 mb-8">
          Share your ideas, thoughts, and knowledge with the world.
        </p>
        <button
          onClick={() => navigate('/createBlog')}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-lg font-semibold transition duration-200"
        >
          Create 
        </button>
      </div>
    </div>
  )
}

export default Write