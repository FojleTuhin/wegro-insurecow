import Image from "next/image";
import React from "react";

const AwardCard = ({ img, heading, subheading }) => {
  return (
    <div>
      <div className="w-[256px] h-[220px] bg-[#fff] rounded-[10px] mx-6 px-4 py-5">
        <Image src={img} alt="img" width={256} height={20} className="h-[80px] w-auto mx-auto bg-contain"/>
        <p className="mt-[15px] text-center text-[#000000] mb-2">{heading}</p>
        <p className="text-[#8C8C8C] text-[12px] text-center">{subheading}</p>
      </div>
    </div>
  );
};

export default AwardCard;
