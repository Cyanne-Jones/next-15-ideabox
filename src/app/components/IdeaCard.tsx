'use client'

import { Card } from "@/utils";

export const IdeaCard = ({
  card, 
  favoriteCard, 
  deleteCard} 
  : {
    card: Card
    favoriteCard?: (id: number) => void
    deleteCard?: (id: number) => void
  }) => {

  const buttonStyle = 'min-h-8 min-w-8 rounded-lg bg-pink-200 text-purple-700 hover:bg-pink-500 hover:text-purple-900 flex items-center justify-center hover:shadow-md hover:shadow-pink-700'

  return (
    <div className='min-h-32 w-32 bg-purple-400 rounded-lg m-2 p-2 border-2 border-purple-700'>
      <div className='flex justify-between'>
        {favoriteCard && <button 
          onClick={() => favoriteCard(card.id)}
          className={buttonStyle}
          >
          {card.isFavorite ? '★' : '☆'}
        </button>}
        {deleteCard && <button 
          onClick={() => deleteCard(card.id)}
          className={buttonStyle}
          >
          X
        </button>}
      </div>
      {card.text}
    </div>
  );
};