'use client';

import { useState } from 'react';

export default function Counter() {
 const [count, setCount] = useState(0);

 return (
  <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
   <button
    type="button"
    onClick={() => setCount((current) => current - 1)}
    className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xl font-bold text-slate-700 transition hover:bg-slate-200"
   >
    -
   </button>
   <span className="w-12 text-center text-2xl font-bold text-slate-900">{count}</span>
   <button
    type="button"
    onClick={() => setCount((current) => current + 1)}
    className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-xl font-bold text-white transition hover:bg-emerald-700"
   >
    +
   </button>
  </div>
 );
}