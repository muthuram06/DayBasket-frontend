
import { Link } from "react-router-dom";
import { ShoppingBasket, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-2 text-white">
            <ShoppingBasket size={28} className="text-green-400" />
            <span className="text-2xl font-bold">DayBasket</span>
          </div>
          <p className="max-w-xs text-sm leading-7 text-gray-400">
            Your everyday essentials, delivered with care.
            Shop fresh groceries and household essentials with ease.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" className="hover:text-green-400">Home</Link>
            <Link to="/products" className="hover:text-green-400">Shop Products</Link>
            <Link to="/cart" className="hover:text-green-400">Shopping Cart</Link>
            <Link to="/my-orders" className="hover:text-green-400">My Orders</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">My Account</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/login" className="hover:text-green-400">Login</Link>
            <Link to="/register" className="hover:text-green-400">Create Account</Link>
            <Link to="/account" className="hover:text-green-400">My Profile</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>
          <div className="flex flex-col gap-4 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={17} /> support@daybasket.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={17} /> Customer Support
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={17} /> Local doorstep delivery
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 px-5 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} DayBasket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
