import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Featured = () => {
  return (
    <div>
      <div>
        <p className="py-10  text-[27px] font-medium text-center">
          Featured on
        </p>
        <div>
          <Marquee pauseOnHover={true} direction="right">
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news5.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>

            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news7.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news1.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news4.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news3.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news5.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news7.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news1.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news4.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Home/news3.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Featured;
