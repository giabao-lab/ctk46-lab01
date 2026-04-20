import Link from 'next/link';
import SectionHeading from './components/section-heading';
import Counter from './components/counter';
import ThemeToggle from './components/theme-toggle';
import CopyButton from './components/copy-button';
import { posts, projects, skills, siteInfo } from './data';

export default function HomePage() {
 return (
       <div className="space-y-16 py-4">
        <section className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6">
               <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                     Portfolio / Blog cá nhân
               </span>
               <div className="space-y-4">
                     <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                      Xin chào! Tôi là <span className="text-emerald-600">{siteInfo.name}</span>
                     </h1>
                     <p className="max-w-2xl text-lg leading-8 text-slate-600">{siteInfo.role}</p>
                     <p className="max-w-2xl text-lg leading-8 text-slate-600">{siteInfo.bio}</p>
               </div>
               <div className="flex flex-wrap gap-4">
                     <Link href="/projects" className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700">
                      Xem dự án
                     </Link>
                     <Link href="/contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-300 hover:text-emerald-700 hover:shadow-sm">
                      Liên hệ
                     </Link>
                  <ThemeToggle />
               </div>
              </div>

              <div className="rounded-4xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-100/60">
               <div className="flex items-center gap-4 rounded-3xl bg-linear-to-br from-emerald-600 to-teal-500 p-6 text-white">
                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 text-3xl font-bold backdrop-blur">
                      LB
                     </div>
                     <div>
                      <p className="text-sm text-emerald-50">Sinh viên CTK46</p>
                      <p className="text-2xl font-bold">Lý Gia Bảo</p>
                      <p className="mt-1 text-sm text-emerald-50/90">MSSV {siteInfo.mssv}</p>
                     </div>
               </div>

               <div className="mt-6 grid gap-4 sm:grid-cols-2">
                     <div className="rounded-2xl bg-slate-50 p-4">
                      <dt className="text-sm text-slate-500">Email</dt>
                      <dd className="mt-1 font-semibold text-slate-900">{siteInfo.email}</dd>
                     </div>
                     <div className="rounded-2xl bg-slate-50 p-4">
                      <dt className="text-sm text-slate-500">Trường</dt>
                      <dd className="mt-1 font-semibold text-slate-900">Đại học Đà Lạt</dd>
                     </div>
                     <div className="rounded-2xl bg-slate-50 p-4 sm:col-span-2">
                      <dt className="text-sm text-slate-500">Sở thích</dt>
                      <dd className="mt-1 font-semibold text-slate-900">Web UI, routing, security và Tailwind CSS</dd>
                     </div>
               </div>

             <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-slate-600">Bộ đếm tương tác:</span>
                  <Counter />
             </div>

             <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="text-sm font-semibold text-slate-600">Sao chép email:</span>
                  <CopyButton text={siteInfo.email} />
             </div>
              </div>
        </section>

        <section>
              <SectionHeading eyebrow="Kỹ năng" title="Những công nghệ mình đang sử dụng" description="Một số kỹ năng nền tảng được trình bày bằng grid responsive." />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
               {skills.map((skill) => (
                     <div key={skill} className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700">
                      {skill}
                     </div>
               ))}
              </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
              <div>
               <SectionHeading eyebrow="Blog nổi bật" title="Một vài bài viết mới nhất" description="Bài viết dynamic route hiển thị nội dung chi tiết khi nhấn vào." />
               <div className="space-y-4">
                     {posts.slice(0, 2).map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg">
                            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                             <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">{post.category}</span>
                             <span>{post.date}</span>
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-slate-900">{post.title}</h3>
                            <p className="mt-3 text-slate-600">{post.excerpt}</p>
                      </Link>
                     ))}
               </div>
              </div>

              <div>
               <SectionHeading eyebrow="Dự án" title="Ba đồ án / bài tập tiêu biểu" description="Dữ liệu dự án được trình bày trực quan và có thể bấm sang trang chi tiết." />
               <div className="space-y-4">
                     {projects.map((project) => (
                      <div key={project.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-start justify-between gap-4">
                             <div>
                                   <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
                                   <p className="mt-2 text-slate-600">{project.description}</p>
                             </div>
                             <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{project.status}</span>
                            </div>
                      </div>
                     ))}
               </div>
              </div>
        </section>
       </div>
 );
}