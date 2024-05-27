import React from "react";
import Link from "next/link";
import { style } from "@/libs/styles/page";

const FlipText = ({ element }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden">
      <h1
        className={`text-2xl md:text-3xl  inline-block font-bold transition duration-700 ease-out group-hover:translate-y-[-120%] text-[#B9AAFF]`}
      >
        {element}
      </h1>
      <h1
        className={`${style.navTextSize} inline-block font-bold text-[--text-color] absolute left-0 transition duration-500 ease-out translate-y-[120%] rotate-12 group-hover:translate-y-[0%] group-hover:rotate-0`}
      >
        {element}
      </h1>
    </div>
  );
};

export default FlipText;
