import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-5 px-10 bg-gray-100" style={{fontFamily: "Poppins"}}>
      <h1 className="text-xl font-bold">eBillMate</h1>
      <div className="space-x-8 hidden sm:block">
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About Us
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact Us
        </Link>
        <Link to="/login" className="text-blue-600 hover:underline">
          LOGIN
        </Link>
      </div>
    </header>
  );
}