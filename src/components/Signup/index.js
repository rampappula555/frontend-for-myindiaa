import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createCart } from "../../redux/features/userCart";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  function handleUserDetails(event) {
    setUserDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    const { password } = userDetails;
    event.preventDefault();
    if (password.trim().length < 6) {
      setError("Password should be greater than 6 characters");
      return;
    }

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    async function makeApiCall() {
      try {
        const response = await fetch(
          "https://backend-for-myindiaa.onrender.com/signup",
          options
        );
        if (response.status === 403 || response.status === 401) {
          const data = await response.json();

          setError(data.message);
          return;
        }

        if (response.status === 201) {
          const data = await response.json();
          dispatch(createCart({ userId: data.userId }));
          let count = 5;
          const id = setInterval(() => {
            count--;
            if (count === 0) {
              clearInterval(id);
              navigate("/login", { state: userDetails.email });
            } else {
              setError(
                `$Account created successfully! redirecting to login page in ${count} seconds`
              );
            }
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        setError("An error occurred. Please try again later.");
      }
    }

    makeApiCall();
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative">
          <img
            src="https://nationaltoday.com/wp-content/uploads/2021/06/Shopping-Cart-Day-1.jpg"
            alt="Phone with shopping cart"
            className="max-w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 transform translate-x-10 translate-y-10">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/102/486/non_2x/shopping-bag-free-png.png"
              alt="Shopping cart"
              className="w-24 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              value={userDetails.username}
              onChange={handleUserDetails}
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={userDetails.email}
              onChange={handleUserDetails}
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={userDetails.password}
              onChange={handleUserDetails}
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Account
            </button>
          </div>
          {error && <p className="italic text-red-600 pt-2">{error}</p>}

          <p className="mt-4 text-center text-gray-600">
            Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
