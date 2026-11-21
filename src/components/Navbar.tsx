
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingBasket,
  ShoppingCart,
  UserRound,
  LogOut,
  Search,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/products?search=${encodeURIComponent(search)}`);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-green-600 p-2 text-white">
            <ShoppingBasket size={25} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-green-800">
              DayBasket
            </h1>
            <p className="text-[10px] text-gray-500">
              Everyday essentials, simplified
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className="text-sm font-medium text-gray-700 hover:text-green-700">
            Home
          </NavLink>
          <NavLink to="/products" className="text-sm font-medium text-gray-700 hover:text-green-700">
            Shop
          </NavLink>
          <NavLink to="/my-orders" className="text-sm font-medium text-gray-700 hover:text-green-700">
            My Orders
          </NavLink>
        </nav>

        <form
          onSubmit={handleSearch}
          className="hidden max-w-xs flex-1 items-center rounded-full bg-gray-100 px-4 py-2 lg:flex"
        >
          <Search size={18} className="text-gray-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search groceries..."
            className="w-full bg-transparent px-2 text-sm outline-none"
          />
        </form>

        <div className="hidden items-center gap-5 md:flex">
          <Link to="/cart" className="relative text-gray-700 hover:text-green-700">
            <ShoppingCart size={23} />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <>
              <Link to="/account" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <UserRound size={19} />
                {user?.fullName.split(" ")[0]}
              </Link>
              <button onClick={handleLogout} title="Logout">
                <LogOut size={19} />
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
            >
              Login
            </Link>
          )}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white p-5 md:hidden">
          <form onSubmit={handleSearch} className="mb-4 flex rounded-lg bg-gray-100 p-3">
            <Search size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="ml-2 w-full bg-transparent outline-none"
            />
          </form>

          <div className="flex flex-col gap-4 text-sm">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart ({cartCount})</Link>
            <Link to="/my-orders" onClick={() => setMenuOpen(false)}>My Orders</Link>
            <Link to="/account" onClick={() => setMenuOpen(false)}>My Account</Link>
            {isAuthenticated ? (
              <button onClick={handleLogout} className="text-left text-red-600">
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
