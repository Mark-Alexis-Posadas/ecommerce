import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface Q {
  quantity: number;
}
export const Quantity: FC<Q> = ({
  incrementQuantity,
  decrementQuantity,
  quantity,
  itemId,
}) => {
  return (
    <div className="flex items-center gap-3">
      <button
        className="text-white rounded bg-blue-600 p-2"
        onClick={() => decrementQuantity(itemId)}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span>{quantity}</span>
      <button
        className="text-white rounded bg-blue-600 p-2"
        onClick={() => incrementQuantity(itemId)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};
