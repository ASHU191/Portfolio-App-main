import AboutMe from "@/app/components/AboutMe/page";
import Card from "@/app/components/Card/page";
import HeroText from "@/app/components/Hero/page";
import SocialLinks from "@/app/components/SocailLink/page";
import Resume from "@/app/components/resume/page";
import { style } from "@/libs/styles/page";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full pb-4 relative">
      <HeroText value={"MERN-STACK Developer"} />
      <div className={`${style.paddingX} flex flex-col gap-6`}>
        <div className={`row-1 w-full mt-4 flex flex-col lg:flex-row gap-6`}>
          <AboutMe />
          <div className="tech w-full lg:w-[49%]">
            <Card>
              <div className="w-full h-full py-6 ">
                <div className="row1 w-full text-center">
                  <h1 className="text-2xl text-[--text-color] font-medium">
                    My <span className="text-[--primary-color]">Core</span>{" "}
                    Technologies
                  </h1>
                </div>
                <div className="row2 w-full h-full flex flex-wrap gap-3 justify-evenly items-center">
                <div className="imgBox">
                    <Image
                      src={"/nodejs.png"}
                      width={60}
                      height={60}
                      alt="React JS"
                      priority
                    />
                  </div>
                  
                  <div className="imgBox">
                    <Image
                      src={"/react.png"}
                      width={60}
                      height={60}
                      alt="React JS"
                      priority
                    />
                  </div>

                  <div className="imgBox">
                    <Image
                      src={"/javascript.png"}
                      width={55}
                      height={55}
                      alt="Javascript (ES6)"
                      priority
                    />
                  </div>

                  <div className="imgBox">
                    <Image
                      src={"/mongodb.png"}
                      width={60}
                      height={60}
                      alt="Javascript (ES6)"
                      priority
                    />
                  </div>

                  <div className="imgBox">
                    <Image
                      src={"/firebase.png"}
                      width={55}
                      height={55}
                      alt="Javascript (ES6)"
                      priority
                    />
                  </div>


                  {/* <div className="imgBox">
                    <Image
                      src={"/css.png"}
                      width={60}
                      height={60}
                      alt="CSS"
                      priority
                    />
                  </div> */}

                  {/* <div className="imgBox">
                    <Image
                      src={"/html.png"}
                      width={55}
                      height={55}
                      alt="HTML"
                      priority
                    />
                  </div> */}

                  <div className="imgBox">
                    <Image
                      src={"/flutter.png"}
                      width={55}
                      height={55}
                      alt="FLUTTER"
                      priority
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="row-2 w-full flex gap-6">
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <SocialLinks />
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
