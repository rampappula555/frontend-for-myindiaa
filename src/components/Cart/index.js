import React from "react";
import CartItem from "../CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAllItemsInCart } from "../../redux/features/userCart";

const Cart = () => {
  const state = useSelector((state) => state.userCart.cart);
  const dispatch = useDispatch();
  function handleDeleteAllItems() {
    dispatch(deleteAllItemsInCart());
  }
  const totalPrice = state.reduce(
    (acc, curVal) => acc + curVal.count * curVal.price,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <nav className="text-sm text-gray-600">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {" / "}
          <span>Cart</span>
        </nav>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Subtotal</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {state.length > 0 ? (
                state.map((eachItem) => (
                  <CartItem key={eachItem.id} eachItem={eachItem} />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    <h1>No Items in the cart</h1>
                    <Link
                      to="/products"
                      className="text-blue-500 hover:underline"
                    >
                      Go to Products
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 flex items-center justify-between">
          <button
            onClick={handleDeleteAllItems}
            className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
          >
            Delete All Items
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${Math.ceil(totalPrice)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold mb-4">
            <span>Total:</span>
            <span>${Math.ceil(totalPrice)}</span>
          </div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
