'use client';

import { useState } from 'react';

export default function LikeButton() {
 const [liked, setLiked] = useState(false);
 const [count, setCount] = useState(0);

 const handleLike = () => {
  if (liked) {
   setCount((current) => current - 1);
  } else {
   setCount((current) => current + 1);
  }

  setLiked((current) => !current);
 };

 return (
  <button
   type="button"
   onClick={handleLike}
   className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
    liked
     ? 'border-rose-200 bg-rose-50 text-rose-600'
     : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
   }`}
  >
   <span>{liked ? '❤' : '🤍'}</span>
   <span>{count} lượt thích</span>
  </button>
 );
}