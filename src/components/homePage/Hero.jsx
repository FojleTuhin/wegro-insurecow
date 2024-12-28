import Image from "next/image";

import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="w-full">
        {/* Container for both image and content */}
        <div className="">
          {/* Image Container */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="https://www.wegro.global/Home/homeImage.webp"
              alt="WeGro agricultural professionals in rice field"
              fill
              priority
              className="lg:object-cover object-contain"
            />
            {/* Gradient Overlay - Only visible on larger screens */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-900/80 lg:block hidden" />

            {/* Large Screen Content Overlay */}
            <div className="hidden lg:flex absolute inset-0">
              <div className="max-w-[1440px] w-full mx-auto px-8">
                <div className="h-full flex items-center">
                  <div className="w-2/5 ml-auto text-white space-y-6">
                    <h1 className="text-6xl font-bold">
                      What Sets WeGro Apart
                    </h1>
                    <p className="text-xl text-white/90">
                      Our product innovates every aspect of smallholder
                      financing from how the loan is disbursed, how the returns
                      are shared and how the risk is priced and managed.
                    </p>
                    <button className="bg-transparent border-2 px-[21px]  py-[9px] rounded-md border-white text-white hover:bg-white hover:text-emerald-900 transition-colors">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Content - Below Image */}
          <div className="lg:hidden px-4  bg-white">
            <div className="max-w-[980px] mx-auto space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold">
                What Sets WeGro Apart
              </h1>
              <p className="text-gray-600">
                Our product innovates every aspect of smallholder financing from
                how the loan is disbursed, how the returns are shared and how
                the risk is priced and managed.
              </p>
              <button className="bg-transparent border-2 px-[21px]  py-[9px] rounded-md border-black text-black hover:bg-black hover:text-white transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
