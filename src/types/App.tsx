
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Milk,
  Newspaper,
  Carrot,
  Droplets,
  ShoppingBasket,
  CalendarCheck,
  MapPin,
  ShieldCheck,
  Truck,
  Leaf,
  Sparkles,
} from 'lucide-react'

const categories = [
  {
    icon: Milk,
    name: 'Fresh Milk',
    description: 'Fresh milk at your doorstep, every morning.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Newspaper,
    name: 'Newspapers',
    description: 'Start every morning with your daily news.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Carrot,
    name: 'Fresh Vegetables',
    description: 'Everyday vegetables, delivered fresh.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Droplets,
    name: 'Water Cans',
    description: 'Never run out of drinking water again.',
    color: 'bg-cyan-50 text-cyan-600',
  },
]

const benefits = [
  {
    icon: CalendarCheck,
    title: 'Flexible subscriptions',
    description: 'Choose your delivery days, quantities and start date. Change your plans whenever you need.',
  },
  {
    icon: Clock3,
    title: 'Skip whenever you want',
    description: 'Going out of town? Skip a delivery before the daily cutoff without any hassle.',
  },
  {
    icon: Truck,
    title: 'Reliable daily delivery',
    description: 'Know what is coming tomorrow and track your delivery with ease.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent billing',
    description: 'Pay only for what was delivered. View your delivery history and monthly invoices.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Choose your essentials',
    description: 'Browse local vendors and select the products you need every day.',
  },
  {
    number: '02',
    title: 'Set your schedule',
    description: 'Choose quantities, delivery days and your subscription start date.',
  },
  {
    number: '03',
    title: 'Relax and receive',
    description: 'Your daily essentials arrive at your doorstep. Manage everything in one place.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[#FAFCF9] text-[#17251D]">

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#E8EEE8] bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167A45] text-white">
              <ShoppingBasket size={23} />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Day<span className="text-[#167A45]">Basket</span>
            </span>
          </a>

          <div className="hidden items-center gap-9 text-sm font-medium text-gray-600 md:flex">
            <a href="#home" className="transition hover:text-[#167A45]">Home</a>
            <a href="#categories" className="transition hover:text-[#167A45]">Categories</a>
            <a href="#how-it-works" className="transition hover:text-[#167A45]">How it works</a>
            <a href="#benefits" className="transition hover:text-[#167A45]">Why DayBasket</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 sm:block">
              Log in
            </button>
            <button className="rounded-xl bg-[#167A45] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#106439]">
              Get started <ArrowUpRight className="ml-1 inline" size={15} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-[#E6F4E9] blur-3xl" />
          <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#F0F7E9] blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">

            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D9EBDD] bg-white px-4 py-2 text-sm font-medium text-[#167A45] shadow-sm">
                <Sparkles size={15} />
                Everyday essentials, simplified
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-[1.13] tracking-tight sm:text-6xl lg:text-[68px]">
                Your daily needs,
                <span className="block text-[#167A45]">one basket away.</span>
              </h1>

              <p className="mt-7 max-w-lg text-lg leading-8 text-gray-500">
                Say goodbye to daily ordering. Subscribe to your everyday
                essentials, customize your schedule and enjoy reliable
                doorstep delivery.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button className="rounded-xl bg-[#167A45] px-7 py-4 font-semibold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-[#106439]">
                  Explore subscriptions
                  <ArrowRight className="ml-2 inline" size={18} />
                </button>

                <button className="rounded-xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 transition hover:border-[#167A45] hover:text-[#167A45]">
                  Become a vendor
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Check className="text-[#167A45]" size={17} />
                  Flexible subscriptions
                </span>
                <span className="flex items-center gap-2">
                  <Check className="text-[#167A45]" size={17} />
                  Easy delivery skips
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute inset-8 rounded-full bg-[#E5F2E7] blur-2xl" />

              <div className="relative rounded-[32px] border border-[#E5ECE5] bg-white p-6 shadow-2xl shadow-green-900/5 sm:p-8">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Your daily essentials</p>
                    <h2 className="mt-1 text-xl font-bold">Tomorrow's basket</h2>
                  </div>
                  <div className="rounded-xl bg-[#EAF5ED] p-3 text-[#167A45]">
                    <ShoppingBasket size={24} />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-[#F8FAF7] p-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Milk size={29} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Fresh milk</h3>
                      <p className="mt-1 text-sm text-gray-400">2 litres · Daily</p>
                    </div>
                    <span className="font-bold">₹60</span>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-[#F8FAF7] p-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <Newspaper size={27} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Newspaper</h3>
                      <p className="mt-1 text-sm text-gray-400">1 copy · Daily</p>
                    </div>
                    <span className="font-bold">₹6</span>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-[#F8FAF7] p-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <Carrot size={29} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Fresh vegetables</h3>
                      <p className="mt-1 text-sm text-gray-400">Weekly subscription</p>
                    </div>
                    <span className="font-bold">₹80</span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#167A45] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-100">Next delivery</p>
                      <h3 className="mt-1 text-xl font-bold">Tomorrow morning</h3>
                    </div>
                    <Truck size={30} />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-green-100">
                    <MapPin size={15} />
                    Delivering to your doorstep
                  </div>
                </div>

                <div className="absolute -right-4 top-24 hidden items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:flex">
                  <div className="rounded-full bg-green-100 p-2 text-green-700">
                    <Check size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Subscription active</p>
                    <p className="text-[11px] text-gray-400">You're all set!</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="border-y border-[#E8EEE8] bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#167A45]">
                What you need, every day
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Your everyday essentials
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-500">
                Everything you regularly need, delivered on your schedule.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.name} className="group rounded-2xl border border-gray-100 bg-[#FAFCF9] p-6 transition hover:-translate-y-1 hover:border-[#B8DCC2] hover:shadow-xl hover:shadow-green-900/5">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color}`}>
                      <Icon size={27} />
                    </div>
                    <h3 className="mt-6 text-lg font-bold">{category.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {category.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#167A45]">
                      Explore <ArrowUpRight size={16} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#167A45]">
                Simple by design
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Three steps. That's all.
              </h2>
              <p className="mt-4 text-gray-500">
                Set it up once and let DayBasket handle the routine.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="relative rounded-2xl border border-[#E8EEE8] bg-white p-8">
                  <span className="text-5xl font-bold text-[#E4F0E6]">{step.number}</span>
                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="bg-[#F0F6F0] py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#167A45]">
                Less effort, more convenience
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                A smarter way to manage your everyday routine.
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-gray-500">
                Your schedule changes. Your needs change. Your subscription
                should be flexible enough to keep up.
              </p>
              <div className="mt-8 space-y-6">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon
                  return (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#167A45] shadow-sm">
                        <Icon size={21} />
                      </div>
                      <div>
                        <h3 className="font-bold">{benefit.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-500">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#167A45] p-8 text-white shadow-xl shadow-green-900/10 sm:p-12">
              <Leaf size={34} className="text-green-200" />
              <h2 className="mt-8 text-3xl font-bold leading-tight">
                Your mornings deserve to be simpler.
              </h2>
              <p className="mt-5 leading-7 text-green-100">
                Spend less time remembering orders and more time doing
                what matters. Let your essentials arrive automatically.
              </p>
              <button className="mt-9 rounded-xl bg-white px-6 py-3.5 font-semibold text-[#167A45] transition hover:bg-green-50">
                Start your journey <ArrowRight className="ml-2 inline" size={17} />
              </button>
              <div className="mt-12 flex flex-wrap gap-6 border-t border-white/20 pt-7 text-sm text-green-100">
                <span className="flex items-center gap-2"><Check size={16} /> Flexible plans</span>
                <span className="flex items-center gap-2"><Check size={16} /> Easy skips</span>
                <span className="flex items-center gap-2"><Check size={16} /> Clear billing</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#14251B] px-6 py-12 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 sm:flex-row">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#167A45]">
                  <ShoppingBasket size={22} />
                </div>
                <span className="text-2xl font-bold">
                  DayBasket
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                Making everyday essentials easier through smart subscriptions
                and reliable local deliveries.
              </p>
            </div>

            <div className="flex gap-12 text-sm">
              <div>
                <h3 className="font-bold">Explore</h3>
                <div className="mt-4 space-y-3 text-gray-400">
                  <p><a href="#categories" className="hover:text-white">Categories</a></p>
                  <p><a href="#how-it-works" className="hover:text-white">How it works</a></p>
                  <p><a href="#benefits" className="hover:text-white">Benefits</a></p>
                </div>
              </div>
              <div>
                <h3 className="font-bold">Account</h3>
                <div className="mt-4 space-y-3 text-gray-400">
                  <p><a href="#home" className="hover:text-white">Customer login</a></p>
                  <p><a href="#home" className="hover:text-white">Vendor login</a></p>
                  <p><a href="#home" className="hover:text-white">Register</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} DayBasket. Built for simpler everyday living.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
