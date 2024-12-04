import { FC } from "react";
import { Product } from "../types/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const ProductCard: FC<Product> = ({
  image,
  title,
  description,
  category,
  price,
}) => {
  return (
    <div className="shadow-custom-shadow flex flex-col items-center justify-between p-4 rounded col-span-1 relative group hover:bg-gray-100">
      <img
        className="w-[100px] h-[100px] object-contain"
        src={image}
        alt={title}
      />
      <h1 className="font-bold text-sm my-3">{title}</h1>
      <p>{description}</p>
      <div className="flex items-center justify-between w-full">
        <span className="text-gray-400 text-sm">{category}</span>
        <span className="text-gray-400 text-sm">{price}</span>
      </div>

      <button className="text-white p-2 rounded-full w-[50px] h-[50px] bg-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};
