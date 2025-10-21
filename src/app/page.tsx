"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Home from "./home/page"
import { CircleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.div
        className="relative flex justify-center items-center"
      >
       <CircleLoader
        size={150}
        color="#6366F1"
        loading={true}
      />
      </motion.div>
     
    </div>
  );
};

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading time
  }, []);

  return loading ? (
    <Loader />
  ) : (
   <Home/>
  );
};

export default Page;