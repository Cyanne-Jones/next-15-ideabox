export const ConfirmationDialog = ({
  clearCards,
  setOpen
} : {
  clearCards: () => void
  setOpen: (state: boolean) => void
}) => {
 return (
    <div className='bg-opacity-80 bg-purple-900 h-screen w-screen z-index-50 absolute m-0 flex flex-col items-center justify-center'>
      <div className='h-24 w-72 rounded-xl flex flex-col items-center justify-center bg-purple-600 text-pink-300 border-2 border-purple-900'>
        Are you sure?
        <div className='flex items-center justify-center'>
          <button 
            className='h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700'
            onClick={() => setOpen(false)}>No</button>
          <button 
            className='h-8 min-w-1/2 m-4 p-1 cursor-pointer rounded-lg bg-purple-300 text-purple-700 hover:bg-pink-300 hover:shadow-md hover:shadow-pink-700'
            onClick={clearCards}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
};