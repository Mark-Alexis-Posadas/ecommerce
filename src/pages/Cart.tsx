import { FC } from "react";
import { Section } from "../components/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const Cart: FC = () => {
  return (
    <Section>
      <ul className="flex items-center gap-4">
        <li>Shopping Cart</li>
        <li>Checkout</li>
        <li>Order Complete</li>
      </ul>
      <div className="flex gap-4">
        <div className="basis-2/3">
          <div className="grid grid-cols-4 gap-4 border-b border-slate-300 py-2">
            <div>
              <h3 className="font-bold">Product</h3>
            </div>
            <div>
              <h3 className="font-bold">Price</h3>
            </div>
            <div>
              <h3 className="font-bold">Quantity</h3>
            </div>
            <div>
              <h3 className="font-bold">Subtotal</h3>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 border-b border-slate-300 py-2">
            <div>
              <FontAwesomeIcon icon={faTrash} />
              <img src="" alt="" />
              <h1>Mens Casual Premium Slim Fit T-Shirts</h1>
            </div>
            <div>
              <b>$22.3</b>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <button className="text-white rounded bg-blue-600 p-2">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <button className="text-white rounded bg-blue-600 p-2">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <div>
              <b>$22.3</b>
            </div>
          </div>
        </div>

        <div className="basis-2/3">
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
    </Section>
  );
};
