
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-gray-500">Your cart is empty.</p>
          <Link to="/products" className="mt-5 inline-block rounded-xl bg-green-700 px-6 py-3 text-white">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-8 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex flex-wrap items-center justify-between gap-5 rounded-xl border p-5">
                <div>
                  <h3 className="font-bold">{item.product.name}</h3>
                  <p className="text-gray-500">₹{Number(item.product.finalPrice).toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="rounded border px-3 py-1">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} disabled={item.quantity >= item.product.stockQuantity} className="rounded border px-3 py-1 disabled:opacity-40">+</button>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-red-500"><Trash2 size={19} /></button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-gray-50 p-6">
            <div className="flex justify-between font-bold">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="mt-6 block rounded-xl bg-green-700 py-3 text-center font-semibold text-white">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
