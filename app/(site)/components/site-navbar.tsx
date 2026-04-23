'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavLink from './nav-link';

const navItems = [
 { href: '/', label: 'Trang chủ' },
 { href: '/about', label: 'Giới thiệu' },
 { href: '/skills', label: 'Kỹ năng' },
 { href: '/blog', label: 'Blog' },
 { href: '/projects', label: 'Dự án' },
 { href: '/guestbook', label: 'Guestbook' },
 { href: '/contact', label: 'Liên hệ' },
];

export default function SiteNavbar() {
 const [menuOpen, setMenuOpen] = useState(false);

 return (
  <header className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/85 backdrop-blur-xl">
   <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
    <Link href="/" className="flex items-center gap-3">
     <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-bold text-white shadow-lg shadow-emerald-200">
      LB
     </div>
     <div>
      <p className="text-sm font-semibold text-slate-900">Lý Gia Bảo</p>
      <p className="text-xs text-slate-500">Portfolio / Blog cá nhân</p>
     </div>
    </Link>

    <button
     type="button"
     className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700 md:hidden"
     onClick={() => setMenuOpen((current) => !current)}
     aria-expanded={menuOpen}
     aria-label="Mở menu điều hướng"
    >
     <span className="sr-only">Menu</span>
     <span className="flex flex-col gap-1.5">
      <span className="h-0.5 w-5 rounded-full bg-current" />
      <span className="h-0.5 w-5 rounded-full bg-current" />
      <span className="h-0.5 w-5 rounded-full bg-current" />
     </span>
    </button>

    <nav className="hidden flex-wrap items-center gap-2 md:flex">
     {navItems.map((item) => (
      <NavLink key={item.href} href={item.href}>
       {item.label}
      </NavLink>
     ))}
    </nav>
   </div>

   <div className={`border-t border-emerald-100 bg-white px-4 pb-4 pt-2 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
    <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:px-2">
     {navItems.map((item) => (
      <div key={item.href} onClick={() => setMenuOpen(false)}>
       <NavLink href={item.href}>{item.label}</NavLink>
      </div>
     ))}
    </div>
   </div>
  </header>
 );
}