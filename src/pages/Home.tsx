import { Link } from "react-router-dom";
import { ShoppingBasket, ArrowRight, Truck, ShieldCheck, Clock } from "lucide-react";

const Home = () => {
  return (
    <div>
      <section className="bg-green-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
              Freshness delivered to your doorstep
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Everyday Essentials,
              <span className="text-green-700"> Simplified.</span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-gray-600">
              Shop your daily groceries and household essentials
              with DayBasket. Quality products, convenient shopping
              and reliable doorstep delivery.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-green-700 px-7 py-4 font-semibold text-white hover:bg-green-800"
            >
              Explore Products <ArrowRight size={19} />
            </Link>
          </div>

          <div className="flex min-h-72 items-center justify-center rounded-3xl bg-green-100 p-10">
            <ShoppingBasket size={160} className="text-green-700" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:grid-cols-3">
        {[
          { icon: Truck, title: "Convenient Delivery", description: "Everyday essentials delivered to your doorstep." },
          { icon: ShieldCheck, title: "Quality Products", description: "Shop with confidence and convenience." },
          { icon: Clock, title: "Easy Shopping", description: "Find your essentials without wasting time." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-7">
            <item.icon size={30} className="text-green-700" />
            <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;