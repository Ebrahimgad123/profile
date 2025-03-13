import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
const Page = () => {
  return (
    <main className="flex justify-center items-center h-[150px] bg-gradient-to-br bg-purple-600 ">
      <button
        type="button"
        className="bg-gradient-to-r to-yellow-500 from-yellow-900 text-white font-semibold px-10 py-5 rounded-md shadow-md hover:from-yellow-600 hover:to-red-700 transition duration-300 flex items-center"
      >
        Download CV <IoCloudDownloadOutline color="white" size={22} />
      </button>
    </main>
  );
};

export default Page;
