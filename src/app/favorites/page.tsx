'use client'
import Link from "next/link";
import { IdeaCard } from "../components/IdeaCard";
import { Card } from "@/utils";

const Favorites = () => {

  let favorites = ''

  if (typeof window !== undefined) {
    try {
    favorites = localStorage.getItem('favorites') || '';
    const cards = localStorage.getItem('cards');
    } catch(e) {
      console.log(e)
    }
  }
  

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Favorites Page!</h1>
      <Link className='h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300' href='/'>Go Home!</Link>
      <Link className='h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300' href='/request'>Go to /request</Link>

      <div className='flex max-w-lg flex-wrap items-center justify-center'>
        {favorites.length ? JSON.parse(favorites || '').map((card: Card) => <IdeaCard key={card.id} card={card}/>) : <></>}
      </div>
    </div>
  )
}

export default Favorites;