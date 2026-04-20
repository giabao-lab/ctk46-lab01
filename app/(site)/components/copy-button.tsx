'use client';

import { useState } from 'react';

type CopyButtonProps = {
 text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
 const [copied, setCopied] = useState(false);

 const handleCopy = async () => {
  await navigator.clipboard.writeText(text);
  setCopied(true);
  window.setTimeout(() => setCopied(false), 1500);
 };

 return (
  <button
   type="button"
   onClick={handleCopy}
   className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700"
  >
   <span>{copied ? '✓' : '⧉'}</span>
   <span>{copied ? 'Đã copy!' : 'Copy text'}</span>
  </button>
 );
}