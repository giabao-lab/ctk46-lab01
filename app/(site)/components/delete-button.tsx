import { deleteGuestbookEntry } from '../guestbook/actions';

type DeleteButtonProps = {
  id: string;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <form action={deleteGuestbookEntry.bind(null, id)}>
      <button
        type="submit"
        className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:border-rose-300 hover:bg-rose-100"
      >
        Xóa
      </button>
    </form>
  );
}