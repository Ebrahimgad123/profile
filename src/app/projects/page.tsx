"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, liveLink, githubLink }) => {
  return (
    <motion.div
      className="bg-gray-800 text-white p-4 rounded-lg shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 mt-2 cairo">{description}</p>
      <div className="mt-4 flex gap-4">
        <motion.a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Live <MdEmojiPeople />
        </motion.a>
        <motion.a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600 transition flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub <FaGithub />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "TravMate",
      description: "تطبيق سياحي يوفر تجربة سفر سلسة، من التخطيط إلى الحجز والاستكشاف.",
      image: "https://res.cloudinary.com/dxisw9tzp/image/upload/v1742361514/into4_dolhwo.png",
      liveLink: "https://front-graduation.vercel.app/",
      githubLink: "https://github.com/Ebrahimgad123/front-graduation",
    },
    {
      title: "Medical App",
      description: "تطبيق طبي متطور يساعد المستخدمين على الوصول إلى الخدمات الصحية بسهولة.",
      image: "https://res.cloudinary.com/dxisw9tzp/image/upload/v1742362248/into6_ocmffk.png",
      liveLink: "https://medical-app-theta-eight.vercel.app/",
      githubLink: "https://github.com/Ebrahimgad123/medical-app",
    },    
    {
      title: "Hotel Booking",
      description: "تطبيق يساعد على حجز الفنادق بسهولة وإدارة العقارات بطريقة احترافية.",
      image: "https://res.cloudinary.com/dxisw9tzp/image/upload/v1742361827/into5_cmriol.png",
      liveLink: "https://hotel-full-stack.vercel.app",
      githubLink: "https://github.com/Ebrahimgad123/hotel-frontend",
    },
    {
      title: "E_Stores",
      description: "منصة تجارة إلكترونية متطورة تتيح للمستخدمين شراء وبيع المنتجات بسهولة وأمان.",
      image: "https://res.cloudinary.com/dxisw9tzp/image/upload/v1742364105/into8_oeowku.png",
      liveLink: "https://ecommerce-teamproject.vercel.app/",
      githubLink: "https://github.com/Ebrahimgad123/Ecommerce",
    },
    
    {
      title: "Cruds Pure javascript",
      description: "تطبيق ذكي يساعدك على تتبع تمارينك والحفاظ على لياقتك.",
      image: "https://res.cloudinary.com/dxisw9tzp/image/upload/v1742362548/into7_m6mlmk.png",
      liveLink: "https://ebrahimgad123.github.io/cruds-PureJavascript/",
      githubLink: "https://github.com/Ebrahimgad123/cruds-PureJavascript",
    },
    {
      title: "Maze solving",
      description: "تطبيق ذكاء اصطناعي لحل المتاهات باستخدام خوارزميات متقدمة لتحليل المسارات والعقبات.",
      image: "https://res.cloudinary.com/dxisw9tzp/image/upload/v1742364303/into9_do6n87.png",
      liveLink: "https://ebrahimgad123.github.io/maze-solving/",
      githubLink: "https://github.com/Ebrahimgad123/maze-solving",
    },
    
  ];

  return (
    <motion.div
      className="min-h-screen bg-purple-600 text-white p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
