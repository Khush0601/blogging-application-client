import React, { useContext } from 'react';
import SideBar from '../../Component/sideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../App';

const Dashboard = () => {
  const {user}=useContext(UserContext)
  return (
    <div className="w-full h-full bg-slate-200 ">
      {/* Header */}
      <div className="flex justify-between px-6 py-4  items-center bg-white shadow">
        <div className="text-xl font-bold">Logo</div>
        <div className="w-12 h-12 rounded-full bg-red-100 flex justify-center items-center text-lg font-medium">
          {user?.name?.charAt(0)}
        </div>
      </div>

      {/* Main Layout */}
     <div className="flex min-h-screen sticky ">
       <SideBar />
       <div className="flex-1 p-4">
         <Outlet />
       </div>
     </div>
    </div>
  );
};

export default Dashboard;
