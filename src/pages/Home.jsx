import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { Section } from "../components/Section";
import { SubHeading } from "../components/SubHeading";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";
import { BannerCarousel } from "../components/BannerCarousel";
import { bannerData } from "../data/banner";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";

interface HomeT {
  handleAddToCart: (product: any) => void;
  handleProductClick: (id: number) => void;
}
export const Home: FC<HomeT> = ({ handleAddToCart, handleProductClick }) => {
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
    <>
      <Section>
        <Container>
          <BannerCarousel bannerData={bannerData} />
        </Container>
      </Section>
      <Section>
        <Container>
          <SubHeading>Cataegories</SubHeading>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <Link to={`products/category/${category}`} key={uuidv4()}>
                <div
                  key={uuidv4()}
                  className={`min-h-[300px] ${
                    index === 0
                      ? "bg-[url('/images/categories/electronics.jpg')]"
                      : index === 1
                      ? "bg-[url('/images/categories/jewelry.jpg')]"
                      : index === 2
                      ? "bg-[url('/images/categories/mens-clothing.jpg')]"
                      : "bg-[url('/images/categories/womens-clothing.jpg')]"
                  } bg-cover bg-center bg-no-repeat flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 bg-black opacity-40"></div>

                  <h1 className="text-4xl text-white font-bold capitalize relative z-10 px-4 py-2 sm:text-5xl md:text-6xl shadow-lg">
                    {category}
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SubHeading>Featured Products</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((item) => {
              const { id, image, title, category, price } = item;
              return (
                <ProductCard
                  id={id}
                  item={item}
                  handleAddToCart={handleAddToCart}
                  handleProductClick={handleProductClick}
                  key={uuidv4()}
                  image={image}
                  title={title}
                  category={category}
                  price={price}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SubHeading>Special Offers/Discounts</SubHeading>
        </Container>
      </Section>
    </>
  );
};
