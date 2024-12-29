import React from "react";
import Card from "./Card";
import ProjectSlider from "./ProjectSlider";

const WhyInvestWithUs = () => {
  const settings = {
    infinite: false,
    speed: 500,
    // arrows: false,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 3,
    gap: 10,
    responsive: [
      {
        breakpoint: 1024, // Tailwind's "lg" breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tailwind's "md" breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Tailwind's "sm" breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1440px] mx-auto py-[82px] px-4 sm:py-[100px] sm:px-16">
      <p className="text-[40px] font-semibold mb-6">Why Invest with Us?</p>
      <p className="text-[20px] font-medium text-[#4F4F4F] mb-12">
        Our full value-chain model offers tangible growth opportunities
      </p>
      {/* <Card /> */}
      <ProjectSlider />
    </div>
  );
};

export default WhyInvestWithUs;
