
import api from "./api";
import type { Category, Product } from "../types";

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>("/categories");
  return response.data;
};

export const getCategoryById = async (
  id: number
): Promise<Category> => {
  const response = await api.get<Category>(`/categories/${id}`);
  return response.data;
};

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};

export const getProductById = async (
  id: number
): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};

export const searchProducts = async (
  keyword?: string,
  categoryId?: number
): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products/search", {
    params: {
      ...(keyword?.trim() ? { keyword: keyword.trim() } : {}),
      ...(categoryId ? { categoryId } : {}),
    },
  });

  return response.data;
};

export const getProductsByCategory = async (
  categoryId: number
): Promise<Product[]> => {
  const response = await api.get<Product[]>(
    `/products/category/${categoryId}`
  );

  return response.data;
};
