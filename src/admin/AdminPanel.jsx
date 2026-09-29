import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminDeliveries from './pages/AdminDeliveries';
import AdminProducts from './pages/AdminProducts';
import AdminCustomers from './pages/AdminCustomers';
import AdminSettings from './pages/AdminSettings';

export default function AdminPanel() {
  const location = useLocation();
  const navigate = useNavigate();

  const isDotAdmin = location.pathname.toLowerCase().startsWith('/.admin');
  const basePath = isDotAdmin ? '/.admin' : '/admin';
  const currentPath = location.pathname.toLowerCase();
  const loginPath = `${basePath}/login`;
  const dashboardPath = `${basePath}/dashboard`;
  const isLoginPage = currentPath === loginPath.toLowerCase();

  const [authenticated, setAuthenticated] = useState(
    () => localStorage.getItem('adminSession') === 'true'
  );
  const [loginError, setLoginError] = useState('');

  function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('adminSession', 'true');
      setAuthenticated(true);
      setLoginError('');
      navigate(dashboardPath, { replace: true });
    } else {
      setLoginError('Username ya password sahi nahi hai.');
    }
  }

  function handleLogout() {
    localStorage.removeItem('adminSession');
    setAuthenticated(false);
    navigate(loginPath, { replace: true });
  }

  if (!authenticated && !isLoginPage) {
    return <Navigate to={loginPath} replace />;
  }

  if (authenticated && isLoginPage) {
    return <Navigate to={dashboardPath} replace />;
  }

  if (isLoginPage) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#17191d] px-4 text-white">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-2xl border border-white/10 bg-[#212328] p-8 shadow-2xl"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
            Game Store
          </p>
          <h1 className="mb-2 text-3xl font-bold">Admin sign in</h1>
          

          <label
            htmlFor="admin-username"
            className="mb-2 block text-sm text-gray-300"
          >
            Username
          </label>
          <input
            id="admin-username"
            name="username"
            required
            autoComplete="username"
            className="mb-4 w-full rounded-lg border border-white/10 bg-[#17191d] px-4 py-3"
          />

          <label
            htmlFor="admin-password"
            className="mb-2 block text-sm text-gray-300"
          >
            Password
          </label>
          <input
            id="admin-password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="mb-4 w-full rounded-lg border border-white/10 bg-[#17191d] px-4 py-3"
          />

          {loginError && (
            <p role="alert" className="mb-4 text-sm text-red-400">
              {loginError}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold hover:bg-orange-600"
          >
            Sign in
          </button>
        </form>
      </main>
    );
  }

  if (currentPath === basePath.toLowerCase()) {
    return <Navigate to={dashboardPath} replace />;
  }

  let page;

  if (currentPath === dashboardPath.toLowerCase()) {
    page = <AdminDashboard />;
  } else if (currentPath === `${basePath}/deliveries`.toLowerCase()) {
    page = <AdminDeliveries />;
  } else if (currentPath === `${basePath}/products`.toLowerCase()) {
    page = <AdminProducts />;
  } else if (currentPath === `${basePath}/customers`.toLowerCase()) {
    page = <AdminCustomers />;
  } else if (currentPath === `${basePath}/settings`.toLowerCase()) {
    page = <AdminSettings />;
  } else {
    return <Navigate to={dashboardPath} replace />;
  }

  return (
    <AdminLayout basePath={basePath} onLogout={handleLogout}>
      {page}
    </AdminLayout>
  );
}