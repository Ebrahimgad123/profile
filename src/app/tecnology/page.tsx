"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "MongoDB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  },
  {
    name: "Express.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Next.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Redux",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
  },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "GraphQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    name: "Docker",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
];

const Page = () => {
  return (
    <>
      <Head>
        <title> Technologies</title>
        <meta
          name="description"
          content="Discover various full-stack technologies including MongoDB, Express.js, React.js, Next.js, and more!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-purple-600 text-white p-6">
        <h1
          className="text-4xl font-bold mb-8"
        >
          Technologies
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
          <motion.div
          key={index}
          className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0, x: -100 }}  
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <div className="relative w-24 h-24 mb-4">
            <img
              src={tech.image}
              alt={tech.name}
              width={96}
              height={96}
              className="object-contain w-24 h-24 mb-4"
            />
          </div>
          <h2 className="text-xl font-semibold">{tech.name}</h2>
        </motion.div>
        
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
