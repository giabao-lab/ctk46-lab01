import Link from 'next/link';

export default function PostNotFound() {
 return (
  <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
   <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">404</p>
   <h2 className="mt-3 text-3xl font-bold text-slate-900">Bài viết không tồn tại</h2>
   <p className="mt-4 text-slate-600">Bài viết bạn đang tìm kiếm không có trong hệ thống.</p>
   <Link href="/blog" className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
    Quay lại Blog
   </Link>
  </div>
 );
}