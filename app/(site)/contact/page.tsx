import SectionHeading from '../components/section-heading';
import { siteInfo } from '../data';

export default function ContactPage() {
 return (
  <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
   <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
    <SectionHeading eyebrow="Liên hệ" title="Thông tin liên hệ" description="Trang contact trình bày thông tin cơ bản, dễ mở rộng thêm form hoặc bản đồ ở bài sau." />
    <div className="space-y-4 text-slate-700">
     <p><span className="font-semibold text-slate-900">Họ tên:</span> {siteInfo.name}</p>
     <p><span className="font-semibold text-slate-900">MSSV:</span> {siteInfo.mssv}</p>
     <p><span className="font-semibold text-slate-900">Email:</span> {siteInfo.email}</p>
     <p><span className="font-semibold text-slate-900">Địa chỉ:</span> {siteInfo.location}</p>
    </div>
   </section>

    <aside className="rounded-3xl bg-linear-to-br from-slate-900 to-slate-700 p-8 text-white shadow-xl shadow-slate-900/15">
    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Kết nối</p>
    <h2 className="mt-3 text-3xl font-bold">Luôn sẵn sàng trao đổi về project và bài tập</h2>
    <div className="mt-6 space-y-3 text-slate-200">
     <p>GitHub: {siteInfo.github}</p>
     <p>Email: {siteInfo.email}</p>
    </div>
   </aside>
  </div>
 );
}