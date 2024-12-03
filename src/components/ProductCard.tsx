import { FC } from "react";
import { Product } from "../types/product";

export const ProductCard: FC<Product> = ({
  image,
  title,
  description,
  category,
  price,
}) => {
  return (
    <div className="shadow-custom-shadow flex flex-col items-center justify-between p-4 rounded col-span-1">
      <img
        className="w-[100px] h-[100px] object-contain"
        src={image}
        alt={title}
      />
      <h1 className="font-bold text-sm my-3">{title}</h1>
      <p>{description}</p>
      <div className="flex items center justify-between w-full">
        <span className="text-gray-400 text-sm">{category}</span>
        <span className="text-gray-400 text-sm">{price}</span>
      </div>
      <button className="text-white mt-5 p-2 rounded bg-blue-600">
        add to cart
      </button>
    </div>
  );
};
