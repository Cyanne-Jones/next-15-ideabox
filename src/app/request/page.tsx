import Image from "next/image";

export default async function RequestPage() {

  const response = await fetch('https://api.thecatapi.com/v1/images/search', {
    cache: 'no-store', // Disable caching for fresh data
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cat data');
  }

  const data = await response.json();

  return (
    <div>
      <h1>This is the request page!</h1>
      <Image
        src={data[0].url}
        alt='cat'
        height={data[0].height}
        width={data[0].width}
      />
    </div>
  );
};