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

  const buttonStyle = 'min-h-8 min-w-8 rounded-lg bg-pink-200 text-purple-700 hover:bg-pink-500 hover:text-purple-900 flex items-center justify-center'

  return (
    <div className='min-h-32 w-32 bg-purple-400 rounded-lg m-2 p-2'>
      <div className='flex justify-between'>
        <button 
          onClick={() => favoriteCard(card.id)}
          className={buttonStyle}
          >
          {card.isFavorite ? '★' : '☆'}
        </button>
        <button 
          onClick={() => deleteCard(card.id)}
          className={buttonStyle}
          >
          X
        </button>
      </div>
      {card.text}
    </div>
  );
};