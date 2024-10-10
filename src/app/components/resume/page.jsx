import React from "react";
import Card from "../Card/page";
import Link from "next/link";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Image from "next/image";
import Overlay from "../overlay/page";

const Resume = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[60%] cursor-pointer">
          <Card>
          <Overlay></Overlay> 
            <Link href={'/Work'} className="w-full h-full flex flex-col gap-12 justify-center px-[20px] py-12 relative">
            <div className="title">
              <h1 className="text-3xl text-[--primary-color] font-semibold group-hover:text-[--text-color]">Portfolio</h1>
            </div>
            <div className="w-full h-full flex justify-end items-end">
              <Image src={'/mockup.png'} className="transtion object-contain duration-500 ease-in-out group-hover:scale-[1.10]" width={450} height={450} alt={'Portfolio'} />
            </div>
            </Link>
          </Card>
        </div>
        <div className="w-full md:w-[40%]">
          <Link href='/My Resume.pdf' target="_blank" className="w-full">
            <Card>
              <div className="w-full h-full flex flex-col justify-center items-center gap-1">
                <HiOutlineDocumentDownload  className="text-6xl text-[--text-color]"/>
                <h2 className="text-xl font-semibold text-[--primary-color]">Download</h2>
                <span className="text-xl text-[--text-color]">resume</span>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
































//ASHU191
