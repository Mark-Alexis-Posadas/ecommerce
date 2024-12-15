import { v4 as uuidv4 } from "uuid";
import { CartModalType } from "../types/cart-modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const CartModal = ({ cartItem, setCart, setCartCount, cartRef }) => {
  const handleDeleteCartItem = (id) => {
    const removeCartItem = cartItem.filter((item) => item.id !== id);
    setCart(removeCartItem);
    setCartCount((prev) => (prev ?? 0) - 1);
  };
  return (
    <div className="bg-[rgba(0,0,0,0.4)] fixed w-full h-screen overflow-hidden z-20">
      <div
        ref={cartRef}
        className="bg-white p-5 h-screen absolute top-00 bottom-0 right-0 w-[600px] flex flex-col justify-between"
      >
        <div className="flex items-center justify-between border-b border-slate-3 pb-3">
          <h2 className="font-bold text-md">Cart</h2>
          <button onClick={() => setCart([])}>Clear cart</button>
        </div>
        <div className="overflow-y-auto h-full py-10">
          {cartItem.length === 0 && <p>Shop now</p>}
          {cartItem.map((item) => (
            <div
              className="flex items-center justify-between mb-5"
              key={uuidv4()}
            >
              <figure className="flex items-center">
                <img
                  className="w-12 h-12 object-contain"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex flex-col px-4">
                  <figcaption className="text-sm">{item.title}</figcaption>
                  <figcaption className="text-gray-600 text-xs flex items-center">
                    {item.quantity} x - ${item.price}
                  </figcaption>
                </div>
              </figure>
              <button
                onClick={() => handleDeleteCartItem(item.id)}
                className="text-red-600 text-sm hover:text-red-700"
              >
                <FontAwesomeIcon icon={faTrash} />
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
