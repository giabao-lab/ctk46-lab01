'use client';

import { useState } from 'react';

export default function ThemeToggle() {
 const [darkMode, setDarkMode] = useState(false);

 return (
  <button
   type="button"
   onClick={() => setDarkMode((current) => !current)}
   className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
  >
   <span>{darkMode ? '🌙' : '☀️'}</span>
   <span>{darkMode ? 'Dark mode' : 'Light mode'}</span>
  </button>
 );
}