import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Section } from "../components/Section";
import { SubHeading } from "../components/SubHeading";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";
import { BannerCarousel } from "../components/BannerCarousel";
import { bannerData } from "../data/banner";
export const Home: FC = () => {
  const { data: categories, loading } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );
  const { data: products } = useFetch(
    "https://fakestoreapi.com/products?limit=5"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Section>
      <BannerCarousel bannerData={bannerData} />

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
        {products.map((item) => {
          const { image, title, category, price } = item;
          return (
            <ProductCard
              key={uuidv4()}
              image={image}
              title={title}
              category={category}
              price={price}
            />
          );
        })}
      </div>
      <SubHeading>Special Offers/Discounts</SubHeading>
    </Section>
  );
};
