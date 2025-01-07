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
    <div>
      this is the favorites page! 
      <Link className='cursor-pointer text-pink-500 hover:text-purple-200' href='/'>Home!</Link>

      <div className='flex max-w-lg flex-wrap items-center justify-center'>
        {favorites.length ? JSON.parse(favorites || '').map((card: Card) => <IdeaCard key={card.id} card={card}/>) : <></>}
      </div>
    </div>
  )
}

export default Favorites;