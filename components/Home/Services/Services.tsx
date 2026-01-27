import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl text-white md:text-4xl xl:text-5xl font-bold">
        Colaburation with brand <br /> and agencies to crearte <br /> impactfull
        result
      </h1>
      <div className="w-[90%] sm:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 items-center mx-auto">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center"   >
          <ServicesCard
            icon="/images/s1.png"
            name="UI & UX"
            description="Designing beautiful and functional user interfaces, effictive and enjoyable to use."
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="top-center">
          <ServicesCard
            icon="/images/s2.png"
            name="Web and Mobile App"
            description="Designing beautiful and functional user interfaces, effictive and enjoyable to use."
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center">
          <ServicesCard
            icon="/images/s3.png"
            name="Design & Creative"
            description="Designing beautiful and functional user interfaces, effictive and enjoyable to use."
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="600" data-aos-anchor-placement="top-center">
          <ServicesCard
            icon="/images/s4.png"
            name="Development"
            description="Designing beautiful and functional user interfaces, effictive and enjoyable to use."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
