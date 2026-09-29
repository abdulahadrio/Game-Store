import { useEffect, useState } from 'react';
import {
  createId,
  EMPTY_PRODUCT,
  readList,
  writeList,
} from '../adminData';

export default function AdminProducts() {
  const [products, setProducts] = useState(() => readList('adminProducts'));
  const [form, setForm] = useState(EMPTY_PRODUCT);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    writeList('adminProducts', products);
  }, [products]);

  function saveProduct(event) {
    event.preventDefault();

    const details = {
      name: form.name.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      stock: Number(form.stock),
    };

    if (editingId) {
      setProducts((current) =>
        current.map((product) =>
          product.id === editingId ? { ...product, ...details } : product
        )
      );
    } else {
      setProducts((current) => [
        { id: createId('PRD'), ...details },
        ...current,
      ]);
    }

    setForm(EMPTY_PRODUCT);
    setEditingId(null);
  }

  function startEdit(product) {
    setEditingId(product.id);
    setForm({
      name: product.name || '',
      category: product.category || '',
      price: String(product.price ?? ''),
      stock: String(product.stock ?? ''),
    });
  }

  return (
    <>
      <header className="mb-8">
        <p className="text-sm text-gray-400">Manage your catalog</p>
        <h2 className="mt-1 text-3xl font-bold">Products</h2>
      </header>

      <section className="mb-8 rounded-xl border border-white/10 bg-[#212328] p-5">
        <h3 className="mb-5 text-lg font-semibold">
          {editingId ? 'Edit product' : 'Add product'}
        </h3>

        <form
          onSubmit={saveProduct}
          className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5"
        >
          <input
            required
            placeholder="Product name"
            value={form.name}
            onChange={(event) =>
              setForm({ ...form, name: event.target.value })
            }
            className="rounded-lg border border-white/10 bg-[#17191d] px-3 py-3"
          />

          <input
            required
            placeholder="Category"
            value={form.category}
            onChange={(event) =>
              setForm({ ...form, category: event.target.value })
            }
            className="rounded-lg border border-white/10 bg-[#17191d] px-3 py-3"
          />

          <input
            required
            min="0"
            step="0.01"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(event) =>
              setForm({ ...form, price: event.target.value })
            }
            className="rounded-lg border border-white/10 bg-[#17191d] px-3 py-3"
          />

          <input
            required
            min="0"
            type="number"
            placeholder="Stock"
            value={form.stock}
            onChange={(event) =>
              setForm({ ...form, stock: event.target.value })
            }
            className="rounded-lg border border-white/10 bg-[#17191d] px-3 py-3"
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-orange-500 px-4 py-3 font-semibold hover:bg-orange-600"
            >
              {editingId ? 'Save changes' : 'Add product'}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm(EMPTY_PRODUCT);
                }}
                className="rounded-lg border border-white/10 px-3"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="overflow-hidden rounded-xl border border-white/10 bg-[#212328]">
        <div className="border-b border-white/10 px-5 py-4 font-semibold">
          Product catalog ({products.length})
        </div>

        {products.length === 0 ? (
          <p className="p-8 text-center text-gray-400">
            Empty
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead className="text-gray-400">
                <tr>
                  <th className="px-5 py-4">Product</th>
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">Price</th>
                  <th className="px-5 py-4">Stock</th>
                  <th className="px-5 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-white/10">
                    <td className="px-5 py-4">{product.name}</td>
                    <td className="px-5 py-4">{product.category}</td>
                    <td className="px-5 py-4">
                      ${Number(product.price || 0).toFixed(2)}
                    </td>
                    <td className="px-5 py-4">{product.stock}</td>
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        onClick={() => startEdit(product)}
                        className="mr-3 text-orange-400"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setProducts((current) =>
                            current.filter((item) => item.id !== product.id)
                          )
                        }
                        className="text-red-400"
                      >
                        Delete
                      </button>
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