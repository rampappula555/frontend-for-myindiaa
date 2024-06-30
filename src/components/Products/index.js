import React, { useCallback, useContext, useEffect, useState } from "react";
import { MutatingDots, FallingLines } from "react-loader-spinner";
import QueryContext from "../../context/QueryContext";
import ProductCard from "../ProductCard";
import ReactSlick from "../Reactslick";

const apiStatusConstants = {
  initial: "INITIAL",
  progress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Products = () => {
  const { userQuery, getQuery } = useContext(QueryContext);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);
  const [apiStatusCategory, setApiStatusCategory] = useState(
    apiStatusConstants.initial
  );

  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [limit, setLimit] = useState(30);
  const getProducts = useCallback(async () => {
    setApiStatus(apiStatusConstants.progress);
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${userQuery}&limit=${limit}`
    );
    const data = await response.json();
    setProducts(data.products);
    setApiStatus(apiStatusConstants.success);
  }, [userQuery, limit]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  function handeViewAllProducts() {
    if (products.length === 0) {
      getQuery("");
    }
    setLimit((prevState) => prevState + 20);
  }
  function progressView() {
    return (
      <div className="pl-[720px]">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="red"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  function successView() {
    return (
      <>
        {products.length > 0 ? (
          <ProductCard products={products} />
        ) : (
          <h2 className="pl-[700px]">NO PRODUCTS FOUND</h2>
        )}
      </>
    );
  }
  function getUi() {
    switch (apiStatus) {
      case apiStatusConstants.progress:
        return progressView();
      case apiStatusConstants.success:
        return successView();
      default:
        return null;
    }
  }
  useEffect(() => {
    async function makeApiCallForCategory() {
      setApiStatusCategory(apiStatusConstants.progress);
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      const data = await response.json();
      setCategoryList(data.slice(0, 15));
      setApiStatusCategory(apiStatusConstants.success);
    }
    makeApiCallForCategory();
  }, []);
  function onClickCategory(categoryItems) {
    async function makeApiCall() {
      setApiStatus(apiStatusConstants.progress);
      const response = await fetch(
        `https://dummyjson.com/products/category/${categoryItems}`
      );
      const data = await response.json();
      setProducts(data.products);
      setApiStatus(apiStatusConstants.success);
    }
    makeApiCall();
  }
  function successViewCategory() {
    return (
      <>
        {categoryList.map((eachList) => (
          <li
            className="cursor-pointer font-sans hover:font-serif font-semibold"
            key={eachList}
            onClick={() => {
              onClickCategory(eachList);
            }}
          >
            {eachList}
          </li>
        ))}
      </>
    );
  }
  function progressViewCategory() {
    return (
      <div className="pl-[90px]">
        <FallingLines
          color="red"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    );
  }
  function getcategories() {
    switch (apiStatusCategory) {
      case apiStatusConstants.progress:
        return progressViewCategory();
      case apiStatusConstants.success:
        return successViewCategory();
      default:
        return null;
    }
  }
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <aside className="w-full md:w-1/4 p-4">
          <ul className="space-y-2 text-gray-700">{getcategories()}</ul>
        </aside>
        <div className="w-full md:w-3/4 p-4">
          <div className="rounded-lg shadow-lg w-full h-[390px]">
            <ReactSlick />
          </div>
        </div>
      </div>

      <section className="mb-8">
        {getUi()}
        <button
          onClick={handeViewAllProducts}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          View All Products
        </button>
      </section>
    </div>
  );
};

export default Products;
