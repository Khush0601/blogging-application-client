import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    // const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [banner, setBanner] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('AI');

  
  return (
     <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Create a New Blog</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Blog Banner URL"
          value={banner}
          onChange={(e) => setBanner(e.target.value)}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />

        <textarea
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        rows={2}
        className="w-full p-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
        required
        />

       <textarea
        placeholder="Write your blog content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-4 h-72 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
        required
       />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border rounded"
        >
          <option value="AI">AI</option>
          <option value="Startups">Startups</option>
          <option value="Security">Security</option>
          <option value="Apps">Apps</option>
          <option value="Tech">Tech</option>
        </select>

        <button
          type="submit"
          className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded text-lg font-medium"
        >
          Publish Blog 
        </button>
      </form>
    </div>
  )
}

export default CreateBlog