"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from 'next/image';
import logo from "../../../../public/Image/initial-linked-letter-ig-logo-design-vector-37373333.jpg"
import './navbar.module.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black to-purple-600 text-white p-5 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
       <Image
            width={70} 
            height={70} 
            src={logo}
            alt="Ibrahim Logo"
          />
        </motion.div>

        <div className="hidden md:flex space-x-8 text-lg cairo">
          {["الصفحة الرئيسية", "من نحن", "الخدمات", "المشاريع", "اتصل بنا"].map((item, index) => (
            <motion.a 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-gray-200 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      {isOpen && (
        <motion.div 
          className="cairo mt-5 md:hidden absolute top-16 left-0 w-full bg-purple-800 bg-opacity-90 text-white flex flex-col items-center space-y-20 py-6"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          { ["الصفحة الرئيسية", "من نحن", "الخدمات", "المشاريع", "اتصل بنا"].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg hover:text-gray-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
