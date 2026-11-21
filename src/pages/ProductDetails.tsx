
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getProductById(Number(id))
      .then(setProduct)
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-20 text-center">Loading...</div>;

  if (!product) {
    return <div className="p-20 text-center">Product not found.</div>;
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
      <img
        src={product.imageUrls?.[0] || "https://placehold.co/600x500"}
        alt={product.name}
        className="w-full rounded-2xl bg-white object-cover"
      />

      <div>
        <p className="text-green-700">{product.categoryName}</p>
        <h1 className="mt-3 text-4xl font-bold">{product.name}</h1>
        <p className="mt-5 text-gray-500">{product.description}</p>

        <p className="mt-6 text-3xl font-bold">
          ₹{Number(product.finalPrice).toFixed(2)}
        </p>

        <p className="mt-3 text-sm text-gray-500">
          {product.stockQuantity > 0 ? "In stock" : "Out of stock"}
        </p>

        <button
          disabled={product.stockQuantity <= 0}
          onClick={() => addToCart(product)}
          className="mt-8 rounded-xl bg-green-700 px-8 py-3 font-semibold text-white disabled:bg-gray-400"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
