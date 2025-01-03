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
    <div className="">
      <IdeaForm saveCard={saveCard}/>

      {cards.length ? cards.map((card: Card) => <IdeaCard key={card.id} card={card} />) : <></>}

    </div>
  );
}
