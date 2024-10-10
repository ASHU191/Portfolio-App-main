import HeroText from "@/app/components/Hero/page";
import ProjectCard from "@/app/components/ProjectCard/page";
import React from "react";

const WorkPage = () => {
  return (
    <div className="w-full">
      <HeroText value={"My Works"} />
      <div className="w-full px-[20px] md:px-[50px] py-6 lg:py-12 flex justify-center items-center">
        <ProjectCard />
      </div>
    </div>
  );
};

export default WorkPage;
