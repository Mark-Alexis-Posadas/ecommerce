import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Section } from "../components/Section";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";

export const Products: FC = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");
  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  const [products, setProducts] = useState(data);
  const [active, setActive] = useState<number>(-1);

  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(data);
    }
  }, [data]);

  const handleFilterCategory = (categoryName: string, index: number) => {
    setActive(index);

    if (categoryName === "All") {
      setProducts(data);
    } else {
      const filteredProducts = data.filter(
        (product) => product.category === categoryName
      );
      setProducts(filteredProducts);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Section>
      <div className="flex">
        <aside className="px-5">
          <ul>
            <li
              key="all"
              className={`${
                active === -1 ? "text-green-600" : "text-gray-600"
              } my-2 cursor-pointer`}
              onClick={() => handleFilterCategory("All", -1)}
            >
              All
            </li>

            {categories.map((category, index) => (
              <li
                key={uuidv4()}
                className={`${
                  index === active ? "text-green-600" : "text-gray-600"
                } my-2 cursor-pointer`}
                onClick={() => handleFilterCategory(category, index)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products &&
            products.map((item) => {
              const { id, image, title, category, price } = item;
              return (
                <Link key={uuidv4()} to={`${id}`}>
                  <ProductCard
                    image={image}
                    title={title}
                    category={category}
                    price={price}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </Section>
  );
};
