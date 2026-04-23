import Link from 'next/link';

export default function BlogPostNotFound() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h1 className="text-3xl font-bold text-slate-900">Bài viết không tồn tại</h1>
      <p className="mt-3 text-slate-600">Bài viết bạn đang tìm không có trong hệ thống.</p>
      <Link
        href="/blog"
        className="mt-6 inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
      >
        Quay lại blog
      </Link>
    </div>
  );
}
