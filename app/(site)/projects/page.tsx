import Link from 'next/link';
import SectionHeading from '../components/section-heading';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
 return (
  <div className="space-y-8">
   <SectionHeading eyebrow="Dự án" title="Danh sách dự án đã thực hiện" description="Danh sách này gồm đúng ba đồ án/bài tập tiêu biểu theo yêu cầu phần tự làm." />

   <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    {projects.map((project) => (
     <article key={project.id} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
       <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
       <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
         project.status === 'Đã hoàn thành'
          ? 'bg-emerald-50 text-emerald-700'
          : project.status === 'Đang phát triển'
            ? 'bg-amber-50 text-amber-700'
            : 'bg-violet-50 text-violet-700'
        }`}
       >
        {project.status}
       </span>
      </div>
      <p className="mt-4 flex-1 text-slate-600 leading-7">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
       {project.tech.map((item) => (
        <span key={item} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{item}</span>
       ))}
      </div>
      <Link href={`/projects/${project.id}`} className="mt-6 inline-flex text-sm font-semibold text-emerald-700 hover:underline">
       Xem chi tiết →
      </Link>
     </article>
    ))}
   </div>
  </div>
 );
}