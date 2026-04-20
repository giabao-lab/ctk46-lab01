import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, posts } from '@/data/posts';
import LikeButton from '../../components/like-button';

type BlogPostPageProps = {
 params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
 return posts.map((post) => ({ slug: [post.slug] }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
 const { slug } = await params;
 const postSlug = slug.join('/');
 const post = getPostBySlug(postSlug);

 if (!post) {
  notFound();
 }

 return (
  <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
    <Link href="/blog" className="text-sm font-semibold text-emerald-700 hover:underline">
    ← Quay lại danh sách bài viết
   </Link>

   <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
     <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">{post.category}</span>
    <span>{post.date}</span>
    <span>{post.author}</span>
   </div>

   <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{post.title}</h1>
   <p className="mt-4 text-lg leading-8 text-slate-600">{post.excerpt}</p>

   <div className="mt-8 rounded-3xl bg-slate-50 p-6 text-slate-700 leading-8 whitespace-pre-line">
    {post.content}
   </div>

  <div className="mt-8 border-t border-slate-200 pt-6">
   <LikeButton />
  </div>
  </article>
 );
}