"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "/utils/motion";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"
      >
        <div className="col-span-2">
          <motion.div
            variants={slideInFromLeft(0.2)}
            className="uppercase text-xl tracking-widest text-[#f9a791] mt-5"
          >
            About
          </motion.div>
          <motion.h2 variants={slideInFromLeft(0.5)} className="py-4">
            Who I Am
          </motion.h2>
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="py-2 text-gray-600 leading-loose"
          >

I specialize in developing full-stack web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). 
I am passionate about creating dynamic and user-friendly experiences that solve real-world problems. 
My journey in web development began in 2022, where I honed my skills by building various applications and collaborating on projects

 that integrated API services and backend technologies.

I believe in the importance of continuous learning and am always eager to explore new frameworks and tools. While my expertise 
lies in the MERN stack, I am adaptable and quick to learn new technologies as needed. My philosophy is that a great developer 
selects the best tools for each task rather than adhering to a single technology.

          </motion.div>
          <motion.div
            variants={slideInFromLeft(1)}
            className="py-2 text-gray-600 leading-loose"
          >

I enjoy working directly with clients, translating their ideas into functional applications, and delivering solutions that exceed 
their expectations. In my spare time, I contribute to open-source projects and engage with the tech community to share knowledge and learn
 from others.
          </motion.div>
          <Link href="/projects">
            <motion.div
              variants={slideInFromLeft(1.2)}
              className="py-2 text-gray-600 underline cursor-pointer hover:text-[#5651e5]"
            >
              Check out some of my latest projects.
            </motion.div>
          </Link>
        </div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image
            src="/assets/about.png"
            className="rounded-xl"
            alt="About Image"
            width={400}
            height={300}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
