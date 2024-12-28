import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <div>
      <div>
        <p className="py-10  text-[27px] font-medium text-center">
          Our partners
        </p>
        <div>
          <Marquee pauseOnHover={true}>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/lalteerseed.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
           
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/bracseed.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/petrochem.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/syngenta.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/supreme.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/ide.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/polygon.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/bini.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/basis.png"
                alt="img"
                width={140}
                height={120}
                className="mx-6 bg-contain "
              />
            </div>
            <div className="h-[100px] w-[140px] mx-6 flex justify-center items-center">
              <Image
                src="https://www.wegro.global/Partners/undp.png"
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

export default Partners;
