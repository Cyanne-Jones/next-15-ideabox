'use client'

import { useState } from "react";

export const IdeaForm = () => {
  const [text, setText] = useState('');

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value)
  }

  const saveIdea = () => {
    console.log('save!')
  }

  return (
    <div>
      <input type='text' value={text} onChange={handleTextInput}></input>
      <button onClick={saveIdea}>Save Idea</button>
    </div>
  );
};