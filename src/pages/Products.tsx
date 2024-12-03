import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Section } from "../components/Section";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";

export const Products: FC = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");
  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <Section>
      <div className="flex">
        <aside>
          <ul>
            <li>All</li>
            {categories.map((category) => (
              <li key={uuidv4()}>{category}</li>
            ))}
          </ul>
        </aside>
        <div className="grid grid-cols-5 gap-4">
          {data.map((item) => (
            <ProductCard key={uuidv4()} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};
