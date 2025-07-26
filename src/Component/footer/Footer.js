import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const AppFooter = () => {
  return (
    <footer className="bg-black text-white py-12 ">
      <div className="flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-6 text-xl text-gray-400">
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-300"><FaGithub /></a>
          <a href="#" className="hover:text-red-500"><FaYoutube /></a>
        </div>

        {/* Footer Text */}
        <div className="text-center text-md text-gray-300">
          All rights reserved under <span className="text-white font-semibold">@bloggingApplication.com</span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
