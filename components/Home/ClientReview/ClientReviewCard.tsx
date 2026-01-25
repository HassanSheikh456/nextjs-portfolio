import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  role: string;
};

const ClientReviewCard = ({ name, image, role }: Props) => {
  return (
    <div className="mt-2">
      <Image
        src={image}
        alt="client"
        width={60}
        height={60}
        className="rounded-full"
      />
      <p className="text-gray-200 mt-6 text-base font-medium">
        &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        fuga ipsum, tenetur repellat fugit dignissimos omnis magni neque numquam
        quia.&quot;
      </p>
      <h1 className="mt-6 text-xl font-bolt text-cyan-200">{name}</h1>
      <p className="text-white mt-1">{role}</p>
    </div>
  );
};

export default ClientReviewCard;
