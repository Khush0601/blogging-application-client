import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { UserContext } from '../../App'; 
import { ErrorToast, SuccessToast } from '../../utils/toast';

const UserBlog = () => {
  const { user } = useContext(UserContext); 
  const [userBlogs, setUserBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/bloggingApplication/api/v1/blog/user/${user._id}`
        );
        setUserBlogs(response?.data?.blogs);
      } catch (error) {
        console.error('Failed to fetch user blogs:', error);
      }
    };

    if (user?._id) {
      fetchUserBlogs();
    }
  }, [user]);

  const handleBlogClick = (blogId) => {
    navigate(`/blogDetail/${blogId}`);
  };

  const handleEdit = (blogId) => {
    navigate(`/editBlog/${blogId}`);
  };

  const handleDelete = async(blogId) => {
   const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) {
      return
    }
    try{
     const deleteBlog=await axios.delete("http://localhost:8000/bloggingApplication/api/v1/blog/deleteBlog", {
      data: { blogId }
    });
   
    SuccessToast(deleteBlog?.data?.message)
    setUserBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
    }
    catch(err){
    ErrorToast(err?.response?.data?.message)
    console.log(err?.response?.data?.message)
    }
   
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Blogs</h2>

      {userBlogs.length === 0 ? (
        <p>No blogs posted yet.</p>
      ) : (
        <div className="p-4 space-y-4">
          {userBlogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col sm:flex-row bg-white shadow rounded-md overflow-hidden hover:shadow-md transition cursor-pointer"
            >
              <img
                src={blog.blogBanner}
                alt={blog.title}
                className="w-full sm:w-48 h-36 sm:h-32 object-cover"
                onClick={() => handleBlogClick(blog._id)}
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-500">
                    {blog.createdAt?.slice(0, 10)}
                  </p>
                </div>

                <div className="mt-3 sm:mt-2 flex justify-end gap-4 text-xl text-gray-600">
                  <FaEdit
                    className="text-blue-600 cursor-pointer transition-transform duration-200 hover:scale-125"
                    title="Edit Blog"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(blog._id);
                    }}
                  />
                  <FaTrash
                    className="text-red-600 cursor-pointer transition-transform duration-200 hover:scale-125"
                    title="Delete Blog"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(blog._id);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBlog;
