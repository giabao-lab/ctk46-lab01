import type { ReactNode } from 'react';
import Link from 'next/link';

export default function BlogLayout({ children }: { children: ReactNode }) {
 return (
  <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
   <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:h-fit">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Blog</p>
    <h1 className="mt-3 text-3xl font-bold text-slate-900">Bài viết và ghi chú học tập</h1>
    <p className="mt-4 text-sm leading-7 text-slate-600">Khu vực này có nested layout riêng để giữ bố cục blog ổn định khi chuyển giữa danh sách và trang chi tiết.</p>
    <div className="mt-6 space-y-3 text-sm font-medium text-slate-700">
     <Link href="/blog" className="block rounded-2xl bg-slate-100 px-4 py-3 transition hover:bg-slate-200">Danh sách bài viết</Link>
     <Link href="/projects" className="block rounded-2xl bg-slate-100 px-4 py-3 transition hover:bg-slate-200">Xem dự án</Link>
    </div>
   </aside>

   <section>{children}</section>
  </div>
 );
}