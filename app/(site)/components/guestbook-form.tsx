'use client';

import { useActionState, useEffect, useRef } from 'react';
import { createGuestbookEntry, type GuestbookActionState } from '../guestbook/actions';

const initialState: GuestbookActionState = {};

export default function GuestbookForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(createGuestbookEntry, initialState);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Tên</span>
          <input
            name="name"
            placeholder="Nhập tên của bạn"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
          />
          {state.errors?.name ? <p className="text-sm text-red-600">{state.errors.name[0]}</p> : null}
        </label>

        <label className="block space-y-2 text-sm font-medium text-slate-700">
          <span>Lời nhắn</span>
          <input
            name="message"
            placeholder="Viết vài dòng cảm nhận"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
          />
          {state.errors?.message ? <p className="text-sm text-red-600">{state.errors.message[0]}</p> : null}
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? 'Đang gửi...' : 'Gửi lời nhắn'}
        </button>
        {state.success ? <p className="text-sm font-medium text-emerald-700">Đã thêm lời nhắn mới.</p> : null}
      </div>
    </form>
  );
}