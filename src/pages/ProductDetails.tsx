import { FC } from "react";
import { Section } from "../components/Section";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Product } from "../types/product";

export const ProductDetails: FC<Product> = () => {
  const { id } = useParams();
  const { data } = useFetch(`https://fakestoreapi.com/products/${id}`);

  return (
    <Section>
      <div className="flex items-center justify-center gap-4 max-w-[900px] m-auto">
        <img src={data.image} alt={data.title} className="w-[300px]" />
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-5">{data.title}</h1>
          <b>{data.price}</b>
          <p className="my-5 text-sm">{data.description}</p>
          <span className="text-gray-600 uppercase text-sm">
            categories: {data.category}
          </span>
        </div>
      </div>
    </Section>
  );
};
