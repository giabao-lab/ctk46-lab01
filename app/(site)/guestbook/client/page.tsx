'use client';

import { useEffect, useState, type FormEvent } from 'react';

type GuestbookEntry = {
  id: string;
  name: string;
  message: string;
  createdAt: string;
};

export default function GuestbookClientPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function fetchEntries() {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('/api/guestbook');

      if (!response.ok) {
        throw new Error('Không thể tải dữ liệu guestbook');
      }

      const data = (await response.json()) as GuestbookEntry[];
      setEntries(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void fetchEntries();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setSubmitting(true);
      setError('');

      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? 'Không thể tạo lời nhắn');
      }

      setName('');
      setMessage('');
      await fetchEntries();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    try {
      const response = await fetch(`/api/guestbook/${id}`, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error('Không thể xóa lời nhắn');
      }

      await fetchEntries();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi');
    }
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Guestbook</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Phiên bản Client Component</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Trang này dùng `useState` + `useEffect` để gọi API routes `/api/guestbook`.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Tên</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
              placeholder="Nhập tên của bạn"
            />
          </label>
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>Lời nhắn</span>
            <input
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400 focus:bg-white"
              placeholder="Nhập lời nhắn"
            />
          </label>
        </div>

        {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? 'Đang gửi...' : 'Gửi lời nhắn'}
        </button>
      </form>

      <section className="space-y-4">
        <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <p className="text-sm text-slate-600">
            Tổng số lời nhắn: <span className="font-semibold text-slate-900">{entries.length}</span>
          </p>
          <button type="button" onClick={fetchEntries} className="text-sm font-semibold text-emerald-700 hover:underline">
            Làm mới
          </button>
        </div>

        {loading ? <p className="text-slate-500">Đang tải dữ liệu...</p> : null}

        <div className="grid gap-4">
          {entries.map((entry) => (
            <article key={entry.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">{entry.name}</span>
                    <span>{new Date(entry.createdAt).toLocaleString('vi-VN')}</span>
                  </div>
                  <p className="text-slate-700">{entry.message}</p>
                </div>

                <button
                  type="button"
                  onClick={() => void handleDelete(entry.id)}
                  className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
                >
                  Xóa
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}