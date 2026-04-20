'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
 href: string;
 children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
 const pathname = usePathname();
 const active = pathname === href || (href !== '/' && pathname.startsWith(href));

 return (
  <Link
   href={href}
   className={`rounded-full px-4 py-2 text-sm font-medium transition ${active
    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/15'
    : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'}`}
  >
   {children}
  </Link>
 );
}