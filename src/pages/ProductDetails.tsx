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
      <div className="flex items-center justify-center gap-4">
        <img src={data.image} alt={data.title} className="w-[300px]" />
        <div className="flex flex-col">
          <h1 className="font-bold">{data.title}</h1>
          <p>{data.description}</p>
          <span>{data.category}</span>
          <span>{data.price}</span>
        </div>
      </div>
    </Section>
  );
};
