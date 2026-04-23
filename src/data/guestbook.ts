export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: '1',
    name: 'Lý Gia Bảo',
    message: 'Chào mừng bạn đến với guestbook của mình!',
    createdAt: '2026-04-23T08:00:00.000Z',
  },
  {
    id: '2',
    name: 'Nguyễn An',
    message: 'Trang portfolio này nhìn rất gọn và dễ đọc.',
    createdAt: '2026-04-23T08:15:00.000Z',
  },
  {
    id: '3',
    name: 'Trần Minh',
    message: 'Phần Server Actions khá rõ ràng, dễ demo trong lớp.',
    createdAt: '2026-04-23T08:30:00.000Z',
  },
];
