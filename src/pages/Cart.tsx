import { FC } from "react";
import { Section } from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "../components/Container";

export const Cart: FC = () => {
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
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faTrash} />
                        <img src="" alt="" />
                        <h1>Mens Casual Premium Slim Fit T-Shirts</h1>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <b>$22.3</b>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button className="text-white rounded bg-blue-600 p-2">
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button className="text-white rounded bg-blue-600 p-2">
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <b>$22.3</b>
                    </td>
                  </tr>
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
