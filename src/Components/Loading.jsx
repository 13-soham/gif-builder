import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen w-full bg-gray-800 flex flex-col items-center justify-center text-white gap-4">
      
      <div className="h-12 w-12 border-4 border-gray-500 border-t-white rounded-full animate-spin"></div>

      <p className="text-gray-300 text-sm tracking-wide">
        Loading, please wait…
      </p>
    </div>
  );
};

export default Loading;
