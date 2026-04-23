import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/data/posts';
import { getPost, getUser } from '@/src/lib/jsonplaceholder';

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const isNumericId = /^\d+$/.test(id);

  if (isNumericId) {
    const post = await getPost(id);

    if (!post) {
      notFound();
    }

    const user = await getUser(post.userId);

    return (
      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <Link href="/blog" className="text-sm font-semibold text-emerald-700 hover:underline">
          ← Quay lại blog
        </Link>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
            userId: {post.userId}
          </span>
          <span>ID: {post.id}</span>
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{post.title}</h1>
        <p className="mt-4 whitespace-pre-line text-lg leading-8 text-slate-600">{post.body}</p>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">Thông tin tác giả</h2>
          {user ? (
            <div className="mt-4 space-y-2 text-slate-700">
              <p>
                <span className="font-semibold text-slate-900">Name:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Company:</span> {user.company.name}
              </p>
            </div>
          ) : (
            <p className="mt-4 text-slate-600">Không lấy được thông tin tác giả.</p>
          )}
        </section>
      </article>
    );
  }

  const localPost = getPostBySlug(id);

  if (!localPost) {
    notFound();
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <Link href="/blog" className="text-sm font-semibold text-emerald-700 hover:underline">
        ← Quay lại blog
      </Link>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
          {localPost.category}
        </span>
        <span>{localPost.date}</span>
        <span>{localPost.author}</span>
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{localPost.title}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{localPost.excerpt}</p>

      <div className="mt-8 whitespace-pre-line rounded-3xl bg-slate-50 p-6 leading-8 text-slate-700">
        {localPost.content}
      </div>
    </article>
  );
}