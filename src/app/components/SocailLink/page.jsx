import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { PiLinkedinLogoBold } from "react-icons/pi";
import Card from "../Card/page";
import { style } from "@/libs/styles/page";
import Link from "next/link";
import { socialLinks } from "@/libs/data/page";
import Overlay from "../overlay/page";

const SocialLinks = () => {
  return (
    <div className="social-link w-full flex flex-col md:flex-row gap-6">
      <Link href={socialLinks[0].url} className="w-full" target="_blank">
        <Card id="github" className={"group relative"}>
          <div
            target="_blank"
            className={`${style.flex} flex-col gap-3 w-full h-full group cursor-pointer`}
          >
            <AiFillGithub className="text-7xl text-[--text-color] group-hover:text-[--primary-color] transition duration-300 ease-in-out group-hover:scale-[1.04] group-hover:translate-y-[-10px]" />
            <h2 className="text-2xl font-semibold text-[--text-color]">
              Github
            </h2>
          </div>
        </Card>
      </Link>
      <Link href={socialLinks[1].url} className="w-full" target="_blank">
        <Card id="github" className={"group relative"}>
          <Overlay>
            <span className="group overflow-hidden">
              <h2 className="text-5xl font-bold text-[#fff] transition duration-500 ease-in-out translate-y-12 group-hover:translate-y-0 ">
                <PiLinkedinLogoBold />
              </h2>
            </span>

            <span className="group overflow-hidden">
              <h2 className="text-4xl font-semibold text-[#fff] transition duration-500 ease-in-out translate-y-12 group-hover:translate-y-0 ">
                Lets
              </h2>
            </span>
            <span className="group overflow-hidden">
              <h2 className="text-4xl font-semibold text-[#fff] transition duration-500 ease-in-out translate-y-12 group-hover:translate-y-0 ">
                Connect
              </h2>
            </span>
          </Overlay>
          <div
            target="_blank"
            className={`${style.flex} flex-col gap-3 w-full h-full group cursor-pointer`}
          >
            <AiFillLinkedin className="text-7xl text-[--text-color] transition duration-300 ease-in-out" />
            <h2 className="text-2xl font-semibold text-[--text-color]">
              linkedin
            </h2>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default SocialLinks;
