import api from "./api";

export type PaymentMethod = "COD" | "RAZORPAY";

export interface CreateOrderRequest {
  paymentMethod: PaymentMethod;
  deliveryAddress: string;
  items: {
    productId: number;
    quantity: number;
  }[];
}

export interface OrderItemResponse {
  id: number;
  productId: number;
  productName: string;
  productSku: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  subtotal: number;
}

export interface OrderResponse {
  id: number;
  orderNumber: string;
  totalAmount: number;
  status: string;
  paymentMethod: PaymentMethod;
  paymentStatus: string;
  deliveryAddress: string;
  createdAt: string;
  items: OrderItemResponse[];
}

export const createOrder = async (
  request: CreateOrderRequest
): Promise<OrderResponse> => {
  const response = await api.post<OrderResponse>(
    "/orders",
    request
  );

  return response.data;
};

export const getMyOrders = async (): Promise<OrderResponse[]> => {
  const response = await api.get<OrderResponse[]>("/orders/my-orders");
  return response.data;
};

export const getOrderByNumber = async (
  orderNumber: string
): Promise<OrderResponse> => {
  const response = await api.get<OrderResponse>(
    `/orders/${encodeURIComponent(orderNumber)}`
  );

  return response.data;
};