'use client'
import { useState, useEffect } from "react";
import { IdeaForm } from "./components/IdeaForm";
import { IdeaCard } from "./components/IdeaCard";
import { Card, findCard } from "@/utils";
import Link from "next/link";
import { ConfirmationDialog } from "./components/ConfirmationDialog";
import { motion } from "motion/react";
import JSConfetti from "js-confetti";

export default function Home() {
  const [cards, setCards] = useState<Card[] | []>([]);
  const [ displayCards, setDisplayCards ] = useState<Card[]>([]);
  const [ isFilteredByFavorites, setIsFilteredByFavorites ] = useState<boolean>(false);
  const [ isDialogOpen, setIsDialogOpen ] = useState<boolean>(false);
  const jsConfetti = new JSConfetti()

  useEffect(() => {

    if(isFilteredByFavorites) {
      setDisplayCards(cards.filter(card => card.isFavorite));
      return;
    };

    setDisplayCards(cards);

  }, [cards, isFilteredByFavorites]);

  useEffect(() => {

    try {
      if (typeof window !== undefined) {
        const localStorageCards = localStorage.getItem('cards');
        const parsedCards = localStorageCards ? JSON.parse(localStorageCards) : [];
        setCards(parsedCards);
      };
    } catch(e) {
      console.error('error setting local storage', e);
    };

  }, []);
  
  const saveCard = (newCard: Card) => {

    const newArray = [...cards, newCard]
    setCards(newArray)
    if (typeof window !== undefined) {
      localStorage.setItem('cards', JSON.stringify(newArray));
      jsConfetti.addConfetti({
        confettiColors: [
          '#f8bbd0', '#ba68c8', '#00bcd4'
        ]
      });
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
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    

  };

  const deleteCard = (id: number) => {
    const newArray = [...cards];
    const target = findCard(id, newArray);

    if(target) {
      const index = newArray.findIndex(card => card.id === target.id)
      newArray.splice(index, 1);
      if (typeof window !== undefined) {
        localStorage.setItem('cards', JSON.stringify(newArray));
      }
      setCards(newArray);
    };
  };

  const filterFavorites = () => {
    setIsFilteredByFavorites(!isFilteredByFavorites);
  };

  const clearCards = () => {
    if (typeof window !== undefined) {
      localStorage.setItem('cards', '');
      setCards([]);
      setDisplayCards([]);
      setIsDialogOpen(false);
    }
  }
  
  return (
    <motion.div
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      className="p-6 m-auto bg-pink-800 max-w-lg rounded-xl flex flex-col items-center justify-center"
    >
      <h1 className='m-1 text-xl text-bold'>Ideabox!</h1>
      <IdeaForm saveCard={saveCard}/>

      <div className='flex items-center justify-center'>
      {cards.length > 0 && <button 
        onClick={filterFavorites}
        className = {`min-h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg ${isFilteredByFavorites ? 'bg-pink-300 text-pink-700 hover:bg-purple-300' : 'bg-purple-300 text-purple-700 hover:bg-pink-300'}`}
      >
        {isFilteredByFavorites ? 'Show All Ideas' : 'Filter By Favorites'} 
      </button>}

      {cards.length > 0 && <button 
        onClick={() => setIsDialogOpen(true)}
        className = 'min-h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700'
      >
        Clear all cards
      </button>}

      <Link href='/favorites' className='min-h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700'>Go To /favorites</Link>
      <Link href='/request' className='min-h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700'>Go To /request</Link>
      </div>

      <div className='flex max-w-lg flex-wrap items-center justify-center'>
         {displayCards.length > 0 && displayCards.map((card: Card) => <IdeaCard key={card.id} card={card} favoriteCard={favoriteCard} deleteCard={deleteCard}/>)}
       </div>
       {isDialogOpen && <ConfirmationDialog setOpen={setIsDialogOpen} clearCards={clearCards} />}
    </motion.div>
  );
};
