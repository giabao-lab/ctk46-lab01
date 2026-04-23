import type { Post, User } from '@/src/types/post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getPosts(): Promise<Post[]> {
  return fetchJson<Post[]>('/posts');
}

export async function getPost(id: string): Promise<Post | null> {
  try {
    return await fetchJson<Post>(`/posts/${id}`);
  } catch {
    return null;
  }
}

export async function getUser(userId: number): Promise<User | null> {
  try {
    return await fetchJson<User>(`/users/${userId}`);
  } catch {
    return null;
  }
}
