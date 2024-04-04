import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  oldPrice: number;
  newPrice: number;
  image: string;
}

const FlashCard = ({ title, oldPrice, newPrice, image }: Props) => {
  return (
    <div className="bg-white rounded-md p-5 flex flex-col justify-between">
      <span className="flex items-center justify-center pb-14 pt-6">
        <Image src={image} alt={title} height={100} />
      </span>

      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg">{title}</h2>
        <span className="flex space-x-6 font-semibold">
          <p className="text-light line-through">${oldPrice}</p>
          <p className="text-danger">${newPrice}</p>
        </span>
      </div>
    </div>
  );
};

export default FlashCard;
