import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  useEffect(() => {
    const jwtToken = Cookies.get("JWT_TOKEN");
    let options = {
      method: "GET",
      headers: { Authorization: `Bearer ${jwtToken}` },
    };
    async function getUserDetails() {
      try {
        const response = await fetch(
          "https://backend-for-myindiaa.onrender.com/profile",
          options
        );
        if (response.status === 200) {
          const data = await response.json();
          setUserDetails(data.userDetails);
          setName(data.userDetails.username);
          setEmail(data.userDetails.email);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUserDetails();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 bg-gray-100 p-4">
          <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
          <ul className="space-y-2">
            <li className="text-red-600">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <h2 className="text-lg font-semibold mt-6 mb-4">My Orders</h2>
          <ul className="space-y-2">
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <Link to="/wishlist" className="text-lg font-semibold mt-6 mb-4">
            My Wishlist
          </Link>
        </div>

        {Object.keys(userDetails).length > 0 ? (
          <div className="w-full md:w-3/4 p-4">
            <h2 className="text-xl font-semibold mb-6">Edit Your Profile</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700"> Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-4">Password Changes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700">
                    Current Password
                  </label>
                  <input
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    type="password"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Conform New Password
                  </label>
                  <input
                    value={newPassword}
                    onChange={(event) => {
                      setNewPassword(event.target.value);
                    }}
                    type="password"
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-red-600 text-white p-2 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="m-auto">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="red"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
