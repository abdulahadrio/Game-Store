import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { path: 'dashboard', label: 'Dashboard' },
  { path: 'deliveries', label: 'Deliveries & Orders' },
  { path: 'products', label: 'Products' },
  { path: 'customers', label: 'Customers' },
  { path: 'settings', label: 'Settings' },
];

export default function AdminLayout({ basePath, onLogout, children }) {
  return (
    <div className="min-h-screen bg-[#17191d] text-white md:flex">
      <aside className="flex w-full flex-col justify-between border-b border-white/10 bg-[#212328] p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
            Game Store
          </p>
          <h1 className="mb-8 mt-1 text-xl font-bold">Admin Panel</h1>

          <nav aria-label="Admin navigation" className="grid gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={`${basePath}/${item.path}`}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm transition ${
                    isActive
                      ? 'bg-orange-500/15 font-semibold text-orange-400'
                      : 'text-gray-300 hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="mt-5 rounded-lg border border-white/10 px-4 py-3 text-left text-sm text-gray-300 hover:bg-white/5"
        >
          Sign out
        </button>
      </aside>

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-10">
        {children}
      </main>
    </div>
  );
}