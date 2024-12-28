import React from "react";
import OurServices from "./OurServices";
import WhyInvest from "./WhyInvest";
import Hero from "./Hero";
import Subscribe from "./Subscribe";
import Award from "./Award";
import Partners from "./Partners";
import Featured from "./Featured";
import Faq from "./Faq";
import Testimonials from "./Testimonial";
import { HeroCarousel } from "./HeroCarousel";

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <WhyInvest />
      <Hero />
      <OurServices />
      <div className="bg-[#E7EBED] pb-10">
        <Award />
        <Partners />
        <Featured />
      </div>
      <Testimonials />
      {/* <Faq /> */}
      <Subscribe />
    </div>
  );
};

export default HomePage;
