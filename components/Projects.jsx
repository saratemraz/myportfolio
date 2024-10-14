"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideInFromLeft } from "/utils/motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";
const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1240px] mx-auto px-2 py-16"
      >
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-xl tracking-widest uppercase text-[#f9a791] mt-16"
        >
          Projects
        </motion.p>
        <motion.h2 variants={slideInFromLeft(0.8)} className="py-4">
          Here are some of my projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8">
          {projects.map((image, index) => (
            <ProjectCard
              key={index}
              src={image.src}
              width={image.width}
              height={image.height}
              index={index}
              alt={image.alt}
              tags={image.tags}
              url={image.url}
              github={image.github}
              project_name={image.project_name}
              description={image.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
