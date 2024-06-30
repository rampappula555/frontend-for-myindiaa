import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-lg mb-8">
          Your visited page not found. You may go home page.
        </p>
        <Link to="/" className="px-6 py-3 bg-red-500 text-white rounded">
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
