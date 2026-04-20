export default function Loading() {
 return (
  <div className="space-y-6">
   <div className="h-10 w-56 animate-pulse rounded-2xl bg-slate-200/80" />
   <div className="grid gap-6 lg:grid-cols-3">
    <div className="lg:col-span-2">
     <div className="h-80 animate-pulse rounded-3xl bg-slate-200/80" />
    </div>
    <div className="h-80 animate-pulse rounded-3xl bg-slate-200/80" />
   </div>
  </div>
 );
}