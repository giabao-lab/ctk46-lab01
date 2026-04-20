import SectionHeading from '../components/section-heading';
import { skills, siteInfo } from '../data';

export default function AboutPage() {
 return (
  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
   <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
    <SectionHeading eyebrow="Giới thiệu" title="Thông tin chi tiết về bản thân" description="Trang này dùng để giới thiệu ngắn gọn hồ sơ cá nhân, định hướng học tập và kỹ năng nổi bật." />
    <div className="space-y-4 text-slate-600 leading-7">
        <p>Mình là <strong>{siteInfo.name}</strong>, MSSV <strong>{siteInfo.mssv}</strong>, sinh viên ngành Công nghệ Thông tin tại Đại học Đà Lạt.</p>
     <p>Mục tiêu của mình là xây dựng giao diện dễ dùng, phản hồi tốt và có cấu trúc rõ ràng cho các dự án web cá nhân.</p>
        <p>Hiện tại mình đang thực hành Next.js App Router, nested layouts, route groups và cách chia tách Server Components / Client Components.</p>
    </div>
   </section>

   <aside className="space-y-6">
    <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/15">
     <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Mục tiêu học tập</p>
     <p className="mt-3 text-2xl font-bold">Nắm vững App Router và phân biệt Server/Client Components</p>
     <p className="mt-4 text-slate-300">Lab 2 giúp làm quen với loading state, error boundary, 404 tùy chỉnh và route nhóm trong Next.js.</p>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-lg font-bold text-slate-900">Kỹ năng</h2>
     <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {skills.map((skill) => (
       <div key={skill} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">{skill}</div>
      ))}
     </div>
    </div>
   </aside>
  </div>
 );
}