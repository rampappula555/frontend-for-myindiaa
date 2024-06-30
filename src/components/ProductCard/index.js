import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCart } from "../../redux/features/userCart";

function ProductCard({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartToggles, setCartToggles] = useState({});

  function handleAddToCart(itemDetails) {
    const { id } = itemDetails;

    if (cartToggles[id]) {
      navigate("/cart");
    } else {
      dispatch(updateCart({ ...itemDetails, count: 1 }));
      setCartToggles((prevToggles) => ({
        ...prevToggles,
        [id]: true,
      }));
    }
  }

  return (
    <div className="flex flex-wrap -mx-2">
      {products.map((item) => (
        <div key={item.id} className="w-full md:w-1/4 p-2">
          <div className="border rounded-lg p-4 shadow-lg">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            </Link>
            <div className="flex items-center mb-2">
              <span className="text-red-500 font-bold text-xl mr-2">
                ${item.price}
              </span>
              <span className="text-gray-500">{item.warrantyInformation}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-green-500 bg-green-100 rounded px-2 py-1 text-sm">
                {item.discountPercentage}% off
              </span>
              <span className="text-gray-500 ml-auto">
                {item.rating} ({item.reviews.length} reviews)
              </span>
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              {!cartToggles[item.id] ? "Add To Cart" : "Go To Cart"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
