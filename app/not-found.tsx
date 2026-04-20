import Link from 'next/link';

export default function NotFound() {
 return (
    <main className="mx-auto flex min-h-screen max-w-4xl items-center px-4 py-16 sm:px-6 lg:px-8">
     <div className="grid w-full gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="flex items-center justify-center">
         <svg viewBox="0 0 320 240" className="h-56 w-full max-w-sm" role="img" aria-label="Trang 404 minh họa">
            <defs>
             <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#8b5cf6" />
             </linearGradient>
            </defs>
            <rect x="24" y="36" width="272" height="168" rx="24" fill="#f8fafc" />
            <circle cx="104" cy="98" r="30" fill="url(#g1)">
             <animate attributeName="cy" values="98;88;98" dur="3s" repeatCount="indefinite" />
            </circle>
            <rect x="150" y="78" width="96" height="18" rx="9" fill="#cbd5e1" />
            <rect x="150" y="108" width="64" height="18" rx="9" fill="#e2e8f0" />
            <rect x="72" y="150" width="176" height="18" rx="9" fill="#cbd5e1">
             <animate attributeName="width" values="176;198;176" dur="2.6s" repeatCount="indefinite" />
            </rect>
            <text x="160" y="194" textAnchor="middle" fill="#0f172a" fontSize="54" fontWeight="700">404</text>
         </svg>
        </div>
        <div className="text-center lg:text-left">
         <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">404</p>
         <h1 className="mt-4 text-4xl font-bold text-slate-900">Trang không tồn tại</h1>
         <p className="mt-4 text-slate-600">Xin lỗi, trang bạn đang tìm kiếm không có trên website này.</p>
         <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link href="/" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">Về trang chủ</Link>
            <Link href="/blog" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50">Mở blog</Link>
         </div>
        </div>
     </div>
    </main>
 );
}