import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { BsCreditCardFill } from 'react-icons/bs';
import nav2 from '../assets/nav.png';
import lastimg from '../assets/last.jpeg';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';

const ORDER_STEPS = [
  {
    status: 'Pending',
    title: 'Order Placed',
    description: 'Order received and awaiting confirmation',
  },
  {
    status: 'Confirmed',
    title: 'Order Confirmed',
    description: 'Your order has been confirmed',
  },
  {
    status: 'Processing',
    title: 'Processing',
    description: 'Store is preparing your order',
  },
  {
    status: 'Out for Delivery',
    title: 'Out for Delivery',
    description: 'Your order is on its way',
  },
  {
    status: 'Delivered',
    title: 'Delivered',
    description: 'Order successfully delivered',
  },
];

function readOrders() {
  try {
    const saved = JSON.parse(localStorage.getItem('userOrders') || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveOrders(orders) {
  localStorage.setItem('userOrders', JSON.stringify(orders));
  window.dispatchEvent(new Event('userOrdersUpdated'));
}

function getInitialOrder(routeOrder) {
  const orders = readOrders();

  if (routeOrder?.orderId) {
    const savedOrder = orders.find(
      (item) => String(item.orderId) === String(routeOrder.orderId)
    );

    if (savedOrder) return savedOrder;
  }

  return (
    routeOrder ||
    orders[0] || {
      orderId: '',
      location: '',
      paymentMethod: '',
      date: '',
      status: 'Pending',
      items: [],
    }
  );
}

function normalizeStatus(status) {
  if (status === 'Completed') return 'Delivered';

  const knownStatus = ORDER_STEPS.find((step) => step.status === status);
  return knownStatus ? knownStatus.status : 'Pending';
}

function getStatusBadgeClass(status) {
  if (status === 'Cancelled') return 'bg-red-600 text-white';
  if (status === 'Delivered' || status === 'Completed') {
    return 'bg-green-600 text-white';
  }
  return 'bg-orange-500 text-white';
}

export default function OrderDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const [order, setOrder] = useState(() =>
    getInitialOrder(location.state?.order)
  );
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');
  const [showInvoiceMsg, setShowInvoiceMsg] = useState(false);

  const cancelReasons = [
    'Changed my mind',
    'Found a better price elsewhere',
    'Ordered by mistake',
    'Shipping time is too long',
    'Incorrect delivery address',
  ];

  useEffect(() => {
    function syncOrder() {
      if (!order.orderId) return;

      const latestOrder = readOrders().find(
        (savedOrder) =>
          String(savedOrder.orderId) === String(order.orderId)
      );

      if (latestOrder) setOrder(latestOrder);
    }

    window.addEventListener('userOrdersUpdated', syncOrder);

    function handleStorage(event) {
      if (event.key === 'userOrders') syncOrder();
    }

    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('userOrdersUpdated', syncOrder);
      window.removeEventListener('storage', handleStorage);
    };
  }, [order.orderId]);

  function handleCancelOrderSubmit() {
    if (!selectedReason) {
      window.alert('Kripya cancellation reason select karein.');
      return;
    }

    const updatedOrder = {
      ...order,
      status: 'Cancelled',
      cancelReason: selectedReason,
      items: Array.isArray(order.items)
        ? order.items.map((item) => ({
            ...item,
            status: 'Cancelled',
          }))
        : [],
    };

    const savedOrders = readOrders();
    const orderIndex = savedOrders.findIndex(
      (savedOrder) =>
        String(savedOrder.orderId) === String(order.orderId)
    );

    if (orderIndex !== -1) {
      savedOrders[orderIndex] = updatedOrder;
      saveOrders(savedOrders);
    }

    setOrder(updatedOrder);
    setIsCancelModalOpen(false);
  }

  function handleDownloadInvoice() {
    setShowInvoiceMsg(true);
    window.setTimeout(() => setShowInvoiceMsg(false), 3000);
  }

  const items = Array.isArray(order.items) ? order.items : [];
  const currentStatus = order.status || 'Pending';
  const normalizedStatus = normalizeStatus(currentStatus);
  const activeStepIndex = ORDER_STEPS.findIndex(
    (step) => step.status === normalizedStatus
  );
  const canCancel =
    currentStatus !== 'Cancelled' &&
    currentStatus !== 'Delivered' &&
    currentStatus !== 'Completed';

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between bg-[rgba(45,50,56,1)] text-white">
      {showInvoiceMsg && (
        <div
          role="status"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        >
          <div className="rounded-xl border border-[rgba(255,105,22,1)] bg-[rgba(35,40,46,1)] px-8 py-4 text-center shadow-2xl">
            <p className="text-sm font-bold text-white">
              Invoice sent to your mail
            </p>
          </div>
        </div>
      )}

      {isCancelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl border border-gray-700 bg-[rgba(35,40,46,1)] p-6 shadow-2xl">
            <h3 className="mb-4 text-lg font-bold text-orange-500">
              Select Reason for Cancellation
            </h3>

            <div className="mb-6 flex flex-col gap-3">
              {cancelReasons.map((reason) => (
                <label
                  key={reason}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-700 bg-[rgba(45,50,56,1)] p-3 text-sm text-gray-300 hover:border-orange-500"
                >
                  <input
                    type="radio"
                    name="cancelReason"
                    value={reason}
                    checked={selectedReason === reason}
                    onChange={(event) => setSelectedReason(event.target.value)}
                    className="accent-orange-500"
                  />
                  {reason}
                </label>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCancelModalOpen(false)}
                className="cursor-pointer rounded-lg bg-gray-700 px-4 py-2 text-xs font-semibold text-white"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleCancelOrderSubmit}
                className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700"
              >
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="w-full px-6 pb-12 pt-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={() => navigate('/MyOrders')}
            className="mb-6 flex cursor-pointer items-center gap-2 border-none bg-transparent text-sm font-semibold text-[rgba(255,105,22,1)] hover:underline"
          >
            ← Back to my orders
          </button>

          <section className="mb-8 rounded-2xl border border-gray-700 bg-[rgba(35,40,46,1)] p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-gray-700 pb-4">
              <h1 className="text-xl font-bold text-orange-500">
                Order Summary
              </h1>
              <span
                className={`rounded-full px-4 py-1.5 text-xs font-bold shadow ${getStatusBadgeClass(currentStatus)}`}
              >
                {currentStatus}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex flex-col rounded-xl border border-gray-700 bg-[rgba(45,50,56,1)] p-4">
                <span className="mb-1 text-xs text-gray-400">Order ID</span>
                <span className="text-base font-bold text-orange-400">
                  {order.orderId || '—'}
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-700 bg-[rgba(45,50,56,1)] p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-600 bg-gray-800">
                  <MdLocationPin className="text-lg text-orange-400" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="text-[10px] text-gray-400">
                    Delivery Location
                  </span>
                  <span className="break-words text-xs font-semibold text-white">
                    {order.location || order.address || order.deliveryAddress || '—'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-700 bg-[rgba(45,50,56,1)] p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-600 bg-gray-800">
                  <BsCreditCardFill className="text-sm text-orange-400" />
                </div>
                <div className="flex min-w-0 flex-col">
                  <span className="text-[10px] text-gray-400">
                    Payment Method
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {order.paymentMethod || '—'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3 border-t border-gray-700 pt-4">
              {canCancel && (
                <button
                  type="button"
                  onClick={() => setIsCancelModalOpen(true)}
                  className="cursor-pointer rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700"
                >
                  ✕ Cancel Order
                </button>
              )}

              <button
                type="button"
                onClick={handleDownloadInvoice}
                className="cursor-pointer rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-xs font-semibold text-gray-300 hover:bg-gray-700"
              >
                📥 Download Invoice
              </button>
            </div>
          </section>

          <div className="flex flex-col gap-8 lg:flex-row">
            <section className="flex w-full flex-col gap-4 lg:w-[65%]">
              <h2 className="mb-2 text-lg font-bold text-orange-500">
                Order Items
              </h2>

              {items.length === 0 ? (
                <div className="rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-6 text-sm text-gray-400">
                  Is order mein item details available nahi hain.
                </div>
              ) : (
                items.map((product, index) => (
                  <article
                    key={product.orderNo || `${product.title || product.name || 'item'}-${index}`}
                    className="flex items-center justify-between gap-4 rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-4 shadow-lg"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.title || product.name || 'Order item'}
                          className="h-16 w-20 shrink-0 rounded-lg border border-gray-700 bg-gray-800 object-cover"
                        />
                      )}

                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-white">
                          {product.title || product.name || 'Product'}
                        </h3>
                        <p className="mt-1 text-xs text-gray-400">
                          {product.orderNo || order.orderId || 'Order item'}
                          {' • '}
                          <span
                            className={
                              currentStatus === 'Cancelled'
                                ? 'font-medium text-red-500'
                                : currentStatus === 'Delivered' ||
                                    currentStatus === 'Completed'
                                  ? 'font-medium text-green-400'
                                  : 'font-medium text-yellow-500'
                            }
                          >
                            {currentStatus}
                          </span>
                        </p>
                        <span className="mt-0.5 block text-[11px] text-gray-500">
                          {order.date || order.createdAt || ''}
                        </span>
                      </div>
                    </div>

                    <span className="whitespace-nowrap text-sm font-bold text-white">
                      ${String(product.price ?? '0').replace(/^\$/, '')}
                    </span>
                  </article>
                ))
              )}
            </section>

            <aside className="w-full lg:w-[35%]">
              <div className="sticky top-6 rounded-2xl border border-gray-700 bg-[rgba(35,40,46,1)] p-6 shadow-xl">
                <h2 className="mb-4 border-b border-gray-700 pb-2 text-lg font-bold text-orange-500">
                  Order Progress
                </h2>

                {currentStatus === 'Cancelled' ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-red-500 bg-red-500/20 text-2xl text-red-500">
                      <FaTimesCircle />
                    </div>
                    <h3 className="text-lg font-bold text-red-500">
                      Order Cancelled
                    </h3>
                    <p className="text-xs text-gray-400">
                      This order has been cancelled.
                    </p>
                    {order.cancelReason && (
                      <p className="text-xs text-gray-400">
                        Reason: {order.cancelReason}
                      </p>
                    )}
                  </div>
                ) : (
                  <>
                    <p className="mb-4 block text-xs font-medium text-gray-400">
                      Current status: {currentStatus}
                    </p>

                    <div className="relative flex flex-col gap-5 before:absolute before:bottom-2 before:left-3.5 before:top-2 before:w-0.5 before:bg-gray-700">
                      {ORDER_STEPS.map((step, index) => {
                        const isComplete = index < activeStepIndex;
                        const isCurrent = index === activeStepIndex;
                        const isActive = isComplete || isCurrent;

                        return (
                          <div
                            key={step.status}
                            className="relative flex items-start gap-3"
                          >
                            <div
                              className={`z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                                isComplete
                                  ? 'border-green-500 bg-green-500/20 text-green-500'
                                  : isCurrent
                                    ? 'border-orange-500 bg-orange-500/20 text-orange-400'
                                    : 'border-gray-600 bg-gray-800 text-gray-500'
                              }`}
                            >
                              {isComplete ? (
                                <FaCheckCircle className="text-sm" />
                              ) : (
                                <span className="h-2 w-2 rounded-full bg-current" />
                              )}
                            </div>

                            <div className="flex w-full items-start justify-between gap-2">
                              <div>
                                <h3
                                  className={`text-sm font-bold ${
                                    isActive ? 'text-white' : 'text-gray-500'
                                  }`}
                                >
                                  {step.title}
                                </h3>
                                <p
                                  className={`text-[11px] ${
                                    isActive ? 'text-gray-400' : 'text-gray-600'
                                  }`}
                                >
                                  {step.description}
                                </p>
                                {isCurrent && order.date && (
                                  <span className="mt-1 block text-[10px] text-gray-500">
                                    {order.date}
                                  </span>
                                )}
                              </div>

                              {isCurrent && (
                                <span className="rounded bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
                                  CURRENT
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer>
        <section
          className="mt-12 flex h-fit w-full justify-center border-y-2 border-[rgba(255,105,22,1)] bg-cover bg-no-repeat"
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