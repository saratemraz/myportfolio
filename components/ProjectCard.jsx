"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({
  src,
  width,
  height,
  index,
  alt,
  project_name,
  tags,
  url,
  github,
  description,
}) => {
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
      className="overflow-hidden relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {project_name}
        </h3>
        <p className="p-4 text-white text-center">{description}</p>
        <p className="pb-4  text-white text-center">{tags}</p>
        <div className="flex justify-center">
          <Link target="_blank" href={url}>
            <p className="mr-4 text-center p-3 rounded-lg bg-white hover:bg-indigo-700 hover:text-white text-gray-700 font-bold text-lg cursor-pointer">
              Demo
            </p>
          </Link>
          <Link target="_blank" href={github}>
            <p className="text-center p-3 rounded-lg bg-white hover:bg-indigo-700 hover:text-white text-gray-700 font-bold text-lg cursor-pointer">
              Repo
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
