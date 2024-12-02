import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Section } from "../components/Section";
import { SubHeading } from "../components/SubHeading";
import { useFetch } from "../hooks/useFetch";

export const Home: FC = () => {
  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );
  const { data: products } = useFetch(
    "https://fakestoreapi.com/products?limit=5"
  );

  return (
    <Section>
      <h1>hello</h1>
      <SubHeading>Cataegories</SubHeading>
      <div className="grid grid-cols-2 gap-4 p-10">
        {categories.map((category) => (
          <div key={uuidv4()} className="min-h-[300px] bg-slate-300">
            {category}
          </div>
        ))}
      </div>
      <SubHeading>Featured Products</SubHeading>
      <div className="grid grid-cols-2 gap-4 p-10">
        {products.map((item) => (
          <div key={uuidv4()}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <SubHeading>Special Offers/Discounts</SubHeading>
    </Section>
  );
};
