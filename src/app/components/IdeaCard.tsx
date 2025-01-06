'use client'

import { Card } from "@/utils";

export const IdeaCard = ({
  card, 
  favoriteCard, 
  deleteCard} 
  : {
    card: Card
    favoriteCard: (id: number) => void
    deleteCard: (id: number) => void
  }) => {

  return (
    <div>
      <button onClick={() => favoriteCard(card.id)}>{card.isFavorite ? '★' : '☆'}</button>
      <button onClick={() => deleteCard(card.id)}>X</button>
      {card.text}
    </div>
  );
};