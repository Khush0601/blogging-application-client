import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const SideBar = () => {
  const { pathname } = useLocation();
  const {user}=useContext(UserContext)
  const linkStyle = (path) =>
    `w-full px-4 py-3 rounded-lg font-medium transition-all ${
      pathname === path
        ? 'bg-amber-600 text-white text-center'
        : 'hover:bg-amber-100 text-gray-800 text-center'
    }`;

  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block bg-slate-500 shadow w-64 min-h-screen p-4">
        <nav className="flex flex-col gap-2">
          <Link to={`/dashboard/userBlog`} className={linkStyle('/dashboard/userBlog')}>
          Blog
          </Link>
          <Link to="/dashboard/write" className={linkStyle('/dashboard/write')}>
            Write
          </Link>
          <Link to="/dashboard/profile" className={linkStyle('/dashboard/profile')}>
            Profile
          </Link>
        </nav>
      </div>

      {/* Mobile view*/}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t flex justify-around px-4 py-2 shadow-md">
        <Link to="/dashboard/userBlog" className={linkStyle('/dashboard/userBlog')}>
          Blog
        </Link>
        <Link to="/dashboard/write" className={linkStyle('/dashboard/write')}>
          Write
        </Link>
        <Link to="/dashboard/profile" className={linkStyle('/dashboard/profile')}>
          Profile
        </Link>
      </div>
    </>
  );
};

export default SideBar;
