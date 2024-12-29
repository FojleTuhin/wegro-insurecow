"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Card from "./Card";

function ProjectSlider() {
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
    <div className="relative max-w-screen mx-auto px-4 py-8">
      {/* Custom Navigation Buttons */}
      <button
        className="absolute top-0 right-16 transform -translate-y-0 z-10 bg-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-400"
        onClick={() => document.querySelector(".slick-prev").click()}
      >
        <FaChevronLeft className="w-4 h-4" />
      </button>
      <button
        className="absolute top-0 right-2 transform -translate-y-0 z-10 bg-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-400"
        onClick={() => document.querySelector(".slick-next").click()}
      >
        <FaChevronRight className="w-4 h-4" />
      </button>

      {/* Slider */}
      <Slider
        {...settings}
        className="slider-custom" // Add custom class for styling
      >
        <Card
          img="https://www.wegro.global/Home/investus6.webp"
          heading="Fertile Land Mass"
          subheading="55% of the Bangladesh is arable land, totaling 8.1 million hectares: a land area slightly larger than Ireland."
        />
        <Card
          img="https://www.wegro.global/Home/investus1.webp"
          heading="Fertile Land Mass"
          subheading="55% of the Bangladesh is arable land, totaling 8.1 million hectares: a land area slightly larger than Ireland."
        />
        <Card
          img="https://www.wegro.global/Home/investus2.webp"
          heading="Fertile Land Mass"
          subheading="55% of the Bangladesh is arable land, totaling 8.1 million hectares: a land area slightly larger than Ireland."
        />
        <Card
          img="https://www.wegro.global/Home/investus10.webp"
          heading="Fertile Land Mass"
          subheading="55% of the Bangladesh is arable land, totaling 8.1 million hectares: a land area slightly larger than Ireland."
        />
      </Slider>
    </div>
  );
}

export default ProjectSlider;
