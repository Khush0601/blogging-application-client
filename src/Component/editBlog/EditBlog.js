import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { ErrorToast, SuccessToast } from '../../utils/toast';
import BackButton from '../backButton/BackButton';

const EditBlog = () => {
    const { blogId } = useParams();
    
  const [editTitle, setEditTitle] = useState('');
  const [editBanner, setEditBanner] = useState('');
  const [editContent, setEditContent] = useState('');
  
  const [editCategory, setEditCategory] = useState('AI');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const apiResponse = await axios.get(`http://localhost:8000/bloggingApplication/api/v1/blog/${blogId}`);
        const blog=apiResponse?.data
        setEditTitle(blog.title);
        setEditBanner(blog.blogBanner);
        setEditContent(blog.content);
        setEditCategory(blog.category);
      } catch (error) {
        ErrorToast('Error fetching blog:', error)
        console.error('Error fetching blog:', error);
      }
    };

    if (blogId){
    fetchBlog();
    }
  }, [blogId]);
 
  const handleSubmitBlog=async(e)=>{
    e.preventDefault();
    try{
    const updateBlog=await axios.patch(`http://localhost:8000/bloggingApplication/api/v1/blog/updateBlog`,{
      blogId:blogId,
      blogBanner: editBanner,
      title: editTitle,
      content: editContent,
      category: editCategory,
    })
    SuccessToast(updateBlog?.data?.message)
    setEditTitle('')
    setEditBanner('')
    setEditContent('')
    setEditCategory('AI')
    }
    catch(err){
      ErrorToast(err)
    }
  }
  return (
   <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
   <BackButton/>
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Blog</h2>

      <form className="space-y-4" onSubmit={handleSubmitBlog}>
        <input
          type="text"
          placeholder="Blog Banner URL"
          value={editBanner}
          onChange={(e) => setEditBanner(e.target.value)}
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />

        <textarea
          placeholder="Blog Title"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          rows={2}
          className="w-full p-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />

        <textarea
          placeholder="Write your blog content here..."
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className="w-full p-4 h-72 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />

        <select
          value={editCategory}
          onChange={(e) => setEditCategory(e.target.value)}
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
          Update Blog
        </button>
      </form>
    </div>
  )
}

export default EditBlog