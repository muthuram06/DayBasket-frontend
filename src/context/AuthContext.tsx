
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { AuthResponse, User } from "../types";
import { logoutUser } from "../services/authService";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (data: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("daybasket_token");
    const savedUser = localStorage.getItem("daybasket_user");

    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser) as User);
      } catch {
        logoutUser();
        localStorage.removeItem("daybasket_user");
      }
    }

    setLoading(false);
  }, []);

  const login = (data: AuthResponse) => {
    const userData: User = {
      userId: data.userId,
      fullName: data.fullName,
      email: data.email,
      role: data.role,
    };

    setUser(userData);
    localStorage.setItem("daybasket_user", JSON.stringify(userData));
  };

  const logout = () => {
    logoutUser();
    localStorage.removeItem("daybasket_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
