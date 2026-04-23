'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { guestbookEntries } from '@/src/data/guestbook';

const guestbookSchema = z.object({
  name: z.string().trim().min(2, 'Tên phải có ít nhất 2 ký tự').max(50, 'Tên tối đa 50 ký tự'),
  message: z.string().trim().min(1, 'Nội dung không được để trống').max(500, 'Tin nhắn tối đa 500 ký tự'),
});

export type GuestbookActionState = {
  errors?: {
    name?: string[];
    message?: string[];
    form?: string[];
  };
  success?: boolean;
};

export async function createGuestbookEntry(
  _previousState: GuestbookActionState,
  formData: FormData,
): Promise<GuestbookActionState> {
  const parsed = guestbookSchema.safeParse({
    name: formData.get('name'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    const flattened = parsed.error.flatten().fieldErrors;
    return {
      errors: {
        name: flattened.name,
        message: flattened.message,
      },
    };
  }

  guestbookEntries.unshift({
    id: Date.now().toString(),
    name: parsed.data.name,
    message: parsed.data.message,
    createdAt: new Date().toISOString(),
  });

  revalidatePath('/guestbook');
  revalidatePath('/guestbook/client');

  return { success: true };
}

export async function deleteGuestbookEntry(id: string): Promise<void> {
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return;
  }

  guestbookEntries.splice(index, 1);
  revalidatePath('/guestbook');
  revalidatePath('/guestbook/client');
}