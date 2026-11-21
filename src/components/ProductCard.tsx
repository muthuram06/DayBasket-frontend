
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  const image =
    product.imageUrls?.[0] ||
    "https://placehold.co/500x400?text=DayBasket";

  const discount =
    product.discountPrice !== null && product.price > 0
      ? Math.round(
          ((product.price - product.discountPrice) / product.price) * 100
        )
      : 0;

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
          <img
            src={image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/500x400?text=Product";
            }}
          />

          {discount > 0 && (
            <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
              {discount}% OFF
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <p className="mb-1 text-xs text-green-700">
          {product.categoryName}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="mb-1 line-clamp-2 min-h-12 font-semibold text-gray-800 hover:text-green-700">
            {product.name}
          </h3>
        </Link>

        <p className="mb-3 text-xs text-gray-500">
          {product.unit} {product.brand ? `• ${product.brand}` : ""}
        </p>

        <div className="mb-3 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">
              ₹{Number(product.finalPrice).toFixed(2)}
            </span>
            {product.finalPrice < product.price && (
              <span className="ml-2 text-xs text-gray-400 line-through">
                ₹{Number(product.price).toFixed(2)}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1 text-xs text-amber-500">
            <Star size={13} fill="currentColor" /> New
          </span>
        </div>

        <button
          disabled={product.stockQuantity <= 0}
          onClick={() => addToCart(product)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          <ShoppingCart size={17} />
          {product.stockQuantity > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
