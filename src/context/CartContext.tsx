
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { CartItem, Product } from "../types";

interface CartContextType {
  items: CartItem[];
  cartCount: number;
  subtotal: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CART_STORAGE_KEY = "daybasket_cart";

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product) => {
    setItems((previous) => {
      const existing = previous.find(
        (item) => item.product.id === product.id
      );

      if (existing) {
        return previous.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + 1,
                  product.stockQuantity
                ),
              }
            : item
        );
      }

      if (product.stockQuantity <= 0) return previous;

      return [...previous, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((previous) =>
      previous.filter((item) => item.product.id !== productId)
    );
  };

  const updateQuantity = (
    productId: number,
    quantity: number
  ) => {
    setItems((previous) =>
      previous
        .map((item) => {
          if (item.product.id !== productId) return item;

          return {
            ...item,
            quantity: Math.min(
              Math.max(1, quantity),
              item.product.stockQuantity
            ),
          };
        })
        .filter((item) => item.product.stockQuantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = items.reduce(
    (total, item) =>
      total + item.product.finalPrice * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
};
