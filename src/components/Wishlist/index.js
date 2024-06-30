import React from "react";
import ProductCard from "../ProductCard";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const state = useSelector((state) => state.userCart.wishlist);

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Wishlist ({state.length})</h2>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Move All To Bag
          </button>
        </div>
        <div>{<ProductCard products={state} />}</div>
      </section>
    </div>
  );
};

export default Wishlist;
