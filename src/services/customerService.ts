import api from "./api";

export interface CustomerAddress {
  id: number;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string | null;
  isDefault: boolean;
}

export interface CustomerAddressRequest {
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
  landmark: string;
  isDefault: boolean;
}

export const getAddresses = async (): Promise<CustomerAddress[]> => {
  const response = await api.get<CustomerAddress[]>("/customer/addresses");
  return response.data;
};

export const addAddress = async (
  data: CustomerAddressRequest
): Promise<CustomerAddress> => {
  const response = await api.post<CustomerAddress>(
    "/customer/addresses",
    data
  );
  return response.data;
};

export const updateAddress = async (
  id: number,
  data: CustomerAddressRequest
): Promise<CustomerAddress> => {
  const response = await api.put<CustomerAddress>(
    `/customer/addresses/${id}`,
    data
  );
  return response.data;
};

export const deleteAddress = async (id: number): Promise<void> => {
  await api.delete(`/customer/addresses/${id}`);
};

export const setDefaultAddress = async (
  id: number
): Promise<CustomerAddress> => {
  const response = await api.patch<CustomerAddress>(
    `/customer/addresses/${id}/default`
  );
  return response.data;
};