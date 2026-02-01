import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <nav className="bg-black text-white px-6 py-4">
      <div className=" mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-amber-400">
          MyApp
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-amber-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
          <li><Link to="/Courses" className="hover:text-amber-400">Courses</Link></li>
          <li><Link to="/product" className="hover:text-amber-400">Product</Link></li>
       
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-amber-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-500">
          Login
        </button>

      </div>
    </nav>
  )
}

export default Navbar