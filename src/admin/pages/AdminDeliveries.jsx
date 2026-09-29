import { useEffect, useState } from 'react';

const STATUSES = [
  'Pending',
  'Confirmed',
  'Processing',
  'Out for Delivery',
  'Delivered',
  'Completed',
  'Cancelled',
];

function readUserOrders() {
  try {
    const value = JSON.parse(localStorage.getItem('userOrders') || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function getCustomer(order) {
  return (
    order.username ||
    order.userName ||
    order.customerName ||
    order.name ||
    '—'
  );
}

function getEmail(order) {
  return order.email || order.userEmail || order.customerEmail || '—';
}

function getAddress(order) {
  return (
    order.address ||
    order.shippingAddress ||
    order.location ||
    order.deliveryAddress ||
    '—'
  );
}

function getItems(order) {
  if (!Array.isArray(order.items)) return '—';

  return order.items
    .map((item) => item.title || item.name || 'Product')
    .join(', ');
}

function getTotal(order) {
  const savedTotal = Number(order.totalAmount ?? order.total ?? order.amount);

  if (Number.isFinite(savedTotal) && savedTotal > 0) {
    return savedTotal;
  }

  if (!Array.isArray(order.items)) return 0;

  return order.items.reduce((sum, item) => {
    const price = Number(String(item.price || 0).replace(/[^0-9.]/g, ''));
    const quantity = Number(item.quantity || 1);
    return sum + (Number.isFinite(price) ? price * quantity : 0);
  }, 0);
}

export default function AdminDeliveries() {
  const [orders, setOrders] = useState(readUserOrders);

  useEffect(() => {
    function syncOrders() {
      setOrders(readUserOrders());
    }

    window.addEventListener('userOrdersUpdated', syncOrders);
    window.addEventListener('storage', syncOrders);

    return () => {
      window.removeEventListener('userOrdersUpdated', syncOrders);
      window.removeEventListener('storage', syncOrders);
    };
  }, []);

  function updateStatus(orderId, status) {
    const updatedOrders = readUserOrders().map((order) =>
      String(order.orderId) === String(orderId)
        ? { ...order, status }
        : order
    );

    localStorage.setItem('userOrders', JSON.stringify(updatedOrders));
    setOrders(updatedOrders);

    // Same-tab pages ko bhi updated order status batata hai.
    window.dispatchEvent(new Event('userOrdersUpdated'));
  }

  return (
    <>
      <header className="mb-8">
        <p className="text-sm text-gray-400">
          Customer Checkout
        </p>
        <h2 className="mt-1 text-3xl font-bold">Deliveries &amp; Orders</h2>
        <p className="mt-2 text-sm text-gray-400">
          Total orders: {orders.length}
        </p>
      </header>

      <section className="overflow-hidden rounded-xl border border-white/10 bg-[#212328]">
        {orders.length === 0 ? (
          <p className="p-8 text-center text-gray-400">
            Empty
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead className="bg-white/5 text-gray-300">
                <tr>
                  <th className="px-4 py-4">Order ID / Date</th>
                  <th className="px-4 py-4">Username</th>
                  <th className="px-4 py-4">Email</th>
                  <th className="px-4 py-4">Address</th>
                  <th className="px-4 py-4">Items</th>
                  <th className="px-4 py-4">Price</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={order.orderId || index}
                    className="border-t border-white/10 align-top"
                  >
                    <td className="px-4 py-4">
                      <div>{order.orderId || `Order ${index + 1}`}</div>
                      <div className="mt-1 text-xs text-gray-400">
                        {order.date || '—'}
                      </div>
                    </td>
                    <td className="px-4 py-4">{getCustomer(order)}</td>
                    <td className="px-4 py-4">{getEmail(order)}</td>
                    <td className="max-w-[220px] whitespace-normal px-4 py-4">
                      {getAddress(order)}
                    </td>
                    <td className="max-w-[220px] whitespace-normal px-4 py-4">
                      {getItems(order)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      ${getTotal(order).toFixed(2)}
                    </td>
                    <td className="px-4 py-4">
                      <select
                        aria-label={`Status for ${order.orderId || 'order'}`}
                        value={order.status || 'Pending'}
                        onChange={(event) =>
                          updateStatus(
                            order.orderId,
                            event.target.value
                          )
                        }
                        className="rounded-lg border border-white/10 bg-[#17191d] px-3 py-2 text-white"
                      >
                        {STATUSES.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}