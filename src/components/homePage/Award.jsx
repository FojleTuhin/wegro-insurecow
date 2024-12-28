import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import AwardCard from "./AwardCard";

const Award = () => {
  return (
    <div>
      <p className="py-10  text-[27px] font-medium text-center">
        Awards and Recognitions
      </p>
      <div>
        <Marquee pauseOnHover={true} direction={"right"}>
          <AwardCard
            img="https://www.wegro.global/Home/award7.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
          <AwardCard
            img="https://www.wegro.global/Home/award6.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
          <AwardCard
            img="https://www.wegro.global/Home/award5.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
          <AwardCard
            img="https://www.wegro.global/Home/award4.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
          <AwardCard
            img="https://www.wegro.global/Home/award3.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
          <AwardCard
            img="https://www.wegro.global/Home/award2.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
          <AwardCard
            img="https://www.wegro.global/Home/award1.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
          <AwardCard
            img="https://www.wegro.global/Home/award10.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
          <AwardCard
            img="https://www.wegro.global/Home/award9.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
          <AwardCard
            img="https://www.wegro.global/Home/award8.png"
            heading="GPH Ispat Presents Bangladesh Innovation Awards 2023"
            subheading="Best Startup Innovation Best Innovation - Agriculture"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Award;
