import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form);
      navigate("/login");
    } catch {
      setError("Registration failed. Please check your details.");
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 py-12">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl border bg-white p-8">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="mt-2 text-gray-500">Join DayBasket today.</p>

        {[
          { key: "fullName", label: "Full Name", type: "text" },
          { key: "email", label: "Email", type: "email" },
          { key: "phone", label: "Phone", type: "tel" },
          { key: "password", label: "Password", type: "password" },
        ].map((field) => (
          <input
            key={field.key}
            type={field.type}
            required={field.key !== "phone"}
            placeholder={field.label}
            value={form[field.key as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
            className="mt-4 w-full rounded-xl border p-3 outline-green-600"
          />
        ))}

        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

        <button className="mt-6 w-full rounded-xl bg-green-700 py-3 font-semibold text-white">
          Register
        </button>

        <p className="mt-5 text-center text-sm text-gray-500">
          Already registered? <Link to="/login" className="text-green-700">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;