import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DNA } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { updateCart, updateWishlist } from "../../redux/features/userCart";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const [toggleBuyNow, setToggleBuyNow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProductDetails() {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProductDetails();
  }, [id]);

  if (!product) {
    return (
      <div className="pt-[300px] pl-[820px] mb-[200px]">
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  function handleBuyNow() {
    if (toggleBuyNow) {
      navigate("/cart");
    } else {
      dispatch(updateCart({ ...product, count }));
      setToggleBuyNow(true);
    }
  }
  function handleWishlist(product) {
    dispatch(updateWishlist({ ...product }));
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row pb-0">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center">
            <div className="w-full mb-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">
              {"⭐".repeat(Math.round(product.rating))}
            </div>
            <div className="ml-2 text-gray-500">
              ({product.reviews.length} Reviews)
            </div>
            <div className="ml-4 text-green-500">
              {product.availabilityStatus}
            </div>
          </div>
          <div className="text-3xl font-semibold text-red-500 mb-4">
            ${product.price}
          </div>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <button
              className="px-4 py-2 border rounded"
              onClick={() => {
                if (count !== 1) {
                  setCount((prevState) => prevState - 1);
                }
              }}
            >
              -
            </button>
            <span className="px-4">{count}</span>
            <button
              className="px-4 py-2 border rounded"
              onClick={() => {
                setCount((prevState) => prevState + 1);
              }}
            >
              +
            </button>
          </div>
          <div className="flex space-x-2 mb-4">
            <button
              onClick={handleBuyNow}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              {toggleBuyNow ? "Goto Cart" : "Buy Now"}
            </button>
            <button
              className="px-4 py-2 border rounded"
              onClick={() => handleWishlist(product)}
            >
              ❤️
            </button>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Return Delivery</h3>
            <p>Free 30 Days Delivery Returns.</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <div className="flex items-center mb-2">
              <div className="text-yellow-500">
                {"⭐".repeat(review.rating)}
              </div>
              <div className="ml-2 text-gray-500">{review.reviewerName}</div>
              <div className="ml-4 text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
