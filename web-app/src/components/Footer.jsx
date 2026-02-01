import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 mt-10 bottom-0 absolute w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-amber-400">
            MyApp
          </h2>
          <p className="mt-3 text-sm">
            Building modern React apps with clean UI and smooth UX.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Contact
          </h3>
          <p className="text-sm">📧 email@example.com</p>
          <p className="text-sm">📍 India</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer