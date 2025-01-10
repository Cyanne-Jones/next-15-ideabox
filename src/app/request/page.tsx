import Image from "next/image";
import Link from "next/link";

export default async function RequestPage() {

  const fetchKitty = async () => {
    try {

      const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        cache: 'no-store', // Disable caching for fresh data
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cat data');
      }

      return response

    } catch (e) {
      console.error(e) 
      const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        cache: 'no-store', // Disable caching for fresh data
      });
      
      return response;
    }
  }

  const data = await (await fetchKitty()).json()

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>This is the request page!</h1>
      <Link className='h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700' href='/'>Go Home!</Link>
      <Link href='/favorites' className='h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700'>Go To /favorites</Link>
      <Image
        src={data[0].url}
        alt='cat'
        height={data[0].height}
        width={data[0].width}
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