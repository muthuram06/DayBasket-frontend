import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";
import type { Product } from "../types";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("Unable to load products. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-3xl font-bold">Our Products</h1>
      <p className="mt-2 text-gray-500">Explore everyday essentials.</p>

      {loading ? (
        <p className="py-16 text-center">Loading products...</p>
      ) : error ? (
        <p className="py-16 text-center text-red-600">{error}</p>
      ) : products.length === 0 ? (
        <p className="py-16 text-center text-gray-500">
          No products available yet.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;