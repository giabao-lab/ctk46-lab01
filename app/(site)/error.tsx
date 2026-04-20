'use client';

import { useEffect } from 'react';

export default function Error({ error, unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
 useEffect(() => {
  console.error(error);
 }, [error]);

 return (
  <div className="mx-auto max-w-2xl rounded-3xl border border-rose-200 bg-rose-50 p-8 text-center shadow-sm">
   <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">Đã có lỗi</p>
   <h2 className="mt-3 text-3xl font-bold text-slate-900">Không thể tải trang</h2>
   <p className="mt-4 text-slate-600">Một lỗi không mong muốn đã xảy ra trong khu vực này. Bạn có thể thử tải lại để Next.js render lại segment.</p>
   <button
    onClick={() => unstable_retry()}
    className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
   >
    Thử lại
   </button>
  </div>
 );
}