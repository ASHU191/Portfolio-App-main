"use client"
import HeroText from "@/app/components/Hero/page";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="mb-8">
      <HeroText value={"About Me"} />
      <div className="w-full px-[20px] md:px-[60px] flex flex-col gap-6">
        <div className="row1 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[60%] rounded-[30px] bg-[--card-bg] p-4 relative overflow-hidden">
            <div
              className="w-full h-full p-4 flex flex-col items-start justify-start gap-4"
            >
              <h1 className="text-2xl text-white font-semibold">
                Muhammad Arsalan-Aftab
              </h1>
              <p className="text-xl text-[#999]">
                Hello there! Welcome to my Profile. I&apos;m Arsalan-Aftab, a
                curious explorer deeply immersed in the world of web
                development. My compass is set towards creating exceptional
                digital experiences that leave a mark.
              </p>
              <Link
                href="/My Resume.pdf"
                target="_blank"
                className="text-xl text-[--primary-color] flex justify-center items-center gap-2"
              >
                <span>See Resume</span>
                <LiaLongArrowAltRightSolid size={25} />
              </Link>
            </div>
          </div>
          <div
            className="w-full md:w-[40%] hidden md:flex  rounded-[30px] bg-[--card-bg] p-4 relative overflow-hidden"
          >
            <div className="w-full absolute top-0 left-0">
              <img src={"/deep-profile.jpg"} className="w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="row-2 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[60%] rounded-[30px] bg-[--card-bg] p-4 relative overflow-hidden">
            <div className="w-full h-full flex flex-col gap-4 p-3">
              <div className="education-tittle">
                <h1 className="text-[25px] text-[--primary-color] font-semibold ">
                  Education
                </h1>
              </div>

              <div className="border-t border-[#777]"></div>

              <div className="educations flex flex-col gap-6">
                <div className="col1 px-3 flex flex-col gap-2 ">
                  <h2 className="text-lg font-semibold text-[--text-color]">
                    Intermediate
                  </h2>
                  <p className="text-white text-xl">Govt Dehli College</p>
                  <span className="text-md text-[#999] font-semibold">
                    2021 - 2023
                  </span>
                </div>

                <div className="col1 px-3 flex flex-col gap-2 ">
                  <h2 className="text-lg font-semibold text-[--text-color]">
                    Matric
                  </h2>
                  <p className="text-white text-xl">MILLENIUMS EDUCATION SYSTEM</p>
                  <span className="text-md text-[#999] font-semibold">
                    2019 - 2021
                  </span>
                </div>

                <div className="col1 px-3 flex flex-col gap-2 ">
                  <h2 className="text-lg font-semibold text-[--text-color]">
                    Mern Stack Development
                  </h2>
                  <p className="text-white text-xl">SMIT</p>
                  <span className="text-md text-[#999] font-semibold">
                    2022 - 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex flex-col gap-6 md:gap-4">
            <div className="w-full h-[280px] rounded-[30px] bg-[--card-bg] relative overflow-hidden flex flex-col gap-3 p-6">
              <div className="skills-title">
                <h1 className="text-[28px] text-[--primary-color] font-semibold ">
                  Skills
                </h1>
              </div>

              <div className="border-t border-[#777]"></div>

              <div className="skills-card w-full flex flex-wrap gap-2 md:gap-3 my-3">
                <div className="html px-4 py-1 border-2 border-[#999] rounded-md text-md text-[#999] font-bold hover:border-[--primary-color] hover:text-[--primary-color] cursor-pointer">
                  HTML
                </div>
                <div className="CSS px-4 py-1 border-2 border-[#999] rounded-md text-md text-[#999] font-bold hover:border-[--primary-color] hover:text-[--primary-color] cursor-pointer">
                  CSS
                </div>
                <div className="JavaScript px-4 py-1 border-2 border-[#999] rounded-md text-md text-[#999] font-bold hover:border-[--primary-color] hover:text-[--primary-color] cursor-pointer">
                  JavaScript
                </div>
                <div className="Tailwind CSS px-4 py-1 border-2 border-[#999] rounded-md text-md text-[#999] font-bold hover:border-[--primary-color] hover:text-[--primary-color] cursor-pointer">
                  React Js
                </div>
                <div className="Next Js px-4 py-1 border-2 border-[#999] rounded-md text-md text-[#999] font-bold hover:border-[--primary-color] hover:text-[--primary-color] cursor-pointer">
                  MongoDB
                </div>
                <div className="React Js px-4 py-1 border-2 border-[#999] rounded-md text-md text-[#999] font-bold hover:border-[--primary-color] hover:text-[--primary-color] cursor-pointer">
                  FireBase
                </div>
                <div className="MongoDB px-4 py-1 border-2 border-[#999] rounded-md text-md text-[#999] font-bold hover:border-[--primary-color] hover:text-[--primary-color] cursor-pointer">
                  Dart
                </div>
                <div className="Node Js px-4 py-1 border-2 border-[#999] rounded-md text-md text-[#999] font-bold hover:border-[--primary-color] hover:text-[--primary-color] cursor-pointer">
                  Flutter
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 rounded-[30px] bg-[--card-bg] p-8 relative overflow-hidden">
              <h1 className="text-2xl text-[--text-color]">
                ~ Lets Connect{" "}
                <span className="text-[--primary-color]">together</span>{" "}
              </h1>
              <div className="border-t border-[#777] mb-2"></div>
              <div className="social-links flex flex-wrap gap-4">
                <div className="linkdein px-6 py-2 flex items-center gap-3 border-2 border-[#999] rounded-xl">
                  <BsLinkedin className="text-[--primary-color]" />
                  <h2 className="text-lg text-[--text-color]">Linkedin</h2>
                </div>
                <div className="linkdein px-6 py-2 flex items-center gap-3 border-2 border-[#999] rounded-xl">
                  <BsGithub className="text-[--primary-color]" />
                  <h2 className="text-lg text-[--text-color]">Github</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
