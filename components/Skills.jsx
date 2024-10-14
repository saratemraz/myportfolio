"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft } from "/utils/motion";
import { skills } from "@/constants";
import SkillData from "./SkillsData";
import { useInView } from "react-intersection-observer";
const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="w-full lg:h-screen p-2">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
      >
        <motion.p
          variants={slideInFromLeft(0.5)}
          className="text-xl tracking-widest uppercase text-[#f9a791] mt-20"
        >
          Skills
        </motion.p>
        <motion.h2 variants={slideInFromLeft(0.8)} className="py-4">
          What I Can Do
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((image, index) => (
            <SkillData
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              alt={image.alt}
              skill_name={image.skill_name}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
