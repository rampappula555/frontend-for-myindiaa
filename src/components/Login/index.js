import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { createCart } from "../../redux/features/userCart";
// import { api } from "../../services/network";
const Login = () => {
  const userNameRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: location.state ? location.state : "rampappula@gmail.com",
    password: "123456",
  });
  const [error, setError] = useState("");
  function handleUserDetails(event) {
    setUserDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (
      userDetails.password.trim().length === 0 ||
      userDetails.username.trim().length === 0
    ) {
      setError("please fill above details");
    }
    const username = userDetails.username;
    const password = userDetails.password;
    async function makeApiCall() {
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      };
      try {
        const response = await fetch(
          "https://backend-for-myindiaa.onrender.com/login",
          options
        );
        const data = await response.json();
        if (response.status === 404 || response.status === 401) {
          setError(data.message);
          return;
        }
        if (response.status === 200) {
          Cookies.set("JWT_TOKEN", data.jwt_token, { expires: 30 });
          dispatch(createCart({ userId: data.id }));
          navigate("/", { replace: true });
        }
      } catch (error) {
        setError("An error occurred. Please try again later.");
      }
    }
    makeApiCall();
  }
  useEffect(() => {
    if (userNameRef.current) {
      userNameRef.current.focus();
    }
  }, []);
  const jwtToken = Cookies.get("JWT_TOKEN");
  if (jwtToken !== undefined) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVPbXzyFbwfSLSr0xFc46EhDPuLLRXj97eY-DUvdZqXkI~SvxgW52wvC2ZzqQBifz0jiSASSadgeeh3JiehtBWrgdG2xD~SYDrMo-AO1TncnqCOEp2JMg-UvltUIuETwWZk-ltr9vQzaoCe5-ZyQxW7vD0gWiCpdR5VRZ~wbbVt~jWiouWvLJJVJrMPSJSoYpfI0IxUjxKJKKjsBbsPSo87BalEA1guptLONpNfrbBiAe5Zi6ZhnnwxdVc1AIK3ScxuaQNyRrSwthho0bZwjhDbhzY0LLhAL6p07ObVBIHfTk3Dx-sktmt6uSxxHd~KoEWwFlR1~h~0zd0wY8kOTJQ__"
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
        <h2 className="text-2xl font-bold mb-6">Log in to Exclusive</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              ref={userNameRef}
              value={userDetails.username}
              onChange={handleUserDetails}
              name="username"
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
              Login
            </button>
          </div>
          {error && <p className="italic pt-2 text-red-600">{error}</p>}
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
