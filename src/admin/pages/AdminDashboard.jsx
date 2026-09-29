import { useEffect, useState } from 'react';

function readList(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function getStatus(order) {
  return String(order.status || 'Pending').toLowerCase();
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState(() => readList('userOrders'));
  const [products, setProducts] = useState(() => readList('adminProducts'));

  useEffect(() => {
    function refresh() {
      setOrders(readList('userOrders'));
      setProducts(readList('adminProducts'));
    }

    function handleStorage(event) {
      if (['userOrders', 'adminProducts'].includes(event.key)) refresh();
    }

    window.addEventListener('storage', handleStorage);
    window.addEventListener('userOrdersUpdated', refresh);
    window.addEventListener('adminProductsUpdated', refresh);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('userOrdersUpdated', refresh);
      window.removeEventListener('adminProductsUpdated', refresh);
    };
  }, []);

  const pending = orders.filter((order) =>
    ['pending', 'confirmed', 'processing', 'out for delivery'].includes(
      getStatus(order)
    )
  ).length;

  const delivered = orders.filter((order) =>
    ['delivered', 'completed'].includes(getStatus(order))
  ).length;

  const cancelled = orders.filter(
    (order) => getStatus(order) === 'cancelled'
  ).length;

  const stats = [
    { label: 'All orders', value: orders.length },
    { label: 'Pending / processing', value: pending },
    { label: 'Delivered', value: delivered },
    { label: 'Products', value: products.length },
    { label: 'Customers', value: readList('users_database').length },
    { label: 'Cancelled', value: cancelled },
  ];

  return (
    <main className="text-white">
      <header className="mb-8">
        <p className="text-sm text-gray-400">Store overview</p>
        <h1 className="mt-1 text-3xl font-bold">Dashboard</h1>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-xl border border-white/10 bg-[#212328] p-5"
          >
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="mt-3 text-3xl font-bold">{stat.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#212328]">
        <h2 className="border-b border-white/10 px-5 py-4 font-semibold">
          Recent orders
        </h2>

        {orders.length === 0 ? (
          <p className="p-6 text-sm text-gray-400">Abhi koi order nahi hai.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="text-gray-400">
                <tr>
                  <th className="px-5 py-3">Order ID</th>
                  <th className="px-5 py-3">Customer</th>
                  <th className="px-5 py-3">Total</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[...orders].reverse().slice(0, 8).map((order, index) => (
                  <tr
                    key={order.orderId || order.id || index}
                    className="border-t border-white/10"
                  >
                    <td className="px-5 py-3">
                      {order.orderId || order.id || '—'}
                    </td>
                    <td className="px-5 py-3">
                      {order.username || order.userName || order.name || '—'}
                    </td>
                    <td className="px-5 py-3">
                      ${Number(order.totalAmount ?? order.total ?? order.amount ?? 0).toFixed(2)}
                    </td>
                    <td className="px-5 py-3">{order.status || 'Pending'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}