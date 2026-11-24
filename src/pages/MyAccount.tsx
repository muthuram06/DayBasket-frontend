import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "../context/AuthContext";
import {
  addAddress,
  deleteAddress,
  getAddresses,
  setDefaultAddress,
  updateAddress,
  type CustomerAddress,
  type CustomerAddressRequest,
} from "../services/customerService";

const emptyForm: CustomerAddressRequest = {
  addressLine: "",
  city: "",
  state: "",
  pincode: "",
  landmark: "",
  isDefault: false,
};

const MyAccount = () => {
  const { user } = useAuth();

  const [addresses, setAddresses] = useState<CustomerAddress[]>([]);
  const [form, setForm] = useState<CustomerAddressRequest>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadAddresses = async () => {
    try {
      const data = await getAddresses();
      setAddresses(data);
    } catch (error) {
      console.error("Failed to load addresses:", error);
      setMessage("Unable to load addresses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAddresses();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      if (editingId !== null) {
        await updateAddress(editingId, form);
        setMessage("Address updated successfully.");
      } else {
        await addAddress(form);
        setMessage("Address added successfully.");
      }

      setForm(emptyForm);
      setEditingId(null);
      setShowForm(false);
      await loadAddresses();
    } catch (error) {
      console.error("Address save failed:", error);
      setMessage("Unable to save address. Please check your details.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (address: CustomerAddress) => {
    setForm({
      addressLine: address.addressLine,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      landmark: address.landmark || "",
      isDefault: address.isDefault,
    });

    setEditingId(address.id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this address?")) {
      return;
    }

    try {
      await deleteAddress(id);
      setMessage("Address deleted successfully.");
      await loadAddresses();
    } catch (error) {
      console.error("Address deletion failed:", error);
      setMessage("Unable to delete address.");
    }
  };

  const handleDefault = async (id: number) => {
    try {
      await setDefaultAddress(id);
      setMessage("Default address updated.");
      await loadAddresses();
    } catch (error) {
      console.error("Default address update failed:", error);
      setMessage("Unable to update default address.");
    }
  };

  const cancelForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">My Account</h1>

      <section className="mt-8 rounded-2xl border bg-white p-8">
        <h2 className="text-xl font-semibold">Personal Information</h2>

        <div className="mt-6 space-y-4">
          <p><span className="text-gray-500">Name:</span> {user?.fullName}</p>
          <p><span className="text-gray-500">Email:</span> {user?.email}</p>
          <p><span className="text-gray-500">Account role:</span> {user?.role}</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border bg-white p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">Delivery Addresses</h2>

          <button
            onClick={() => {
              cancelForm();
              setShowForm(true);
            }}
            className="rounded-lg bg-green-700 px-5 py-2.5 font-medium text-white hover:bg-green-800"
          >
            + Add Address
          </button>
        </div>

        {message && (
          <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-800">
            {message}
          </p>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <h3 className="font-semibold">
              {editingId !== null ? "Edit Address" : "New Address"}
            </h3>

            <input
              name="addressLine"
              value={form.addressLine}
              onChange={handleChange}
              placeholder="House number, street and area"
              required
              maxLength={255}
              className="w-full rounded-lg border p-3"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
                maxLength={100}
                className="rounded-lg border p-3"
              />

              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                required
                maxLength={100}
                className="rounded-lg border p-3"
              />

              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                required
                maxLength={10}
                className="rounded-lg border p-3"
              />

              <input
                name="landmark"
                value={form.landmark}
                onChange={handleChange}
                placeholder="Landmark (optional)"
                maxLength={150}
                className="rounded-lg border p-3"
              />
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.isDefault}
                onChange={(e) =>
                  setForm((previous) => ({
                    ...previous,
                    isDefault: e.target.checked,
                  }))
                }
              />
              Set as default address
            </label>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-green-700 px-6 py-2.5 text-white disabled:opacity-50"
              >
                {saving ? "Saving..." : editingId !== null ? "Update Address" : "Save Address"}
              </button>

              <button
                type="button"
                onClick={cancelForm}
                className="rounded-lg border px-6 py-2.5"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 space-y-4">
          {loading ? (
            <p className="text-gray-500">Loading addresses...</p>
          ) : addresses.length === 0 ? (
            <p className="text-gray-500">
              No delivery addresses added yet.
            </p>
          ) : (
            addresses.map((address) => (
              <div
                key={address.id}
                className="rounded-xl border p-5"
              >
                <div className="flex flex-wrap justify-between gap-3">
                  <div>
                    <p className="font-semibold">
                      {address.addressLine}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {address.city}, {address.state} - {address.pincode}
                    </p>
                    {address.landmark && (
                      <p className="mt-1 text-sm text-gray-500">
                        Landmark: {address.landmark}
                      </p>
                    )}
                  </div>

                  {address.isDefault && (
                    <span className="h-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                      Default
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  {!address.isDefault && (
                    <button
                      onClick={() => handleDefault(address.id)}
                      className="font-medium text-green-700"
                    >
                      Set as Default
                    </button>
                  )}

                  <button
                    onClick={() => handleEdit(address)}
                    className="font-medium text-blue-700"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(address.id)}
                    className="font-medium text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default MyAccount;