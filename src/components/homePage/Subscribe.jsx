"use client";

import { useState } from "react";
import Image from "next/image";


import React from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
  };
  return (
    <div>
      <section className="relative w-full  bg-[url('https://www.wegro.global/Home/subscribeBg.webp')]">
        

        {/* Content */}
        <div className="relative h-full max-w-[1440px] mx-auto py-[82px] px-4 sm:py-[100px] sm:px-16">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-[18px] sm:text-[30px] lg:text-[40px] 2xl:text-[64px] font-medium text-white max-w-4xl mb-8 leading-tight">
              Be a part of the agricultural uprising and help shape the future
              of sustainable farming
            </h2>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-2xl flex flex-col md:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Type your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 py-3 text-base px-4 rounded-md bg-white border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <button
                type="submit"
                className="h-12 px-8 rounded-md max-w-[200px] mx-auto text-white bg-[#F58220] hover:bg-[#d96d15] transition-colors md:w-auto "
              >
                Subscribe Us
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
