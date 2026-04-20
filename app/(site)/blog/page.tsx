import Link from 'next/link';
import SectionHeading from '../components/section-heading';
import { posts } from '@/data/posts';

export default function BlogPage() {
 return (
  <div className="space-y-8">
   <SectionHeading eyebrow="Blog" title="Danh sách bài viết" description="Các bài viết mẫu được tạo từ dữ liệu tĩnh và chuyển sang trang chi tiết qua dynamic route." />

   <div className="grid gap-4">
    {posts.map((post) => (
     <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
   <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">{post.category}</span>
       <span>{post.date}</span>
   <span>{post.author}</span>
      </div>
      <h2 className="mt-4 text-2xl font-bold text-slate-900">{post.title}</h2>
      <p className="mt-3 max-w-3xl text-slate-600">{post.excerpt}</p>
  <span className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline">Đọc thêm →</span>
     </Link>
    ))}
   </div>
  </div>
 );
}