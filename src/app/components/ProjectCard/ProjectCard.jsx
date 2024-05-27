"use client";
import { PjCardAnimation } from "@/libs/gsap/page";
import React from "react";
import { useEffect, useRef } from "react";

const ProjectCardAnimation = ({ children }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    PjCardAnimation(cardRef.current);
  }, []);
  return (
    <div
      ref={cardRef}
      className="projectCard w-full overflow-hidden p-4 md:p-10"
    >
      {children}
    </div>
  );
};

export default ProjectCardAnimation;
