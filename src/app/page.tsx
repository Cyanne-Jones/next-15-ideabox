'use client'
import { useState } from "react";
import { IdeaForm } from "./components/IdeaForm";
import { IdeaCard } from "./components/IdeaCard";
import { Card, findCard } from "@/utils";

export default function Home() {
  const [cards, setCards] = useState<Card[] | []>([]);

  let localStorageCards;
  


  const saveCard = (newCard: Card) => {

    const newArray = [...cards, newCard]
    setCards(newArray)
    if (typeof window !== undefined) {
      console.log('setting cards to local storage!');
      localStorage.setItem('cards', JSON.stringify(newArray));
      console.log('local storage cards', localStorage.getItem('cards'));
    }
  };

  const favoriteCard = (id: number) => {
    const newArray = [...cards];
    const target = findCard(id, newArray);

    if(target) {
      target.isFavorite = !target.isFavorite;
    };

    setCards(newArray);
    const favorites = newArray.filter(card => card.isFavorite);

    if (typeof window !== undefined) {
      console.log('setting favorites to local storage!');
      localStorage.setItem('favorites', JSON.stringify(favorites))
      console.log('local storage faves', localStorage.getItem('favorites'))
    }
    

  };

  

  const deleteCard = (id: number) => {
    const newArray = [...cards];
    const target = findCard(id, newArray);

    if(target) {
      const index = newArray.findIndex(card => card.id === target.id)
      newArray.splice(index, 1);
      if (typeof window !== undefined) {
        console.log('deleting item from local storage!');
        localStorage.setItem('cards', JSON.stringify(newArray));
        console.log('local storage cards', localStorage.getItem('cards'));
      }
      setCards(newArray);
    };
  };
  
  return (
    <div 
      className="p-6 m-auto bg-pink-800 max-w-lg rounded-xl flex flex-col items-center justify-center"
    >
      <h1 className='m-1 text-xl text-bold'>Ideabox!</h1>
      <IdeaForm saveCard={saveCard}/>

      <div className='flex max-w-lg flex-wrap items-center justify-center'>
        {cards.length ? cards.map((card: Card) => <IdeaCard key={card.id} card={card} favoriteCard={favoriteCard} deleteCard={deleteCard}/>) : <></>}
      </div>
    </div>
  );
}
