export const ORDER_STATUSES = [
  'Pending',
  'Processing',
  'Out for Delivery',
  'Delivered',
  'Cancelled',
];

export const EMPTY_ORDER = {
  customer: '',
  product: '',
  amount: '',
  status: 'Pending',
};

export const EMPTY_PRODUCT = {
  name: '',
  category: '',
  price: '',
  stock: '',
};

export function readList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function writeList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}