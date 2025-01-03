import { useState } from "react";

export const IdeaCard = () => {
  const [ isFavorite, setFavorite ] = useState(true)
  const cats = 'meow';

  return (
    <div>
      {cats}
    </div>
  );
};