import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { CartModalType } from "../types/cart-modal";
import { Link } from "react-router-dom";

export const CartModal: FC<CartModalType> = ({
  cartItem,
  setCart,
  setCartCount,
  cartRef,
}) => {
  const handleDeleteCartItem = (id: number) => {
    const removeCartItem = cartItem.filter((item) => item.id !== id);
    setCart(removeCartItem);
    setCartCount((prev) => prev - 1);
  };
  return (
    <div className="bg-[rgba(0,0,0,0.4)] fixed w-full h-screen overflow-hidden z-20">
      <div
        ref={cartRef}
        className="bg-white p-5 h-screen absolute top-00 bottom-0 right-0 w-[400px] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between border-b border-slate-3 pb-3">
          <h2 className="font-bold text-md">Cart</h2>
          <button>Clear cart</button>
        </div>
        <div className="overflow-y-auto h-full py-10">
          {cartItem.length === 0 && <p>Shop now</p>}
          {cartItem.map((item) => (
            <div
              className="flex items-center justify-between mb-3"
              key={uuidv4()}
            >
              <figure className="flex flex-wrap">
                <img className="w-[50px]" src={item.image} alt={item.title} />
                <figcaption>{item.title}</figcaption>
                <figcaption>{item.price}</figcaption>
              </figure>
              <button onClick={() => handleDeleteCartItem(item.id)}>
                delete
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Link to="/cart">
            <button>View Cart</button>
          </Link>

          <button>checkout</button>
        </div>
      </div>
    </div>
  );
};
