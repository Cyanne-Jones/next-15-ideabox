'use client'
import { useState } from "react";
import { IdeaForm } from "./components/IdeaForm";
import { IdeaCard } from "./components/IdeaCard";
import type { Card } from "@/utils";

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);

  const saveCard = (newCard: Card) => {
    setCards([...cards, newCard])
  };
  
  return (
    <div 
      className="p-6 max-w-sm m-auto bg-pink-800 rounded-xl shadow-md flex flex-col  items-center justify-items-center">
        <h1 className='m-1 text-xl text-bold'>Ideabox!</h1>
      <IdeaForm saveCard={saveCard}/>

      {cards.length ? cards.map((card: Card) => <IdeaCard key={card.id} card={card} />) : <></>}

    </div>
  );
}
