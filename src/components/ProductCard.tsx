import { FC } from "react";
import { Product } from "../types/product";
interface ProuductProp {
  item: Product;
}
export const ProductCard: FC<ProuductProp> = ({ item }) => {
  return (
    <div className="shadow-custom-shadow flex flex-col items-center p-4 rounded">
      <img className="w-[100px]" src={item.image} alt={item.title} />
      <h1 className="font-bold text-md my-3">{item.title}</h1>
      <p>{item.description}</p>
      <div className="flex items center justify-between w-full">
        <span>{item.category}</span>
        <span>{item.price}</span>
      </div>
      <button>add to cart</button>
    </div>
  );
};
