"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Menu = () => {
  const menuRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      menuRef.current,
      {
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <div
      ref={menuRef}
      className="absolute top-0 right-0 z-10 md:hidden w-[60%] h-full text-left bg-[--menu-bg] backdrop-blur-md flex items-start justify-center py-[70px]"
    >
      <ul className="flex flex-col gap-6">
        <li>
          <Link
            href={"/About"}
            className="text-2xl font-semibold text-[--text-color] hover:text-[--primary-color] transtion"
          >
            About
          </Link>
        </li>
        <li>
          <Link  
            href={"/Work"}
            className="text-2xl font-semibold text-[--text-color] hover:text-[--primary-color] transtion"
          >
            Works
          </Link>
        </li>
        <li>
          <Link href={'ContactUs'} 
          className="text-2xl font-semibold text-[--text-color] hover:text-[--primary-color] transtion">
            Get in touch
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

