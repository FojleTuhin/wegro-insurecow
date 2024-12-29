"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const carouselImages = [
  "https://www.wegro.global/Home/homebg3.webp",
  "https://www.wegro.global/Home/homebg2.webp",
  "https://www.wegro.global/Home/homebg1.webp",
];

const stats = [
  { value: "$7.2 Mn+", label: "Funds Disbursed" },
  { value: "$2.2 Mn+", label: "Agricultural Yield" },
  { value: "$5.5 Mn+", label: "Returns Reimbursed" },
  { value: "5500+", label: "Farmers Onboarded" },
  { value: "40+", label: "Operational Zones" },
];

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <div className="relative h-screen">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {carouselImages.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: `url(${src})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative h-full flex flex-col justify-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <h1 className="font-semibold text-[28px] sm:text-7xl xl:text-[96px] xl:leading-[100px] font-fira text-white mt-20">
                  Investing in Agriculture,
                  
                  Simplified
                </h1>
                <p className="text-base md:text-xl xl:text-2xl font-semibold mt-4 md:mt-6 text-white">
                  We seek to improve the lives of 10 Million farmers in
                  Bangladesh.
                  <br />
                  Download the WeGro App and join us on our journey.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-8 gap-4 my-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-white">
                      <div className="counter text-[24px] md:text-[30px] leading-[43px] font-medium  flex flex-row font-fira">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base font-semibold opacity-80">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 my-4 md:my-11">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-[21px] py-[9px] rounded-md">
                    DOWNLOAD APP
                  </button>
                  <button className="text-white border-white border hover:bg-white hover:text-black px-[21px] py-[9px] rounded-md">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
