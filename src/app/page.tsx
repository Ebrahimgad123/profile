"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Home from "../app/homeapp/page"
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.div
        className="relative flex justify-center items-center"
      >
        <motion.span
          className="absolute w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        ></motion.span>
        <motion.span
          className="absolute w-12 h-12 border-4 border-blue-300 border-t-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        ></motion.span>
        <motion.span
          className="w-8 h-8 bg-blue-500 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        ></motion.span>
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