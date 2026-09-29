import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaBox,
  FaCheckCircle,
  FaClock,
  FaFacebookSquare,
  FaInstagramSquare,
  FaKey,
  FaMoneyBillWave,
  FaRedo,
  FaSearch,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import nav2 from '../assets/nav.png';
import lastimg from '../assets/last.jpeg';

function readUserOrders() {
  try {
    const saved = JSON.parse(localStorage.getItem('userOrders') || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function parsePrice(value) {
  const parsed = Number(String(value ?? '').replace(/[^0-9.-]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
}

function getOrderTotal(order) {
  const savedTotal = parsePrice(
    order.totalAmount ?? order.total ?? order.amount
  );

  if (savedTotal > 0) {
    return savedTotal;
  }

  if (!Array.isArray(order.items)) {
    return parsePrice(order.items?.price);
  }

  return order.items.reduce((sum, item) => {
    const price = parsePrice(item?.price);
    const quantity = Math.max(1, Number(item?.quantity) || 1);
    return sum + price * quantity;
  }, 0);
}

function getStatusClass(status) {
  switch (status) {
    case 'Delivered':
    case 'Completed':
      return 'text-green-400';
    case 'Cancelled':
      return 'text-red-400';
    case 'Out for Delivery':
      return 'text-blue-400';
    case 'Processing':
      return 'text-yellow-400';
    case 'Confirmed':
      return 'text-emerald-400';
    default:
      return 'text-orange-400';
  }
}

export default function MyOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState(readUserOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTab, setFilterTab] = useState('all');

  useEffect(() => {
    function syncOrders() {
      setOrders(readUserOrders());
    }

    // Admin same-tab status updates ke liye custom event.
    window.addEventListener('userOrdersUpdated', syncOrders);

    // Doosre browser tab se localStorage update ho to refresh.
    function handleStorage(event) {
      if (event.key === 'userOrders') {
        syncOrders();
      }
    }

    window.addEventListener('storage', handleStorage);
    syncOrders();

    return () => {
      window.removeEventListener('userOrdersUpdated', syncOrders);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const totalOrders = orders.length;

  const completedOrders = orders.filter((order) =>
    ['Completed', 'Delivered', 'Confirmed'].includes(order.status)
  ).length;

  const processingOrders = orders.filter((order) =>
    ['Pending', 'Processing', 'Out for Delivery'].includes(order.status)
  ).length;

  const totalSpent = orders
    .reduce((sum, order) => sum + getOrderTotal(order), 0)
    .toFixed(2);

  const filteredOrders = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    const matchingOrders = orders.filter((order) => {
      const firstItem = Array.isArray(order.items) ? order.items[0] : order.items;
      const searchableText = [
        order.orderId,
        order.location,
        order.address,
        order.deliveryAddress,
        order.email,
        order.username,
        firstItem?.title,
        firstItem?.name,
        order.status,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchableText.includes(search);
    });

    // "Recent" tab newest five orders dikhata hai.
    return filterTab === 'recent'
      ? matchingOrders.slice(0, 5)
      : matchingOrders;
  }, [orders, searchTerm, filterTab]);

  return (
    <div className="flex min-h-screen w-full flex-col justify-between bg-[rgba(45,50,56,1)] text-white">
      <main className="w-full px-4 pb-12 pt-6 sm:p-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <header className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">My Orders</h1>
              <p className="mt-1 text-xs text-gray-400">
                View your purchases and delivery status
              </p>
            </div>

            <div className="flex w-full items-center gap-3 md:w-auto">
              <div className="relative w-full md:w-64">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FaSearch />
                </span>
                <input
                  type="search"
                  placeholder="Search orders..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="w-full rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] py-2 pl-10 pr-4 text-xs text-white outline-none focus:border-orange-500"
                />
              </div>

              <select
                value={filterTab}
                onChange={(event) => setFilterTab(event.target.value)}
                aria-label="Filter orders"
                className="cursor-pointer rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] px-3 py-2 text-xs text-white outline-none"
              >
                <option value="all">All Orders</option>
                <option value="recent">Recent</option>
              </select>
            </div>
          </header>

          <section
            aria-label="Order summary"
            className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-4 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/40 bg-blue-500/20 text-base text-blue-400">
                <FaBox />
              </div>
              <div>
                <span className="block text-[11px] text-gray-400">Total Orders</span>
                <span className="text-lg font-bold">{totalOrders}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-4 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/40 bg-green-500/20 text-base text-green-400">
                <FaCheckCircle />
              </div>
              <div>
                <span className="block text-[11px] text-gray-400">Completed</span>
                <span className="text-lg font-bold">{completedOrders}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-4 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-yellow-500/40 bg-yellow-500/20 text-base text-yellow-400">
                <FaClock />
              </div>
              <div>
                <span className="block text-[11px] text-gray-400">In Progress</span>
                <span className="text-lg font-bold">{processingOrders}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-4 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/40 bg-purple-500/20 text-base text-purple-400">
                <FaMoneyBillWave />
              </div>
              <div>
                <span className="block text-[11px] text-gray-400">Total Spent</span>
                <span className="text-lg font-bold">${totalSpent}</span>
              </div>
            </div>
          </section>

          <section aria-label="Your orders" className="flex flex-col gap-4">
            {filteredOrders.length === 0 ? (
              <div className="rounded-2xl border border-gray-700 bg-[rgba(35,40,46,1)] p-12 text-center text-gray-400">
                No orders found.
                <Link to="/" className="ml-1 text-orange-500 underline">
                  Shop now
                </Link>
              </div>
            ) : (
              filteredOrders.map((order, index) => {
                const product = Array.isArray(order.items)
                  ? order.items[0] || {}
                  : order.items || {};

                const status = order.status || 'Pending';
                const orderKey = order.orderId || `order-${index}`;
                const address =
                  order.location ||
                  order.address ||
                  order.deliveryAddress ||
                  '';

                return (
                  <article
                    key={orderKey}
                    className="flex flex-col gap-3 rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-5 shadow-xl"
                  >
                    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                      <div className="flex min-w-0 items-center gap-4">
                        <img
                          src={product.image || lastimg}
                          alt={product.title || product.name || 'Order product'}
                          className="h-14 w-16 shrink-0 rounded-lg border border-gray-700 bg-gray-800 object-cover"
                        />

                        <div className="min-w-0">
                          <h2 className="truncate text-sm font-bold text-white">
                            {product.title || product.name || 'Game Product'}
                          </h2>

                          <p className="mt-1 text-xs text-gray-400">
                            Order ID: {order.orderId || '—'}
                            <span className="mx-2">•</span>
                            Status:{' '}
                            <span className={`font-semibold ${getStatusClass(status)}`}>
                              {status}
                            </span>
                          </p>

                          <span className="mt-1 block text-[11px] text-gray-500">
                            {order.date || order.createdAt || ''}
                          </span>
                        </div>
                      </div>

                      <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:items-end">
                        <span className="text-base font-bold text-white">
                          ${getOrderTotal(order).toFixed(2)}
                        </span>

                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              window.alert('License key details are not available.')
                            }
                            className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow hover:opacity-90"
                          >
                            <FaKey className="text-[10px]" />
                            View Key
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              navigate('/BuyNow', {
                                state: {
                                  name: product.title || product.name,
                                  price: product.price,
                                  image: product.image,
                                },
                              })
                            }
                            className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-gray-600 bg-gray-800 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-gray-700"
                          >
                            <FaRedo className="text-[10px]" />
                            Order Again
                          </button>
                        </div>
                      </div>
                    </div>

                    {(address || order.email || order.username || order.userName) && (
                      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-700/60 pt-3 text-xs text-gray-400">
                        {(order.username || order.userName) && (
                          <span>
                            Username:{' '}
                            <strong className="text-gray-200">
                              {order.username || order.userName}
                            </strong>
                          </span>
                        )}

                        {order.email && (
                          <span>
                            Email:{' '}
                            <strong className="text-gray-200">{order.email}</strong>
                          </span>
                        )}

                        {address && (
                          <span>
                            Delivery address:{' '}
                            <strong className="text-gray-200">{address}</strong>
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex flex-col items-start justify-between gap-2 border-t border-gray-700/60 pt-3 text-xs text-gray-400 sm:flex-row sm:items-center">
                      <div className="flex flex-wrap gap-4">
                        <span>
                          Platform: <strong className="text-gray-200">{order.platform || 'Steam'}</strong>
                        </span>
                        <span>
                          Region: <strong className="text-gray-200">{order.region || 'Global'}</strong>
                        </span>
                        <span>
                          Delivery:{' '}
                          <strong className={getStatusClass(status)}>{status}</strong>
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => navigate('/OrderDetails', { state: { order } })}
                        className="ml-auto cursor-pointer border-none bg-transparent text-xs font-semibold text-orange-400 hover:underline"
                      >
                        View Details &gt;
                      </button>
                    </div>
                  </article>
                );
              })
            )}
          </section>
        </div>
      </main>

      <footer>
        <section
          className="flex h-fit w-full justify-center border-b-2 border-[rgba(255,105,22,1)] bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${lastimg})` }}
        >
          <div className="flex h-fit w-[85%] justify-between py-6 max-[1024px]:flex-col">
            <div className="h-80 w-[40%] pt-10 max-[1024px]:w-[80%] max-[523px]:w-full">
              <img src={nav2} alt="eGame Store" className="w-50" />
              <p className="cursor-pointer text-justify text-white">
                Step into the future of gaming with eGame Store. Explore top-tier
                reviews, news, and in-depth analysis on the latest and greatest
                games. Join the gaming community now to get exclusive content
                and features.
              </p>

              <div className="mt-4 flex gap-8 text-[30px]" aria-label="Social media">
                <FaFacebookSquare className="text-blue-500" />
                <FaInstagramSquare className="text-[rgba(221,42,123)]" />
                <FaSquareXTwitter className="text-white" />
                <IoLogoYoutube className="text-red-500" />
              </div>
            </div>

            <div className="flex w-[55%] max-[1024px]:grid max-[1024px]:grid-cols-2 max-[1024px]:w-full max-[523px]:grid-cols-1">
              <div className="w-[25%] pt-10 max-[1024px]:w-[50%]">
                <ul className="leading-8 text-white">
                  <li className="text-[20px] font-bold text-[rgba(255,105,22,1)]">
                    Quick Links
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/GiftCards">Gift Cards</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/Deals">Deals</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/Blog">Blog</Link>
                  </li>
                </ul>
              </div>

              <div className="w-[25%] pt-10 max-[1024px]:w-[50%]">
                <ul className="leading-8 text-white">
                  <li className="text-[20px] font-bold text-[rgba(255,105,22,1)]">
                    Resources
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/Trendinggames">Trending Games</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/Upcoming">Upcoming Games</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/Contactus">Contact us</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/FAQ">FAQ</Link>
                  </li>
                </ul>
              </div>

              <div className="w-[25%] pt-10 max-[1024px]:w-[50%]">
                <ul className="leading-8 text-white">
                  <li className="text-[20px] font-bold text-[rgba(255,105,22,1)]">
                    Explore
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/Pcgames">PC Games</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/PlayStation">PlayStations</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/Nintendo">Nintendo</Link>
                  </li>
                  <li className="cursor-pointer hover:text-[rgba(255,105,22,1)]">
                    <Link to="/Xbox">Xbox</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className="h-20 w-full bg-cover bg-no-repeat pt-5 text-center"
          style={{ backgroundImage: `url(${lastimg})` }}
        >
          <p className="text-sm text-white">
            © 2026 EGameStore.com — All Rights{' '}
            <span className="cursor-pointer underline">
              Terms of Service, Privacy Policy
            </span>
          </p>
        </section>
      </footer>
    </div>
  );
}