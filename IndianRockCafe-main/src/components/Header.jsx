import React, { useState } from "react";
import logoImg from "../assets/static/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoImg} alt="logo" className="w-12 h-12" />
            <Link
              to="/"
              className="text-white text-2xl font-bold tracking-wide"
            >
              Indian Rock Cafe
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>

          {/* Nav links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white text-lg hover:text-orange-200 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg hover:text-orange-200 transition"
            >
              About Us
            </Link>
            <Link
              to="/menu"
              className="text-white text-lg hover:text-orange-200 transition"
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg hover:text-orange-200 transition"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 px-4 pb-4 pt-2 space-y-2">
          <Link
            to="/"
            className="block text-white text-base hover:text-orange-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white text-base hover:text-orange-300 transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/menu"
            className="block text-white text-base hover:text-orange-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/contact"
            className="block text-white text-base hover:text-orange-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
