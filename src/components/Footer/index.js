import React, { useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  function handleEmailChange(event) {
    setError("");
    setEmail(event.target.value);
  }
  function handleSubmitEvent(event) {
    event.preventDefault();
    if (email.trim() === "") {
      setError("enter valid email");
      return;
    }
    setEmail("");
  }
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Exclusive</h3>
            <p className="mb-2">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <form className="flex items-center" onSubmit={handleSubmitEvent}>
              <input
                onChange={handleEmailChange}
                value={email}
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full h-9 text-black"
              />
              <button type="submit" className="pl-[5px]">
                <img src="/vector.png" alt="send-button" />
              </button>
            </form>
            {error && <p className="italic text-red-600">{error}</p>}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <p className="mb-2">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="mb-2">exclusive@gmail.com</p>
            <p className="mb-2">+88015-88888-9999</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Account</h3>
            <ul>
              <li className="mb-2">
                <Link to="/my-account">My Account</Link>
              </li>
              <li className="mb-2">
                <Link to="/login">Login / Register</Link>
              </li>
              <li className="mb-2">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="mb-2">
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className="mb-2">
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Link</h3>
            <ul>
              <li className="mb-2">
                <p>Privacy Policy</p>
              </li>
              <li className="mb-2">
                <p>Terms Of Use</p>
              </li>
              <li className="mb-2">
                <p>FAQ</p>
              </li>
              <li className="mb-2">
                <p>Contact</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Download App</h3>
            <p className="mb-4">Save $3 with App New User Only</p>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HgrS4ZhyzK2SNFMzUq5AasKBkXH6MHRuPgQGvnQwxOk~V8ibRUYL4AshkjLy-~RzW6LKOq31Ixmoz0Bd6FElLPNq7GveS1Cl6mCkp925d-pGD0svgnaTwLdVMY1tbdR2oHld8ZyUcY-ujo-NRGNmLXStdZcSdc98O8PmHuxiEEcGYnKtVHSBvsEr6p2jNo-NY5E51yfi9tmgyQUXfMTId9aJpbfkPD6e4drw0dJ987DDYp179NG7ToHcp0AVlpC5giptRTSXvnnk~VKDvSLF198G-5iNTeeATrKkWUEqmkmcJUZuUDbK~5spIKsprR9rKLg3NwI~F6CoXaJ7Ycm9Ig__"
                alt="QR Code"
                className="w-20 h-20"
              />
            </div>
            <div className="flex space-x-4">
              <p>
                <img
                  src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVMnksaidwq9R5Ix1BC4RliLO6AL7Ictw0-qiiFilB0r6c4kUWh0W9~gGZicR6EPRRoF08ryQQs7lsbGu2F~VUgWHVPGE6rtI1fMQTFeIJKfN1zwRlhnlCG5IvITvz0U5EYPq~-hmSfwaGjBBH00WtVgq~ne8TM5I4GCuK9YIHCTyEGuPBzQJxaSJMnmGHIDgEE5Z5yLxrQUhfl8pyEXqVBvVS7F4GLsd85TWBUH4jZw7GVngF3krxtaWaoPOBkG7FhEzTOshLDam21loJwqloaTM~A4dty8EEdT4Qtv32O1lB7L4dZLLF4G4TUwjYsIykguva6H~Em-loMKoWcPFQ__"
                  alt="Google Play"
                  className="w-32 h-25"
                />
              </p>
              <p>
                <img
                  src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aMiX~oZk05HnI3Oy-eb1W6GE1INmpNq1A2Lci2T98Zf28eXRCGazlvFUrRevUDHcJ9RGdpQiNwAztKTU~1r99ERLk-XSMZTmtu5Tm30wmJ0hbAzM-PBTDqmQU~X7z7sl217VWUoKMkz6uKrVrcTV5PZmzGKftQDXKbXk4QXzOFVPlnWb9UDQYCZHMVt44AUGQGX21q1LkAJu9FSrTLVeqvpHXiBrvamaLOYB5ilPY6Ttll0RWsgFNjNOEa2uHqx4EwR4QWzsxckM-Po-Bkmf-MY1d1-MkL~weY2Ame1IlnQqcTk0E5kmtIUvH-u17A~ShZ0vxBlVNd867F2QuMzyNg__"
                  alt="App Store"
                  className="w-32 h-25"
                />
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <p className="text-white">
                <i className="fab fa-facebook-f"></i>
              </p>
              <p className="text-white">
                <i className="fab fa-twitter"></i>
              </p>
              <p className="text-white">
                <i className="fab fa-instagram"></i>
              </p>
              <p className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p>&copy; Copyright Rimel 2022. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
