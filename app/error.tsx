'use client';

import { useEffect } from 'react';

type RootErrorProps = {
 error: Error & { digest?: string };
 reset: () => void;
};

export default function RootError({ error, reset }: RootErrorProps) {
 useEffect(() => {
  console.error(error);
 }, [error]);

 return (
  <html lang="vi">
   <body className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
    <main className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-rose-200 bg-white p-10 text-center shadow-sm">
     <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">Đã xảy ra lỗi</p>
     <h1 className="mt-4 text-4xl font-bold">Ứng dụng gặp sự cố</h1>
     <p className="mt-4 max-w-xl text-slate-600">{error.message || 'Không thể tải nội dung. Vui lòng thử lại.'}</p>
     <button
      onClick={() => reset()}
      className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
     >
      Thử lại
     </button>
    </main>
   </body>
  </html>
 );
}