import React, { useContext, useEffect, useState } from "react";
import {
  MdOutlineAccountCircle,
  MdShoppingCart,
  MdFavoriteBorder,
  MdExitToApp,
} from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import QueryContext from "../../context/QueryContext";
import { useLocation } from "react-router-dom";
import Popup from "../LogoutPopup";
import { FaArrowDown } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
const Navbar = () => {
  const location = useLocation();
  const { getQuery } = useContext(QueryContext);
  const [searchProducts, setSearchProducts] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  function handleSearchInput(event) {
    setSearchProducts(event.target.value);
  }
  function handleSearchButton() {
    getQuery(searchProducts);
  }
  function handleLogout() {
    setOpenPopup(true);
  }
  useEffect(() => {
    const body = document.querySelector("body");
    if (openPopup) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "initial";
    }
  }, [openPopup]);
  const [scrollToTop, setScrollToTop] = useState(false);
  function handleScroll() {
    if (scrollToTop) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
  useEffect(() => {
    function handler() {
      if (window.scrollY > 500) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    }
    document.addEventListener("scroll", handler);
    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-[500]">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-black">Exclusive</span>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {location.pathname === "/products" && (
            <input
              value={searchProducts}
              onChange={handleSearchInput}
              type="search"
              placeholder="What are you looking for?"
              className="border rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          )}
          {location.pathname === "/products" && (
            <button onClick={handleSearchButton} className="text-gray-700">
              <CiSearch className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic"
                : "text-black hover:text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic"
                : "text-black hover:text-gray-700"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic"
                : "text-black hover:text-gray-700"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic"
                : "text-black hover:text-gray-700"
            }
          >
            <MdFavoriteBorder className="inline h-6 w-6" />
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic"
                : "text-black hover:text-gray-700"
            }
          >
            <MdShoppingCart className="inline h-6 w-6" />
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic"
                : "text-black hover:text-gray-700"
            }
          >
            <MdOutlineAccountCircle className="inline h-6 w-6" />
          </NavLink>
          <button
            className="text-black hover:text-gray-700"
            onClick={handleLogout}
          >
            <MdExitToApp className="inline h-6 w-6" />
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={handleSearchButton}
            className="text-gray-700 focus:outline-none focus:text-gray-900"
          >
            <CiSearch className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic block"
                : "text-black hover:text-gray-700 block"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic block"
                : "text-black hover:text-gray-700 block"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic block"
                : "text-black hover:text-gray-700 block"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic block"
                : "text-black hover:text-gray-700 block"
            }
          >
            Wishlist
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic block"
                : "text-black hover:text-gray-700 block"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic block"
                : "text-black hover:text-gray-700 block"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 italic block"
                : "text-black hover:text-gray-700 block"
            }
          >
            Logout
          </NavLink>
        </div>
      </div>
      <div
        onClick={handleScroll}
        className="fixed bottom-5 right-5 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 cursor-pointer transition duration-300 ease-in-out"
      >
        {scrollToTop ? <MdArrowUpward size={24} /> : <FaArrowDown size={24} />}
      </div>
      {openPopup && <Popup setOpenPopup={setOpenPopup} />}
    </nav>
  );
};

export default Navbar;
