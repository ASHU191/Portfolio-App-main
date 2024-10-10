"use client";
import { useEffect, useRef } from "react";
import { style } from "@/libs/styles/page";
import React from "react";
import { HeroTextAniamtion } from "@/libs/gsap/page";

const HeroText = ({ value }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    HeroTextAniamtion(heroRef.current);
  }, []);
  return (
    <div
      className={`w-full ${style.paddingX} py-3 mt-4 text-center overflow-hidden`}
    >
      <div className={`w-full ${style.flex}`} ref={heroRef}>
        <h1
          className={`text-[47px] sm:text-[50px] md:text-[75px] xl:text-[90px] text-[--hero-text] font-extrabold`}
        >
          {value}
        </h1>
      </div>
    </div>
  );
};

export default HeroText;
