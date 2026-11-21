
export interface AuthResponse {
  token: string;
  tokenType: string;
  userId: number;
  fullName: string;
  email: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  phone?: string;
  password: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  categoryId: number;
  categoryName: string;
  name: string;
  slug: string;
  sku: string;
  description: string | null;
  brand: string | null;
  price: number;
  discountPrice: number | null;
  finalPrice: number;
  stockQuantity: number;
  unit: string;
  isActive: boolean;
  imageUrls: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  userId: number;
  fullName: string;
  email: string;
  role: string;
}

export interface ApiError {
  message: string;
}
