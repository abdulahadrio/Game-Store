import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaMinus, FaPlus } from 'react-icons/fa';
import lastimg from '../assets/last.jpeg';

function readOrders() {
  try {
    const saved = JSON.parse(localStorage.getItem('userOrders') || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export default function BuyNow() {
  const location = useLocation();
  const navigate = useNavigate();

  const productData = location.state || {
    name: 'EGame Pro Gift Card 2026',
    price: 580,
    image: lastimg,
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('Axim Bank');

  const itemPrice = Number(productData.price) || 580;
  const subtotal = quantity * itemPrice;
  const shipping = 9.5;
  const total = subtotal + shipping;

  function handlePlaceOrder(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get('firstName') || '').trim();
    const lastName = String(formData.get('lastName') || '').trim();
    const username = [firstName, lastName].filter(Boolean).join(' ');

    const street = String(formData.get('streetAddress') || '').trim();
    const apartment = String(formData.get('addressLine2') || '').trim();
    const city = String(formData.get('city') || '').trim();
    const state = String(formData.get('state') || '').trim();
    const zipCode = String(formData.get('zipCode') || '').trim();
    const country = String(formData.get('country') || '').trim();

    const address = [
      street,
      apartment,
      city,
      state,
      zipCode,
      country,
    ]
      .filter(Boolean)
      .join(', ');

    const order = {
      orderId: `ORD-${Date.now()}`,
      username,
      customerName: username,
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      address,
      location: address,
      country,
      paymentMethod: selectedPayment,
      orderNotes: String(formData.get('orderNotes') || '').trim(),
      date: new Date().toLocaleString(),
      status: 'Pending',
      subtotal: Number(subtotal.toFixed(2)),
      shipping: Number(shipping.toFixed(2)),
      totalAmount: Number(total.toFixed(2)),
      total: Number(total.toFixed(2)),
      items: [
        {
          title: productData.name || productData.title || 'Product',
          name: productData.name || productData.title || 'Product',
          price: itemPrice,
          quantity,
          image: productData.image || lastimg,
          status: 'Pending',
        },
      ],
    };

    const orders = readOrders();
    orders.unshift(order);
    localStorage.setItem('userOrders', JSON.stringify(orders));
    window.dispatchEvent(new Event('userOrdersUpdated'));

    navigate('/MyOrders', { state: { order } });
  }

  const inputClass =
    'w-full rounded-lg border border-gray-700 bg-[rgba(45,50,56,1)] px-4 py-2.5 text-sm text-white outline-none focus:border-orange-500';

  return (
    <main className="min-h-screen bg-[rgba(45,50,56,1)] px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <IoIosArrowForward />
          <span className="text-gray-300">Checkout</span>
        </div>

        <h1 className="mb-6 text-2xl font-bold">Billing Details</h1>

        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12"
        >
          <section className="space-y-4 rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-6 lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-xs text-gray-400">
                First Name *
                <input
                  className={inputClass}
                  name="firstName"
                  autoComplete="given-name"
                  required
                />
              </label>
              <label className="space-y-1 text-xs text-gray-400">
                Last Name *
                <input
                  className={inputClass}
                  name="lastName"
                  autoComplete="family-name"
                  required
                />
              </label>
            </div>

            <label className="block space-y-1 text-xs text-gray-400">
              Company Name (Optional)
              <input className={inputClass} name="company" autoComplete="organization" />
            </label>

            <label className="block space-y-1 text-xs text-gray-400">
              Country / Region *
              <select
                className={inputClass}
                name="country"
                autoComplete="country-name"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Spain">Spain</option>
              </select>
            </label>

            <label className="block space-y-1 text-xs text-gray-400">
              Street Address *
              <input
                className={inputClass}
                name="streetAddress"
                placeholder="House number and street name"
                autoComplete="address-line1"
                required
              />
            </label>

            <label className="block space-y-1 text-xs text-gray-400">
              Apartment, suite, unit (Optional)
              <input
                className={inputClass}
                name="addressLine2"
                placeholder="Apartment, suite, unit"
                autoComplete="address-line2"
              />
            </label>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-xs text-gray-400">
                Town / City *
                <input
                  className={inputClass}
                  name="city"
                  autoComplete="address-level2"
                  required
                />
              </label>
              <label className="space-y-1 text-xs text-gray-400">
                State / County *
                <input
                  className={inputClass}
                  name="state"
                  autoComplete="address-level1"
                  required
                />
              </label>
            </div>

            <label className="block space-y-1 text-xs text-gray-400">
              Zip Code *
              <input
                className={inputClass}
                name="zipCode"
                autoComplete="postal-code"
                required
              />
            </label>

            <label className="block space-y-1 text-xs text-gray-400">
              Phone Number *
              <input
                className={inputClass}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
              />
            </label>

            <label className="block space-y-1 text-xs text-gray-400">
              Email Address *
              <input
                className={inputClass}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </label>

            <label className="block space-y-1 border-t border-gray-700 pt-4 text-xs text-gray-400">
              Order Notes (Optional)
              <textarea
                className={inputClass}
                name="orderNotes"
                rows="3"
                placeholder="Note about your order"
              />
            </label>
          </section>

          <section className="space-y-6 lg:col-span-5">
            <div className="space-y-3 rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-6">
              <h2 className="text-lg font-bold">Payment Method</h2>

              {['Apple Pay', 'Fawry', 'Axim Bank', 'VISA HDFC Bank'].map(
                (payment) => (
                  <label
                    key={payment}
                    className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 text-sm ${
                      selectedPayment === payment
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-gray-700 bg-[rgba(45,50,56,1)]'
                    }`}
                  >
                    {payment}
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={payment}
                      checked={selectedPayment === payment}
                      onChange={() => setSelectedPayment(payment)}
                      className="accent-orange-500"
                    />
                  </label>
                ))}
              </div>

            <div className="rounded-xl border border-gray-700 bg-[rgba(35,40,46,1)] p-6">
              <h2 className="mb-4 text-lg font-bold">Your Order</h2>

              <div className="mb-4 flex items-center gap-3 border-b border-gray-700 pb-4">
                <img
                  src={productData.image || lastimg}
                  alt={productData.name || productData.title || 'Product'}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">
                    {productData.name || productData.title || 'Product'}
                  </p>
                  <p className="text-xs text-gray-400">
                    ${itemPrice.toFixed(2)} each
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                      className="rounded bg-gray-700 p-2"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus size={10} />
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((value) => value + 1)}
                      className="rounded bg-gray-700 p-2"
                      aria-label="Increase quantity"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>
                <span className="font-semibold text-orange-500">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between py-2 text-sm text-gray-300">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="mb-5 flex justify-between border-t border-gray-700 pt-3 font-bold">
                <span>Total</span>
                <span className="text-orange-500">${total.toFixed(2)}</span>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 py-3.5 text-sm font-bold text-white hover:opacity-90"
              >
                Place Order
              </button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}