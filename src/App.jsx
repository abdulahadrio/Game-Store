import { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import Home from './pages/Home';
import Pcgames from './pages/Pcgames';
import Xbox from './pages/Xbox';
import PlayStation from './pages/PlayStation';
import Nintendo from './pages/Nintendo';
import Deals from './pages/Deals';
import PreOrders from './pages/PreOrders';
import Blog from './pages/Blog';
import SignIn from './pages/SignIn';
import Allgames from './pages/Allgames';
import Trendinggames from './pages/Trendinggames';
import Upcoming from './pages/Upcoming';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Forgot from './pages/Forgot';
import OtpVerification from './pages/OtpVerification';
import ResetPassword from './pages/ResetPassword';
import NotFound from './pages/NotFound';
import BuyNow from './pages/BuyNow';
import Cart from './pages/Cart';
import OrderDetails from './pages/OrderDetails';
import MyOrders from './pages/MyOrders';
import Wallet from './pages/Wallet';
import ProductDetails from './pages/ProductDetails';
import FAQ from './pages/FAQ';
import Contactus from './pages/Contactus';
import SearchModal from './pages/SearchModal';
import Reviews from './pages/Reviews';

import navimg from './assets/nav.png';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

import AdminPanel from './admin/AdminPanel.jsx';


function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('En');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [lastLogin, setLastLogin] = useState('');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const activeEmail = localStorage.getItem('currentLoggedInEmail');

  useEffect(() => {
    let usersDb = [];

    try {
      usersDb = JSON.parse(localStorage.getItem('users_database') || '[]');
      if (!Array.isArray(usersDb)) usersDb = [];
    } catch {
      usersDb = [];
    }

    const currentUser = usersDb.find((user) => user.email === activeEmail);

    if (currentUser) {
      setUserName(currentUser.name || 'User');
      setUserEmail(currentUser.email || '');
      setProfilePic(currentUser.profilePic || '');
    } else {
      setUserName(localStorage.getItem('userName') || 'User');
      setUserEmail(localStorage.getItem('userEmail') || '');
      setProfilePic(localStorage.getItem('profilePic') || '');
    }

    setLastLogin(localStorage.getItem('lastLogin') || 'Just now');
  }, [location, activeEmail]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentLoggedInEmail');
    navigate('/SignIn');
  };

  const getDesktopLinkClass = (path) => {
    const isActive = location.pathname === path;

    return `h-full flex items-center px-1 lg:px-2 transition-all duration-200 relative group text-xs lg:text-sm xl:text-base ${
      isActive ? 'font-semibold text-white' : 'text-white font-normal'
    }`;
  };

  const getMobileLinkClass = (path) => {
    const isActive = location.pathname === path;

    return `px-3 py-2 rounded-md transition-colors duration-200 block text-sm ${
      isActive
        ? 'bg-[rgba(255,105,22,1)] text-white'
        : 'text-white hover:bg-[rgba(255,105,22,1)]'
    }`;
  };

  // Deliveries ko general admin route se pehle match karna zaroori hai.
    const isAdminRoute = /^\/(?:\.admin|admin)(?:\/|$)/i.test(
    location.pathname
  );

  if (isAdminRoute) {
    return <AdminPanel />;
  }

  const userInitial = userName ? userName.charAt(0).toUpperCase() : 'U';
  const languages = ['En', 'Chinese', 'French', 'Urdu', 'Hindi'];

  return (
    <>
      <div className="relative flex h-20 min-w-[320px] w-full items-center justify-between bg-[#212328] px-2 sm:px-4 lg:px-6">
        <div className="flex h-20 items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer p-1 text-[26px] text-white focus:outline-none sm:text-[28px] lg:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          <nav className="flex h-20 w-28 shrink-0 items-center justify-start sm:w-32 lg:w-40">
            <img
              src={navimg}
              alt="Logo"
              className="max-h-10 object-contain lg:max-h-12"
            />
          </nav>
        </div>

        <nav className="hidden h-10 shrink-0 items-center gap-1 text-white lg:flex lg:gap-2 xl:gap-3">
          {[
            ['/', 'Home'],
            ['/Pcgames', 'Pc Games'],
            ['/Xbox', 'Xbox'],
            ['/PlayStation', 'PlayStation'],
            ['/Nintendo', 'Nintendo'],
            ['/GiftCards', 'Gift Cards'],
            ['/Deals', 'Deals'],
            ['/PreOrders', 'Pre-orders'],
            ['/Blog', 'Blog'],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              className={`${getDesktopLinkClass(path)} relative flex h-full items-center`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full bg-[rgba(255,105,22,1)] transition-all duration-200 ${
                  location.pathname === path
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex lg:gap-3">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer rounded-md border-none bg-transparent p-2 transition-colors"
            aria-label="Open search"
          >
            <CiSearch className="text-[22px] text-[rgba(255,105,22,1)] lg:text-[25px]" />
          </button>

          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex cursor-pointer items-center rounded px-1 py-1 text-xs font-medium text-white focus:outline-none lg:px-2 lg:text-sm"
            >
              {currentLang}
              <MdOutlineArrowDropDown className="mt-1" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 z-50 mt-2 w-28 rounded-md border border-gray-700 bg-[rgba(45,50,56,1)] py-1 shadow-lg">
                {languages
                  .filter((language) => language !== currentLang)
                  .map((language) => (
                    <button
                      key={language}
                      onClick={() => {
                        setCurrentLang(language);
                        setIsLangOpen(false);
                      }}
                      className="block w-full cursor-pointer px-4 py-2 text-left text-xs text-white hover:bg-[rgba(255,105,22,1)] lg:text-sm"
                    >
                      {language}
                    </button>
                  ))}
              </div>
            )}
          </div>

          {isLoggedIn ? (
            <div
              className="relative flex items-center gap-3"
              ref={dropdownRef}
            >
              <div className="flex items-center gap-2 text-right">
                <span className="text-[10px] text-gray-400">
                  Last Login: <br />
                  {lastLogin}
                </span>
              </div>

              <Link to="/profile">
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-[rgba(255,105,22,1)] bg-[rgba(45,50,56,1)] shadow-md transition-all hover:opacity-95">
                  {profilePic ? (
                    <img
                      src={profilePic}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-sm font-bold text-white">
                      {userInitial}
                    </span>
                  )}
                </div>
              </Link>

              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="cursor-pointer text-gray-300 hover:text-white"
                aria-label="Open profile menu"
              >
                <MdOutlineArrowDropDown className="text-xl" />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 top-12 z-50 w-48 rounded-lg border border-gray-700 bg-[rgba(35,40,46,1)] py-2 text-white shadow-2xl">
                  <div className="border-b border-gray-700 px-4 py-2">
                    <p className="text-xs font-bold text-[rgba(255,105,22,1)]">
                      {userName}
                    </p>
                    <p className="truncate text-[10px] text-gray-400">
                      {userEmail}
                    </p>
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="block px-4 py-2 text-left text-xs hover:bg-[rgba(255,105,22,1)]"
                  >
                    Profile &amp; Settings
                  </Link>
                  <Link
                    to="/MyOrders"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="block px-4 py-2 text-left text-xs hover:bg-[rgba(255,105,22,1)]"
                  >
                    My Orders
                  </Link>
                  <Link
                    to="/Wallet"
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="block px-4 py-2 text-left text-xs hover:bg-[rgba(255,105,22,1)]"
                  >
                    Wallet
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mt-1 w-full cursor-pointer border-t border-gray-700 px-4 py-2 text-left text-xs text-red-400 hover:bg-red-500/25"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/SignIn">
              <button className="h-8 w-18 rounded-[8px] bg-[rgba(255,105,22,1)] text-xs font-medium text-white hover:opacity-90 lg:h-9 lg:w-20 lg:text-sm">
                Sign In
              </button>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden sm:gap-3">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="cursor-pointer border-none bg-transparent p-1"
            aria-label="Open search"
          >
            <CiSearch className="text-[24px] text-[rgba(255,105,22,1)] sm:text-[26px]" />
          </button>

          {isLoggedIn ? (
            <Link to="/profile">
              <div className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[rgba(255,105,22,1)] bg-[rgba(45,50,56,1)]">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-bold text-white">
                    {userInitial}
                  </span>
                )}
              </div>
            </Link>
          ) : (
            <Link to="/SignIn">
              <button className="h-8 w-16 rounded-[8px] bg-[rgba(255,105,22,1)] text-xs font-medium text-white sm:w-18">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-20 z-50 flex min-w-[320px] w-full flex-col space-y-2 border-t border-gray-700 bg-[rgba(45,50,56,1)] px-4 py-4 text-white shadow-lg sm:px-6 lg:hidden">
          {[
            ['/', 'Home'],
            ['/Pcgames', 'Pc Games'],
            ['/Xbox', 'Xbox'],
            ['/PlayStation', 'PlayStation'],
            ['/Nintendo', 'Nintendo'],
            ['/GiftCards', 'Gift Cards'],
            ['/Deals', 'Deals'],
            ['/PreOrders', 'Pre-orders'],
            ['/Blog', 'Blog'],
          ].map(([path, label]) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={getMobileLinkClass(path)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pcgames" element={<Pcgames />} />
        <Route path="/Xbox" element={<Xbox />} />
        <Route path="/PlayStation" element={<PlayStation />} />
        <Route path="/Nintendo" element={<Nintendo />} />
        <Route path="/Deals" element={<Deals />} />
        <Route path="/PreOrders" element={<PreOrders />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Allgames" element={<Allgames />} />
        <Route path="/Trendinggames" element={<Trendinggames />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/BuyNow" element={<BuyNow />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/OrderDetails" element={<OrderDetails />} />
        <Route path="/MyOrders" element={<MyOrders />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;