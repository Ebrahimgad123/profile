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
      className="bg-gray-800 text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
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
          GitHub <FaGithub/>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    { title: "E_commerce app", description: "A great project about tech", image: "https://img.freepik.com/free-vector/shopping-cart-with-bags-gifts-concept-illustration_114360-18775.jpg" },
    { title: "Real Estate", description: "An innovative solution for business", image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?cs=srgb&dl=pexels-davidmcbee-1546168.jpg&fm=jpg" },
    { title: "Trav mate", description: "A creative and dynamic app", image: "https://t4.ftcdn.net/jpg/00/65/48/25/360_F_65482539_C0ZozE5gUjCafz7Xq98WB4dW6LAhqKfs.jpg" },
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