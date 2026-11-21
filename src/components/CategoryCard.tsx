
import { Link } from "react-router-dom";
import type { Category } from "../types";

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Link
      to={`/products?category=${category.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden bg-green-50">
        <img
          src={
            category.imageUrl ||
            "https://placehold.co/400x400?text=Category"
          }
          alt={category.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x400?text=Category";
          }}
        />
      </div>

      <div className="p-3 text-center">
        <h3 className="font-semibold text-gray-800 group-hover:text-green-700">
          {category.name}
        </h3>
        {category.description && (
          <p className="mt-1 line-clamp-2 text-xs text-gray-500">
            {category.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;
