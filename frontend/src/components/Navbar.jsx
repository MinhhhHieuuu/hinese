import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          Hinese
        </Link>

        {/* Middle Menu */}
        <div className="flex space-x-8">
          <Link to="/" className="hover:text-red-500 transition">Start</Link>
          <Link to="/about" className="hover:text-red-500 transition">About Us</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
        </div>

        {/* Right Buttons */}
        <div className="flex space-x-4">
          <Link to="/login" className="hover:text-red-500 transition">Log In</Link>
          <Link
            to="/signup"
            className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
