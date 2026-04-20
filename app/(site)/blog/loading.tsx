export default function Loading() {
 return (
  <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
   <div className="h-6 w-40 animate-pulse rounded-full bg-slate-200" />
   <div className="h-10 w-3/4 animate-pulse rounded-2xl bg-slate-200" />
   <div className="h-4 w-full animate-pulse rounded-full bg-slate-200" />
   <div className="h-4 w-11/12 animate-pulse rounded-full bg-slate-200" />
   <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-200" />
  </div>
 );
}