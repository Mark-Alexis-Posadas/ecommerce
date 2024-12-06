import { FC } from "react";

export const CartModal: FC = ({ cartRef }) => {
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

        <div className="flex items-center justify-between">
          <button>View Cart</button>
          <button>checkout</button>
        </div>
      </div>
    </div>
  );
};
