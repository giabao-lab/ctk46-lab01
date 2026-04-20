import SectionHeading from '../components/section-heading';
import { skills, siteInfo } from '../data';

export default function SkillsPage() {
 return (
  <div className="space-y-8">
   <SectionHeading eyebrow="Kỹ năng" title="Danh sách kỹ năng lập trình" description="Trang này liệt kê các kỹ năng chính mà Lý Gia Bảo đang sử dụng trong quá trình học tập và thực hành." />

   <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {skills.map((skill) => (
     <article key={skill} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <h2 className="text-xl font-bold text-slate-900">{skill}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">Kỹ năng này là một phần trong hồ sơ học tập và các dự án cá nhân của {siteInfo.name}.</p>
     </article>
    ))}
   </section>
  </div>
 );
}