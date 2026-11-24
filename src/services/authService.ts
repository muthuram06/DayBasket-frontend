import api, { setAuthToken } from "./api";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../types";

export const loginUser = async (
  data: LoginRequest
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(
    "/auth/login",
    data
  );

  setAuthToken(response.data.token);

  return response.data;
};

export const registerUser = async (
  data: RegisterRequest
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>(
    "/auth/register",
    data
  );

  setAuthToken(response.data.token);

  return response.data;
};

export const logoutUser = () => {
  setAuthToken(null);
};