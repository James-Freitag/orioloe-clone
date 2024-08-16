import Image from "next/image";
import React from "react";
// Image
import aboutImage from "../../public/ori-pics/about-pic.jpg";

const About = () => {
  return (
    <section className="w-full h-auto pl-64">
      <div className="grid grid-cols-2 gap-6 mx-auto place-content-center w-full h-full">
        <div className="max-w-[16.12rem] flex flex-col justify-items-start w-full h-full  text-sm place-self-end">
          <p className="uppercase">about</p>
          <p className="italic pt-6">
            <span className="font-semibold w-full">Oriole</span> is a
            contemporary-American restaurant located in Chicago's West Loop
            neighborhood featuring{" "}
            <span className="font-semibold">
              Executive Chef and Owner Noah Sandoval's
            </span>{" "}
            award winning tasting menu. Since Oriole's opening in 2016, it has
            repeatedly earned two Michelin stars and recently received the Jean
            Banchet Award for Restaurant of the Year.{" "}
            <span className="font-semibold">Chef Sandoval</span> is also a James
            Beard nominated chef and was named one of Food & Wine's Best New
            Chefs in 2017.
          </p>
          <p className="pt-6">
            Our chefs offer an extended tasting. menu that is constantly
            evolving. We are excited to share it with you!
          </p>
        </div>
        <div className="flex justify-center items-start h-[26.125rem]">
          <Image
            src={aboutImage}
            alt="steak and basil"
            width={415}
            className="object-cover overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
