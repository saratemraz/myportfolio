"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SkillData = ({ src, width, height, index, alt, skill_name }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={src} width={width} height={height} alt={alt} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{skill_name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillData;
