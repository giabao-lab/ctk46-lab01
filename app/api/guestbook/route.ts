import { NextResponse } from 'next/server';
import { guestbookEntries } from '@/src/data/guestbook';

export async function GET() {
  return NextResponse.json(guestbookEntries);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { name?: string; message?: string };
    const name = body.name?.trim();
    const message = body.message?.trim();

    if (!name || !message) {
      return NextResponse.json(
        { error: 'name và message là bắt buộc' },
        { status: 400 },
      );
    }

    const entry = {
      id: Date.now().toString(),
      name,
      message,
      createdAt: new Date().toISOString(),
    };

    guestbookEntries.unshift(entry);

    return NextResponse.json(entry, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Dữ liệu không hợp lệ' }, { status: 400 });
  }
}
