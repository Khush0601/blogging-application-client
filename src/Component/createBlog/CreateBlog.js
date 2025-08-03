import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { ErrorToast, SuccessToast } from '../../utils/toast';
import BackButton from '../backButton/BackButton';

const CreateBlog = () => {
    const navigate = useNavigate();
    const {user}=useContext(UserContext)

  const [title, setTitle] = useState('');
  const [banner, setBanner] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('AI');

  const handleSubmitBlog=async(e)=>{
   e.preventDefault()
   try{
    const response=await axios.post('http://localhost:8000/bloggingApplication/api/v1/blog/createBlog',{
      blogBanner:banner,
        title:title,
        content:content,
        category:category,
        userId:user._id,

     
    })
    console.log(response)
    SuccessToast(response?.data?.message || 'Blog posted successfully!');
    setTitle('')
    setBanner('')
    setContent('')
    setCategory('AI')
   }
   catch(e){
    console.log(e?.response?.data?.message)
    ErrorToast(e?.response?.data?.message || 'Failed to post blog');
   }
  }
  console.log('user',user)
  
  return (
     <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
     
      <h2 className="text-2xl font-bold mb-6 text-center">
        <BackButton/>
       Create a Blog
      </h2>

      <form className="space-y-4" onSubmit={handleSubmitBlog}>
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