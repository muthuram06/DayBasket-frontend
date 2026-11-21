
const MyOrders = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">My Orders</h1>

      <div className="mt-8 rounded-2xl border bg-white p-10 text-center">
        <h2 className="text-xl font-semibold">Your Orders</h2>
        <p className="mt-3 text-gray-500">
          Your order history will appear here once order management
          is connected to the backend.
        </p>
      </div>
    </div>
  );
};

export default MyOrders;
