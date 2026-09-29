import { useEffect, useMemo, useState } from 'react';

function readArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function firstValue(...values) {
  return values.find(
    (value) => value !== undefined && value !== null && String(value).trim()
  );
}

function getEmail(record = {}) {
  return String(
    firstValue(
      record.email,
      record.userEmail,
      record.customerEmail,
      record.user?.email,
      record.customer?.email,
      ''
    )
  ).trim().toLowerCase();
}

function getName(customer = {}) {
  return firstValue(
    customer.name,
    customer.username,
    customer.userName,
    customer.fullName,
    customer.user?.name,
    customer.user?.username,
    '—'
  );
}

function getAddress(order = {}) {
  const address =
    order.deliveryAddress ||
    order.shippingAddress ||
    order.address ||
    order.location ||
    order.shipping?.address ||
    order.shipping?.fullAddress ||
    order.customer?.address ||
    order.user?.address;

  if (typeof address === 'string') return address;

  if (address && typeof address === 'object') {
    return [
      address.fullAddress,
      address.addressLine1,
      address.addressLine2,
      address.street,
      address.city,
      address.state,
      address.postalCode,
      address.zip,
      address.country,
    ]
      .filter(Boolean)
      .join(', ');
  }

  return '';
}

export default function AdminCustomers() {
  const [customers, setCustomers] = useState(() =>
    readArray('users_database')
  );
  const [orders, setOrders] = useState(() => readArray('userOrders'));
  const [search, setSearch] = useState('');

  useEffect(() => {
    function refresh() {
      setCustomers(readArray('users_database'));
      setOrders(readArray('userOrders'));
    }

    function handleStorage(event) {
      if (
        !event.key ||
        event.key === 'users_database' ||
        event.key === 'userOrders'
      ) {
        refresh();
      }
    }

    window.addEventListener('storage', handleStorage);
    window.addEventListener('usersDatabaseUpdated', refresh);
    window.addEventListener('userOrdersUpdated', refresh);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('usersDatabaseUpdated', refresh);
      window.removeEventListener('userOrdersUpdated', refresh);
    };
  }, []);

  const customerRows = useMemo(() => {
    return customers.map((customer) => {
      const email = getEmail(customer);
      const customerOrders = orders.filter(
        (order) => email && getEmail(order) === email
      );
      const latestOrder = customerOrders[customerOrders.length - 1];

      return {
        customer,
        email,
        name: getName(customer),
        phone: firstValue(
          customer.phone,
          customer.rawPhone,
          customer.mobile,
          customer.user?.phone,
          '—'
        ),
        dob: firstValue(customer.dob, customer.dateOfBirth, '—'),
        address: latestOrder ? getAddress(latestOrder) : '',
        orderCount: customerOrders.length,
        latestStatus: latestOrder?.status || '—',
      };
    });
  }, [customers, orders]);

  const filteredCustomers = customerRows.filter((row) => {
    const text = [
      row.name,
      row.email,
      row.phone,
      row.dob,
      row.address,
      row.latestStatus,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return text.includes(search.trim().toLowerCase());
  });

  return (
    <main className="text-white">
      <header className="mb-6">
        <p className="text-sm text-gray-400">Registered store accounts</p>
        <h1 className="mt-1 text-3xl font-bold">Customers</h1>
      </header>

      <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-gray-400">
          Registered customers: {customers.length}
        </p>

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search name, email, phone, address..."
          className="rounded-lg border border-white/10 bg-[#212328] px-4 py-3 text-sm text-white outline-none focus:border-orange-500"
        />
      </div>

      <section className="overflow-x-auto rounded-xl border border-white/10 bg-[#212328]">
        {filteredCustomers.length === 0 ? (
          <p className="p-8 text-center text-gray-400">
            Koi registered customer nahi mila.
          </p>
        ) : (
          <table className="w-full min-w-[1050px] text-left text-sm">
            <thead className="text-gray-400">
              <tr>
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">Email</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Date of birth</th>
                <th className="px-5 py-4">Order address</th>
                <th className="px-5 py-4">Orders</th>
                <th className="px-5 py-4">Latest status</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((row, index) => (
                <tr
                  key={row.email || row.customer.phone || index}
                  className="border-t border-white/10 align-top"
                >
                  <td className="px-5 py-4">{row.name}</td>
                  <td className="px-5 py-4">{row.email || '—'}</td>
                  <td className="px-5 py-4">{row.phone}</td>
                  <td className="px-5 py-4">{row.dob}</td>
                  <td className="max-w-xs whitespace-normal px-5 py-4">
                    {row.address || 'Order address not saved'}
                  </td>
                  <td className="px-5 py-4">{row.orderCount}</td>
                  <td className="px-5 py-4">{row.latestStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}