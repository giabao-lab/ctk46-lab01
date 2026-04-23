import Link from 'next/link';
import { guestbookEntries } from '@/src/data/guestbook';
import GuestbookForm from '../components/guestbook-form';
import DeleteButton from '../components/delete-button';

export default function GuestbookPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Guestbook</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Sổ lưu bút</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Đây là phiên bản Server Component: render trực tiếp từ data in-memory và cập nhật lại qua Server Actions.
        </p>
        <div className="mt-5">
          <Link href="/guestbook/client" className="text-sm font-semibold text-emerald-700 hover:underline">
            Mở phiên bản client demo →
          </Link>
        </div>
      </section>

      <GuestbookForm />

      <section className="space-y-4">
        <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <p className="text-sm text-slate-600">
            Tổng số lời nhắn: <span className="font-semibold text-slate-900">{guestbookEntries.length}</span>
          </p>
          <p className="text-sm text-slate-500">Dữ liệu đồng bộ bằng Server Actions</p>
        </div>

        <div className="grid gap-4">
          {guestbookEntries.map((entry) => (
            <article key={entry.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">{entry.name}</span>
                    <span>{new Date(entry.createdAt).toLocaleString('vi-VN')}</span>
                  </div>
                  <p className="text-slate-700">{entry.message}</p>
                </div>
                <DeleteButton id={entry.id} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}