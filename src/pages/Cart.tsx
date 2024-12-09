import { FC } from "react";
import { Section } from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container } from "../components/Container";
import { Quantity } from "../components/Quantity";

interface T {
  image: string;
  title: string;
  price: number;
  quantity: number;
}
interface Item {
  cartItem: T[];
}

export const Cart: FC<Item> = ({ cartItem, setCart }) => {
  const incrementQuantity = (id: number) => {
    const updatedCart = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (id) => {
    const updatedCart = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : null
    );

    setCart(updatedCart);
  };

  return (
    <Section>
      <Container>
        <ul className="flex items-center gap-4">
          <li>Shopping Cart</li>
          <li>Checkout</li>
          <li>Order Complete</li>
        </ul>
        <div className="flex gap-4">
          <div className="w-[70%] p-5">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem.map((item) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={uuidv4()}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex items-center gap-4">
                          <FontAwesomeIcon icon={faTrash} />
                          <img
                            className="w-14 h-14 object-contain"
                            src={item.image}
                            alt={item.title}
                          />
                          <h1>{item.title}</h1>
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        <b>{item.price}</b>
                      </td>
                      <td className="px-6 py-4">
                        <Quantity
                          incrementQuantity={incrementQuantity}
                          decrementQuantity={decrementQuantity}
                          quantity={item.quantity}
                          itemId={item.id}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <b>${item.price}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-[30%] p-5">
            <h3 className="font-bold">Product</h3>
            <ul>
              <li className="flex items-center justify-between my-3">
                <span>Subtotal</span>
                <b>$100</b>
              </li>
              <li className="flex items-center justify-between my-3">
                <span>Shipping</span>
                <b>Free</b>
              </li>
              <li className="flex items-center justify-between my-3">
                <span>Total</span>
                <b>$100</b>
              </li>
            </ul>
            <button className="flex items-center justify-center gap-3 bg-blue-600 text-white rounded p-2 w-full">
              Proceed to checkout
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
