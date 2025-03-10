import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black pt-2 pb-2 text-sm mt-40">
      {/* Grid Layout for Main Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-4 pb-[4rem] text-white px-8">
        <div>
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-4xl font-bold tracking-wide">zenith</h1>
            </Link>
            <span className="w-2 h-2 bg-red-600 rounded-full ml-2"></span>
          </div>
          <p className="w-full md:w-2/3 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam
            velit voluptatem illum obcaecati cum dolore assumenda quo? Molestiae
            explicabo minus mollitia assumenda culpa optio.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium">Company</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>+91 9999944444</li>
            <li>zenith.support@gmal.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section Centered */}
      <hr className="border-gray-700 w-[90%] mx-auto" />
      <p className="py-5 text-center text-gray-400 w-full">
        Copyright 2025 @zenith by Ronak - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
