'use client';

import { useEffect } from 'react';

export default function BlogError({ error, unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
 useEffect(() => {
  console.error(error);
 }, [error]);

 return (
  <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm">
   <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Blog</p>
   <h2 className="mt-3 text-2xl font-bold text-slate-900">Không tải được bài viết</h2>
   <p className="mt-3 text-slate-600">Trang blog gặp lỗi tạm thời. Hãy thử tải lại segment này để tiếp tục.</p>
   <button onClick={() => unstable_retry()} className="mt-6 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600">Thử lại</button>
  </div>
 );
}