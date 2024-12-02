import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Section } from "../components/Section";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";

export const Products: FC = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");

  if (loading) return <p>Loading...</p>;

  return (
    <Section>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <ProductCard key={uuidv4()} item={item} />
        ))}
      </div>
    </Section>
  );
};
