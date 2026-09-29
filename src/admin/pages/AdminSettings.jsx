import { useEffect, useState } from 'react';

const DEFAULT_SETTINGS = {
  storeName: 'Game Store',
  supportEmail: '',
  currency: 'USD',
};

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem('adminSettings') || '{}');
    return { ...DEFAULT_SETTINGS, ...saved };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export default function AdminSettings() {
  const [settings, setSettings] = useState(loadSettings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem('adminSettings', JSON.stringify(settings));
  }, [settings]);

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('adminSettings', JSON.stringify(settings));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  return (
    <>
      <header className="mb-8">
        <p className="text-sm text-gray-400">Configure store details</p>
        <h2 className="mt-1 text-3xl font-bold">Settings</h2>
      </header>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl rounded-xl border border-white/10 bg-[#212328] p-5 sm:p-7"
      >
        <label
          htmlFor="store-name"
          className="mb-2 block text-sm text-gray-300"
        >
          Store name
        </label>
        <input
          id="store-name"
          required
          value={settings.storeName}
          onChange={(event) =>
            setSettings({ ...settings, storeName: event.target.value })
          }
          className="mb-5 w-full rounded-lg border border-white/10 bg-[#17191d] px-4 py-3"
        />

        <label
          htmlFor="support-email"
          className="mb-2 block text-sm text-gray-300"
        >
          Support email
        </label>
        <input
          id="support-email"
          type="email"
          value={settings.supportEmail}
          onChange={(event) =>
            setSettings({ ...settings, supportEmail: event.target.value })
          }
          placeholder="support@example.com"
          className="mb-5 w-full rounded-lg border border-white/10 bg-[#17191d] px-4 py-3"
        />

        <label htmlFor="currency" className="mb-2 block text-sm text-gray-300">
          Currency
        </label>
        <select
          id="currency"
          value={settings.currency}
          onChange={(event) =>
            setSettings({ ...settings, currency: event.target.value })
          }
          className="mb-6 w-full rounded-lg border border-white/10 bg-[#17191d] px-4 py-3"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
        </select>

        <button className="rounded-lg bg-orange-500 px-5 py-3 font-semibold hover:bg-orange-600">
          Save settings
        </button>

        {saved && (
          <span role="status" className="ml-4 text-sm text-emerald-400">
            Settings saved.
          </span>
        )}
      </form>
    </>
  );
}