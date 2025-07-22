import React from 'react';
import SideBar from '../../Component/sideBar/SideBar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="w-full h-full bg-slate-200">
      {/* Header */}
      <div className="flex justify-between px-6 py-4 items-center bg-white shadow">
        <div className="text-xl font-bold">Logo</div>
        <div className="w-12 h-12 rounded-full bg-red-100 flex justify-center items-center text-lg font-medium">
          A
        </div>
      </div>

      {/* Main Layout */}
     <div className="flex min-h-screen bg-gray-300">
       <SideBar />
       <div className="flex-1 p-4 bg-gray-200">
         <Outlet />
       </div>
     </div>
    </div>
  );
};

export default Dashboard;
