import { FC } from "react";
import { Product } from "../types/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Quantity } from "./Quantity";

interface T extends Product {
  id?: number | undefined;
  handleProductClick?: (id: number | undefined) => void;
  item: Product;
  handleAddToCart: (product: Product) => void;
  quantity: number;
}

export const ProductCard: FC<T> = ({
  item,
  id,
  image,
  title,
  description,
  category,
  price,
  quantity,
  handleProductClick,
  handleAddToCart,
}) => {
  return (
    <div className="relative shadow-custom-shadow  p-4 rounded col-span-1 group hover:bg-gray-100">
      <div
        onClick={() => handleProductClick(id)}
        className="cursor-pointerflex flex-col items-center justify-between"
      >
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
      </div>
      <div className="absolute top-1/2 left-1/2">
        <Quantity quantity={quantity} />
        <button
          className="text-white p-2 rounded-full w-[50px] h-[50px] bg-blue-600 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => handleAddToCart(item)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};
