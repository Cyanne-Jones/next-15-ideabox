'use client'

import { useState } from "react";
import type { Card } from "@/utils";

type Props = {
  saveCard: (card: Card) => void
};

export const IdeaForm = ({
  saveCard
}: Props) => {
  const [text, setText] = useState('');

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value)
  };

  const saveIdea = () => {
    const idea = {
      text,
      id: Date.now(),
      isFavorite: false,
    };

    saveCard(idea);

    setText('');
  };

  return (
    <div className='w-72 h-600 p-6 bg-pink-400 rounded-xl '>
      <div className='w-full h-32 flex flex-col items-center justify-center'>
        <input 
        className='my-2 p-2 rounded-xl hover:bg-pink-200 text-pink-800'
        type='text' 
        value={text} 
        onChange={handleTextInput} 
        placeholder='Your Idea Here!'
      />
      <button 
        className ='my-2 rounded-xl p-2 bg-purple-300 text-purple-900 cursor-pointer hover:bg-pink-300 ' 
        onClick={saveIdea}
        >
          Save Idea
        </button>
        </div>
    </div>
  );
};