import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="shadow-md  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-3xl font-semibold">
          <a href="/">Zutok Software</a>
        </div>
        <div className="space-x-6">
          <a
            href="#"
            className="text-black-100 hover:text-black-300 transition duration-300"
          >
            Mens👦
          </a>
          <a
            href="#"
            className="text-black-100 hover:text-black-300 transition duration-300"
          >
            Womens👦
          </a>
          <a
            href="#"
            className="text-black-100 hover:text-black-300 transition duration-300"
          >
            Log In👤
          </a>
          <a
            href="#"
            className="text-black-100 hover:text-black-300 transition duration-300"
          >
            Cart🧺
            {/* <Link href="/cart"></Link> */}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
