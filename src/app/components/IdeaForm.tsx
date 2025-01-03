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
      id: Date.now()
    };

    saveCard(idea);

    setText('');
  };

  return (
    <div>
      <input type='text' value={text} onChange={handleTextInput}></input>
      <button onClick={saveIdea}>Save Idea</button>
    </div>
  );
};