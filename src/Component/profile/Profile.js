import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  // Dummy stats — replace with real data from your backend
  const stats = {
    blogsWritten: user?.blogsWritten || 0,
    blogsLiked: user?.blogsLiked || 0,
    blogsCommented: user?.blogsCommented || 0,
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 flex flex-col items-center text-center">
        
        {/* Profile Picture */}
        <img
          src={user?.picture || 'https://i.pravatar.cc/150?img=3'}
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
        />

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {user?.name || 'Guest User'}
        </h2>

        {/* Email */}
        <p className="text-gray-600 text-sm mb-4">
          {user?.email || 'Not provided'}
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-6">
          <div className="bg-blue-100 rounded-lg p-4 shadow">
            <p className="text-lg font-bold text-blue-700">{stats.blogsWritten}</p>
            <p className="text-sm text-gray-600">Blogs Written</p>
          </div>
          <div className="bg-pink-100 rounded-lg p-4 shadow">
            <p className="text-lg font-bold text-pink-700">{stats.blogsLiked}</p>
            <p className="text-sm text-gray-600">Blogs Liked</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4 shadow">
            <p className="text-lg font-bold text-green-700">{stats.blogsCommented}</p>
            <p className="text-sm text-gray-600">Blogs Commented</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Profile;
