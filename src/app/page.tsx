'use client'
import { useState } from "react";
import { IdeaForm } from "./components/IdeaForm";
import { IdeaCard } from "./components/IdeaCard";
import { Card, findCard } from "@/utils";

export default function Home() {
  const [cards, setCards] = useState<Card[] | []>([]);

  const saveCard = (newCard: Card) => {
    setCards([...cards, newCard])
  };

  const favoriteCard = (id: number) => {
    const newArray = [...cards];
    const target = findCard(id, newArray);

    if(target) {
      target.isFavorite = !target.isFavorite;
    };

    setCards(newArray);

  };

  

  const deleteCard = (id: number) => {
    const newArray = [...cards];
    const target = findCard(id, newArray);

    if(target) {
      const index = newArray.findIndex(card => card.id === target.id)
      newArray.splice(index, 1);
      setCards(newArray);
    };
  };
  
  return (
    <div 
      className="p-6 m-auto bg-pink-800 rounded-xl flex flex-col items-center justify-center"
    >
      <h1 className='m-1 text-xl text-bold'>Ideabox!</h1>
      <IdeaForm saveCard={saveCard}/>

      {cards.length ? cards.map((card: Card) => <IdeaCard key={card.id} card={card} favoriteCard={favoriteCard} deleteCard={deleteCard}/>) : <></>}

    </div>
  );
}
