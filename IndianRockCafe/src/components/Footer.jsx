import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1 */}
          <div>
            <h5 className="text-3xl font-semibold text-orange-500 mb-4">Indian Rock Cafe</h5>
            <p className="text-lg text-gray-300">Your go-to spot for delicious Italian cuisine and chill vibes. 🍝🎶</p>
          </div>

          {/* Column 2 */}
          <div>
            <h6 className="text-xl font-medium text-white mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li><a href="/" className="text-lg hover:text-orange-500 transition">Home</a></li>
              <li><a href="/menu" className="text-lg hover:text-orange-500 transition">Menu</a></li>
              <li><a href="/about" className="text-lg hover:text-orange-500 transition">About Us</a></li>
              <li><a href="/contact" className="text-lg hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h6 className="text-xl font-medium text-white mb-4">Contact Us</h6>
            <p className="text-lg text-gray-300 mb-2">Email: hello@indianrockcafe.com</p>
            <p className="text-lg text-gray-300 mb-2">Phone: +91-9876543210</p>
            <p className="text-lg text-gray-300">Location: Delhi, India</p>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Indian Rock Cafe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
