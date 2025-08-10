import React from 'react';
import { useNavigate } from 'react-router';
import { FiArrowRight } from 'react-icons/fi';

const BlogCard = ({ blogBanner, title, date, blogId, subtitle }) => {
  const navigate = useNavigate();

  const onBlogClick = (blogId) => {
    navigate(`/blogDetail/${blogId}`);
  };

  return (
    <div
      className="
        relative 
        w-full sm:w-72 md:w-80 
        h-[320px] sm:h-[360px] md:h-[400px] 
        m-2 sm:m-3 md:m-4 
        rounded-lg 
        overflow-hidden 
        cursor-pointer 
        group
      "
      onClick={() => onBlogClick(blogId)}
    >
      {/* Image */}
      <img
        src={blogBanner}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Text content */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
        <h2 className="text-lg sm:text-xl font-semibold mb-1">{title}</h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4">{subtitle}</p>
        )}
        <div className="flex items-center text-amber-500 font-medium group-hover:underline">
          Read More <FiArrowRight className="ml-2" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
