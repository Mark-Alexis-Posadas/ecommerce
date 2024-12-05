import { FC } from "react";
import { Section } from "../components/Section";

export const Cart: FC = () => {
  return (
    <Section>
      <ul className="flex items-center gap-4">
        <li>Shopping Cart</li>
        <li>Checkout</li>
        <li>Order Complete</li>
      </ul>
      <div className="flex items-center gap-4">
        <div className="basis-2/3">
          <div className="grid grid-cols-4 gap-4">
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
        </div>
      </div>
    </Section>
  );
};
