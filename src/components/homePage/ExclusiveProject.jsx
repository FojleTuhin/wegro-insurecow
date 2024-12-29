import React from "react";
import ProjectCard from "./ProjectCard";

const ExclusiveProject = () => {
  return (
    <div className="bg-[#E7EBED] py-[82px] px-4 sm:py-[100px] sm:px-16">
      <p className="text-[40px] font-semibold mb-4">Exclusive Projects</p>
      <p className="text-[20px] font-medium text-[#4F4F4F] mb-16">
        View some of our exclusive projects from here. Explore our crowdfunding
        app to provide investment through diversified project selections.
      </p>

      <ProjectCard />
    </div>
  );
};

export default ExclusiveProject;
