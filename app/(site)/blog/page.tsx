import Link from 'next/link';
import SectionHeading from '../components/section-heading';
import { getPosts } from '@/src/lib/jsonplaceholder';

function shortenBody(body: string, maxLength = 120) {
    return body.length > maxLength ? `${body.slice(0, maxLength)}...` : body;
}

export default async function BlogPage() {
    const posts = await getPosts();
    const visiblePosts = posts.slice(0, 10);

    return (
        <div className="space-y-8">
            <SectionHeading
                eyebrow="Blog"
                title="Danh sách bài viết"
                description="Dữ liệu bài viết được lấy từ JSONPlaceholder bằng Server Component và revalidate 60 giây."
            />

            <div className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
                <p className="text-sm text-slate-600">
                    Tổng số bài viết: <span className="font-semibold text-slate-900">{posts.length}</span>
                </p>
                <p className="text-sm text-slate-500">Hiển thị 10 bài đầu tiên</p>
            </div>

            <div className="grid gap-4">
                {visiblePosts.map((post) => (
                    <article
                        key={post.id}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                            <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                                userId: {post.userId}
                            </span>
                            <span>ID: {post.id}</span>
                        </div>

                        <h2 className="mt-4 text-2xl font-bold text-slate-900 transition-colors hover:text-emerald-700">
                            {post.title}
                        </h2>
                        <p className="mt-3 max-w-3xl text-slate-600">{shortenBody(post.body)}</p>

                        <Link
                            href={`/blog/${post.id}`}
                            className="mt-5 inline-flex rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                        >
                            Đọc thêm
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}