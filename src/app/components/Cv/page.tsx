import React from 'react';
import { IoCloudDownloadOutline } from "react-icons/io5";
const Page = () => {
  return (
    <main className="flex justify-center items-center h-[150px] bg-gradient-to-br bg-purple-600 ">
      <button 
        type="button" 
        className="bg-yellow-600 text-white font-semibold px-10 py-5 rounded-md shadow-md hover:bg-red-700 transition duration-300 flex items-center"
      >
        Download CV <IoCloudDownloadOutline color='white'size={22}/>
      </button>
    </main>
  );
};

export default Page;
