import React from "react";
import Overlay from "../overlay/page";
import Card from "../Card/page";
import {BsArrowRightCircle} from 'react-icons/bs'
import Link from "next/link";

const AboutMe = () => {
  return (
    <Link href={'/About'} className="info w-full lg:w-[49%] cursor-pointer">
      <Card className="relative group">
        <Overlay>
          <span className="group overflow-hidden">
            <h2 className="text-5xl md:text-5xl font-bold text-[#fff] transition duration-500 ease-in-out translate-y-12 group-hover:translate-y-0 ">
              Learn
            </h2>
          </span>

          <span className="group overflow-hidden">
            <h2 className="text-5xl md:text-5xl font-bold text-[#fff] transition duration-500 ease-in-out translate-y-12 group-hover:translate-y-0 ">
              More
            </h2>
          </span>

          <span className="group overflow-hidden">
            <h2 className="text-5xl md:text-5xl font-bold text-[#fff] transition duration-500 ease-in-out translate-y-12 group-hover:translate-y-0 ">
              About Me
            </h2>
          </span>

          <div className="icon hidden md:block absolute bottom-12 right-20 group">
            <BsArrowRightCircle className="text-[#fff] text-3xl md:text-4xl transtion duration-300 ease-in-out group-hover:translate-x-[12px]"/>
          </div>
        </Overlay>
        <div className="w-full h-full flex flex-col gap-2 justify-center items-start px-2 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[--primary-color]">
            Hello 👋
          </h1>
          <h2 className="text-[35px] md:text-[45px] text-[--text-color] font-bold">
            I&apos;m Muhammad-Arsalan-Aftab
          </h2>
          <p className="text-[18px] md:text-[22px] text-[#afaeae] overflow-hidden whitespace-nowrap text-ellipsis">
            ~ Lets Connect, Build & Grow Together
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default AboutMe;
