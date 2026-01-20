import Image from "next/image";
import React from "react";

type ServicesCardProps = {
  icon: string;
  name: string;
  description: string;
};

const ServicesCard = ({ icon, name, description }: ServicesCardProps) => {
  return (
    <div>
      <Image src={icon} alt="img" width={60} height={60} />
      <h1 className="text-gray-200 mt-6 text-xl md:text-2xl font-bold">{name}</h1>
      <p className="text-gray-300 mt-6 text">{description}</p>
    </div>
  );
};

export default ServicesCard;
