import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import axios from 'axios';
import { ErrorToast } from '../../utils/toast';
import Loading from '../loading/Loading';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState([]);
  const [loading,setLoading]=useState(true)
useEffect(() => {
   const fetchUserDetails = async () => {
    try {
      setLoading(true)
      const res = await axios.get(
        `http://localhost:8000/bloggingApplication/api/v1/user/${user._id}`
      );
      
      setUserDetails(res.data);
      
    } catch (err) {

      console.error("Error fetching user details:", err);
      ErrorToast(err?.response?.data?.message);
    }
     finally {
      setLoading(false); 
    }
  };

  fetchUserDetails();
}, [user?._id]);


 console.log(userDetails)
 


  return (
    <div className="min-h-screen flex items-center justify-center p-4">
     {loading? <Loading/> : <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 flex flex-col items-center text-center">
        
       
        <img
          src={user?.picture ||user?.name?.charAt(0)}
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
        />

      
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {user?.name || 'Guest User'}
        </h2>

        
        <p className="text-gray-600 text-sm mb-4">
          {user?.email || 'Not provided'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-6">
          <div className="bg-blue-100 rounded-lg p-4 shadow">
            <p className="text-lg font-bold text-blue-700">{userDetails.blogs?.length || 0}</p>
            <p className="text-sm text-gray-600">Blogs Written</p>
          </div>
          <div className="bg-pink-100 rounded-lg p-4 shadow">
            <p className="text-lg font-bold text-pink-700">{userDetails.likedBlogs?.length || 0}</p>
            <p className="text-sm text-gray-600">Blogs Liked</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4 shadow">
            <p className="text-lg font-bold text-green-700">{userDetails.commentBlogs?.length || 0}</p>
            <p className="text-sm text-gray-600">Blogs Commented</p>
          </div>
        </div>

        
      </div>}
    </div>
  );
};

export default Profile;
