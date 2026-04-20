import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById, projects } from '@/data/projects';

type ProjectPageProps = {
 params: Promise<{ id: string }>;
};

export function generateStaticParams() {
 return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
 const { id } = await params;
 const project = getProjectById(id);

 if (!project) {
  notFound();
 }

 return (
  <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
   <Link href="/projects" className="text-sm font-semibold text-sky-700 hover:underline">
    ← Quay lại danh sách dự án
   </Link>

   <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
    <span className="rounded-full bg-sky-50 px-3 py-1 font-medium text-sky-700">Dự án chi tiết</span>
    <span>{project.id}</span>
   </div>

   <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{project.title}</h1>
   <p className="mt-4 text-lg leading-8 text-slate-600">{project.description}</p>

   <div className="mt-8 flex flex-wrap gap-2">
    {project.tech.map((tech) => (
     <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
      {tech}
     </span>
    ))}
   </div>

   <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-slate-700 leading-8">
    <p>{project.details}</p>
   </div>
  </article>
 );
}