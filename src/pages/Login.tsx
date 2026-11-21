
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await loginUser({ email, password });
      login(response);
      navigate("/");
    } catch {
      setError("Login failed. Check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 py-12">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="mt-2 text-gray-500">Login to your DayBasket account.</p>

        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="mt-8 w-full rounded-xl border p-3 outline-green-600" />

        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mt-4 w-full rounded-xl border p-3 outline-green-600" />

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <button disabled={loading} className="mt-6 w-full rounded-xl bg-green-700 py-3 font-semibold text-white disabled:opacity-50">
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-5 text-center text-sm text-gray-500">
          Don't have an account? <Link to="/register" className="font-semibold text-green-700">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
