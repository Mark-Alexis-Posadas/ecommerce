import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Section } from "../components/Section";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components/ProductCard";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Products: FC = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams<{ categoryName: string }>();
  const { data, loading } = useFetch("https://fakestoreapi.com/products");
  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  const [products, setProducts] = useState(data);
  const [active, setActive] = useState<number>(-1);

  useEffect(() => {
    if (data && data.length > 0) {
      if (categoryName) {
        const filteredProducts = data.filter(
          (product) => product.category === categoryName
        );
        setProducts(filteredProducts);

        const activeIndex = categories.findIndex(
          (category) => category === categoryName
        );

        setActive(activeIndex);
      } else {
        setProducts(data);
      }
    }
  }, [data, categoryName, categories]);

  const handleFilterCategory = (categoryName: string, index: number) => {
    setActive(index);

    if (categoryName === "All") {
      setProducts(data);
      navigate(`/products`);
    } else {
      const filteredProducts = data.filter(
        (product) => product.category === categoryName
      );
      setProducts(filteredProducts);
      navigate(`/products/category/${categoryName}`);
    }
  };

  const handleProductClick = (id: number) => {
    navigate(`/products/${id}`);
    console.log(id);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Section>
      <div className="flex flex-col md:flex-row">
        <aside className="p-0 md:px-5 mb-5 md:mb-0">
          <ul className="flex md:flex-col md:gap-0 items-center md:items-start gap-4">
            {categoryName ? (
              ""
            ) : (
              <li
                key="all"
                className={`${
                  active === -1 ? "text-green-600" : "text-gray-600"
                } my-2 cursor-pointer`}
                onClick={() => handleFilterCategory("All", -1)}
              >
                All
              </li>
            )}

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
                <div
                  key={uuidv4()}
                  className="cursor-pointer"
                  onClick={() => handleProductClick(id)}
                >
                  <ProductCard
                    image={image}
                    title={title}
                    category={category}
                    price={price}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
};
