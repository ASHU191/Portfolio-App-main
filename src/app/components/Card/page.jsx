"use client";
import { CardAnimation } from "@/libs/gsap/page";
import { motion } from "framer-motion";
import React from "react";
import { useEffect, useRef } from "react";

const Card = ({ children, height }) => {
  let cardRef = useRef(null);

  useEffect(() => {
    CardAnimation(cardRef.current);
  }, []);
  return (
    <div
    ref={cardRef}
      className={`group w-full opacity-0 ${
        height ? `h-[${height}px]` : "h-[270px]"
      } rounded-[30px] bg-[--card-bg] p-4 relative overflow-hidden shadow-sm`}
    >
      {children}
    </div>
  );
};

export default Card;
