import { FC, useEffect, useState } from "react";
import { Section } from "../components/Section";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductDetails: FC = ({ handleAddToCart }) => {
  const { id } = useParams();
  const { data } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (data) {
      setProduct({ ...data, quantity: 1 });
    }
  }, [data]);

  const incrementQuantity = () => {
    if (product) {
      setProduct({ ...product, quantity: (product.quantity ?? 1) + 1 });
    }
  };

  const decrementQuantity = () => {
    if (product && product.quantity && product.quantity > 1) {
      setProduct({ ...product, quantity: product.quantity - 1 });
    }
  };

  return (
    <Section>
      <div className="flex items-center justify-center gap-4 max-w-[900px] m-auto">
        <img src={product.image} alt={product.title} className="w-[300px]" />
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-5">{product.title}</h1>
          <b>{product.price}</b>
          <p className="my-5 text-sm">{product.description}</p>
          <span className="text-gray-600 uppercase text-sm">
            categories: {product.category}
          </span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <button onClick={decrementQuantity}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input
                type="number"
                onChange={(e) => setQuantityValue(e.target.value)}
                value={product.quantity}
              />
              <button onClick={incrementQuantity}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <button onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
