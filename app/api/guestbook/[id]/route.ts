import { NextResponse } from 'next/server';
import { guestbookEntries } from '@/src/data/guestbook';

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json({ error: 'Không tìm thấy entry' }, { status: 404 });
  }

  const [deletedEntry] = guestbookEntries.splice(index, 1);
  return NextResponse.json(deletedEntry);
}
