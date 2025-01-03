'use client'

import { useState } from "react";

export const IdeaCard = () => {
  const [ isFavorite, setFavorite ] = useState(true)
  const cats = 'meow';

  const handleFavoriteClick = () => {
    setFavorite(!isFavorite)
  }

  return (
    <div>
      <button onClick={handleFavoriteClick}>{isFavorite ? '★' : '☆'}</button>
      {cats}
    </div>
  );
};