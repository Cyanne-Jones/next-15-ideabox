export type Card = {
  text: string
  id: number
  isFavorite: boolean
};

export const findCard = (id: number, cards: Card[]) => {

  const cardToFind = cards.find(card => card.id === id);
  return cardToFind || null;

};