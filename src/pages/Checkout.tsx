import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return <div className="p-20 text-center">Your cart is empty. <Link to="/products" className="text-green-700">Shop now</Link></div>;
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <div className="mt-8 rounded-2xl border bg-white p-7">
        <h2 className="text-xl font-bold">Order Summary</h2>

        {items.map((item) => (
          <div key={item.product.id} className="flex justify-between border-b py-4 text-sm">
            <span>{item.product.name} × {item.quantity}</span>
            <span>₹{(item.product.finalPrice * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <div className="mt-6 flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <p className="mt-5 text-sm text-amber-700">
          Checkout and payment integration will be enabled after the backend order API is connected.
        </p>
      </div>
    </div>
  );
};

export default Checkout;