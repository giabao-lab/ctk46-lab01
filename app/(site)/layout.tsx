import type { ReactNode } from 'react';
import SiteNavbar from './components/site-navbar';
import { siteInfo } from './data';

export default function SiteLayout({ children }: { children: ReactNode }) {
 return (
  <div className="min-h-screen">
   <SiteNavbar />

  <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">{children}</main>

   <footer className="border-t border-slate-200/80 bg-white/70">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
    <p>© 2026 Lý Gia Bảo — CTK46. Xây dựng bằng Next.js App Router và Tailwind CSS.</p>
    <div className="flex flex-wrap gap-4">
     <a href={siteInfo.github} target="_blank" rel="noreferrer" className="text-emerald-600 transition hover:text-emerald-700 hover:underline">
      GitHub
     </a>
     <a href={`mailto:${siteInfo.email}`} className="text-emerald-600 transition hover:text-emerald-700 hover:underline">
      Email
     </a>
    </div>
    </div>
   </footer>
  </div>
 );
}