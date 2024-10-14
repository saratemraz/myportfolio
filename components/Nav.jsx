"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
const Nav = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: "#ecf0f3" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      {/* Desktop Menu */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/logo2.png" alt="Logo Image" width={210} height={200} />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/12zCqRY7W4XhuXA5NVEN-rPZlcCRSVOAx/view?usp=sharing"
              >
                Resume
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] lg:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "hidden fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link onClick={() => setNav(false)} href="/">
              <Image src="/logo2.png" alt="Logo Image" width={120} height={50} />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          {/* Mobile Menu Body */}
          <div className="border-b border-gray-300">
            <p className="w-[85%] md:w-[90%] py-4 leading-loose">
              Let&#39;s build something amazing together
            </p>
          </div>
          {/* Mobile Menu Navigation */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/12zCqRY7W4XhuXA5NVEN-rPZlcCRSVOAx/view?usp=sharing"
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            {/* Social Media Links */}
            <div className="pt-20 max-w-[400px]">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex justify-between my-4">
                <Link
                  href="https://www.linkedin.com/in/ahmed-wagih-404646225/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setNav(false)}
                  className="rounded-full shadow-lg shadow-gray-400 p-6 ms-[-20px] me-2 cursor-pointer hover:scale-110 ease-in duration-300"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com/AhmeWagih"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setNav(false)}
                  className="rounded-full shadow-lg shadow-gray-400 p-6 me-2 cursor-pointer hover:scale-110 ease-in duration-300"
                >
                  <FaGithub />
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  href="/contact"
                  className="rounded-full shadow-lg shadow-gray-400 p-6 me-2 cursor-pointer hover:scale-110 ease-in duration-300"
                >
                  <AiOutlineMail />
                </Link>
                <Link
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  href="https://api.whatsapp.com/send?phone=+201113078687&text=Hello%20Ahmed%20Wagih"
                  target="_blank"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
