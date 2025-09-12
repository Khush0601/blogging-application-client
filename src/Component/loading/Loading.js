import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <FaSpinner className="animate-spin text-5xl text-amber-500" />
    </div>
  );
};

export default Loading;
