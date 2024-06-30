import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteCart,
  deleteItemFromCart,
  updateCart,
} from "../../redux/features/userCart";
const CartItem = ({ eachItem }) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(updateCart({ ...eachItem, count: 1 }));
  };

  const handleDecrease = () => {
    if (eachItem.count > 1) {
      dispatch(deleteCart({ ...eachItem, count: 1 }));
    }
  };

  return (
    <tr>
      <td className="flex items-center py-4">
        <img
          src={eachItem.thumbnail}
          alt={eachItem.title}
          className="w-16 h-16 mr-4 bg-none"
        />
        <span>{eachItem.title}</span>
      </td>
      <td className="py-4">${eachItem.price}</td>
      <td className="py-4 flex items-center">
        <button
          onClick={handleDecrease}
          className="px-2 py-1 border rounded-l bg-gray-200 hover:bg-gray-300"
        >
          -
        </button>
        <span className="px-4">{eachItem.count}</span>
        <button
          onClick={handleIncrease}
          className="px-2 py-1 border rounded-r bg-gray-200 hover:bg-gray-300"
        >
          +
        </button>
      </td>
      <td className="py-4">
        ${Number(Number(eachItem.price) * Number(eachItem.count)).toFixed(2)}
      </td>
      <td className="py-4">
        <button
          onClick={() => dispatch(deleteItemFromCart({ id: eachItem.id }))}
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
