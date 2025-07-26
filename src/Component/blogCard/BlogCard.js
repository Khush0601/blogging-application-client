import React from 'react';
import { useNavigate } from 'react-router';

const BlogCard = ({ blogBanner, title, date, blogId }) => {
  const navigate = useNavigate();

  const onBlogClick = (blogId) => {
    navigate(`/blogDetail/${blogId}`);
  };

  return (
    <div
      className="w-72 h-80 bg-white p-2 flex flex-col justify-between m-4 rounded-md shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      onClick={() => onBlogClick(blogId)}
    >
     <div className="h-40 w-full rounded overflow-hidden mb-2">
        <img
          src={blogBanner}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

     
      <div className="text-[15px] font-semibold text-gray-800 line-clamp-2 mb-1 flex-grow">
        {title}
      </div>

      
      <div className="text-sm text-gray-600">Khushboo</div>
      <div className="text-xs text-gray-400">{date}</div>
    </div>
  );
};

export default BlogCard;
