'use client'

import { useState } from "react";
import { Card } from "@/utils";

export const IdeaCard = ({card} : {card: Card}) => {
  const [ isFavorite, setFavorite ] = useState(false)

  const handleFavoriteClick = () => {
    setFavorite(!isFavorite)
  }

  return (
    <div>
      <button onClick={handleFavoriteClick}>{isFavorite ? '★' : '☆'}</button>
      {card.text}
    </div>
  );
};