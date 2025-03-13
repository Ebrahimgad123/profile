"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdEmojiPeople } from "react-icons/md";
interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image }) => {
  return (
    <motion.div
      className="bg-gray-800 text-white p-4 rounded-lg shadow-lg "
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
      <p className="text-gray-400 mt-2">{description}</p>
      <div className="mt-4 flex gap-4">
        <motion.a
          href="#"
          className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition flex items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Demo <MdEmojiPeople />
        </motion.a>
        <motion.a
          href="#"
          className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600 transition flex items-center"
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
      title: "E_commerce app",
      description: "A great project about tech",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/312281422/DM/CL/ZE/190312336/ecommerce-website-500x500.png",
    },
    {
      title: "Real Estate",
      description: "An innovative solution for business",
      image:
        "https://img.freepik.com/free-vector/flat-design-real-estate-project-landing-page_23-2149763404.jpg",
    },
    {
      title: "Trav mate",
      description: "A creative and dynamic app",
      image:
        "https://img.freepik.com/free-vector/travel-landing-page-with-photo_23-2148360912.jpg",
    },
    {
      title: "Foodie Finder",
      description:
        "Discover the best restaurants around you with real-time reviews and recommendations.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/404/e987e841529487.Y3JvcCw2NTEsNTA5LDI1MCww.png",
    },
    {
      title: "FitTrack",
      description:
        "A smart fitness companion to help you track your workouts and stay in shape.",
      image:
        "https://img.freepik.com/free-vector/sport-landing-page-template-with-photo_23-2148216851.jpg?ga=GA1.1.1269071055.1741813265&semt=ais_hybrid",
    },
    {
      title: "BookNest",
      description:
        "A community-driven app for book lovers to find and share great reads.",
      image:
        "https://img.freepik.com/free-psd/realistic-landing-page-education-template-design_23-2149361010.jpg?ga=GA1.1.1269071055.1741813265&semt=ais_hybrid",
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
