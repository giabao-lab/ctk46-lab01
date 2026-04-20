export default function BlogPostLoading() {
 return (
  <article className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
   <div className="h-5 w-40 animate-pulse rounded-full bg-slate-200" />
   <div className="h-4 w-32 animate-pulse rounded-full bg-slate-200" />
   <div className="h-10 w-3/4 animate-pulse rounded-2xl bg-slate-200" />
   <div className="space-y-3">
    <div className="h-4 w-full animate-pulse rounded-full bg-slate-200" />
    <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-200" />
    <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-200" />
   </div>
   <div className="grid gap-3 sm:grid-cols-3">
    <div className="h-10 animate-pulse rounded-2xl bg-slate-200" />
    <div className="h-10 animate-pulse rounded-2xl bg-slate-200" />
    <div className="h-10 animate-pulse rounded-2xl bg-slate-200" />
   </div>
  </article>
 );
}