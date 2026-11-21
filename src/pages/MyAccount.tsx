
import { useAuth } from "../context/AuthContext";

const MyAccount = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">My Account</h1>

      <div className="mt-8 rounded-2xl border bg-white p-8">
        <h2 className="text-xl font-semibold">Personal Information</h2>

        <div className="mt-6 space-y-4">
          <p><span className="text-gray-500">Name:</span> {user?.fullName}</p>
          <p><span className="text-gray-500">Email:</span> {user?.email}</p>
          <p><span className="text-gray-500">Account role:</span> {user?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
