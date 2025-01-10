import Image from "next/image";
import Link from "next/link";

export default async function RequestPage() {

  const getCatPhoto = async () => {
    try {

      const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        cache: 'no-store', // Disable caching for fresh data
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cat data');
      }

      return await response.json()

    } catch (e) {
      console.error(e) 

      // the catch value is technically an unknown, so before checking any data
      // you first need to check if its an instance of the Error object for type safety
      
      if (e instanceof Error && e.message === 'Failed to fetch cat data') {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
          cache: 'no-store'
        });
  
        if (!response.ok) {
          console.error('Failed to re-fetch cat data');
          return
        }

        return await response.json();
      }
      
    }
  }

  const catPhoto = await getCatPhoto()
  const {url, height, width} = catPhoto[0]

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>This is the request page!</h1>
      <Link className='h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700' href='/'>Go Home!</Link>
      <Link href='/favorites' className='h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700'>Go To /favorites</Link>
      <Image
        src={url}
        alt='cat'
        height={height}
        width={width}
        className='max-w-72 max-h-72 rounded-lg'
      />
      <Link 
        className='h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700'
        href='/request'
      >
        Give me another cat!
      </Link>
    </div>
  );
};