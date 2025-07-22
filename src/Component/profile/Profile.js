import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App'

const Profile = () => {
   const {user,setUser}=useContext(UserContext)
   console.log(user)
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 flex flex-col items-center">
        
        <img
          src={user?.picture || 'https://i.pravatar.cc/150?img=3'}
          alt="User Avatar"
         className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {user?.name || 'Guest User'}
        </h2>
        <p className="text-gray-600 text-sm mb-2">{user?.email || 'Not provided'}</p>

      
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <button className="w-full sm:w-auto px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="w-full sm:w-auto px-6 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
            Settings
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile