import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Popup = ({ setOpenPopup }) => {
  const navigate = useNavigate();

  const popUpRef = useRef(null);
  function handleNo() {
    Cookies.remove("JWT_TOKEN");
    navigate("/login", { replace: true });
  }
  useEffect(() => {
    function handler(event) {
      if (popUpRef.current && !popUpRef.current.contains(event.target))
        setOpenPopup(false);
    }
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setOpenPopup]);
  return (
    <div className="w-screen h-screen backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center z-[1000]">
      <div
        className="bg-white p-8 rounded shadow-md text-center w-[90%] max-w-md"
        ref={popUpRef}
      >
        <p className="mb-4 text-xl font-semibold">
          Are you sure you want to exit?
        </p>
        <div className="flex justify-center gap-4">
          <button
            autoFocus
            className="bg-[#DB4444] text-white px-4 py-2 rounded shadow hover:bg-red-600 focus:outline-none"
            onClick={handleNo}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-400 focus:outline-none"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
