import React from 'react'
import Pagination from "./Pagination"

function Favourites() {
  return (
    <>
    <div className='mt-6 flex space-x-2 justify-center'>
      <button className='py-1 px-2 bg-yellow-500 rounded-lg text-lg font-bold '>All Genre</button>
      <button className='py-1 px-2 bg-gray-300 rounded-lg text-lg font-bold hover:bg-yellow-500 '>All Genre</button>
    </div>

    <div className='mt-6 flex justify-center space-x-3'>
      <input type="text" className='border-2 py-1 px-2 text-center' placeholder='Search'></input>
      <input type="number" className='border-2 py-1 px-2 text-center' value={1}></input>
    </div>
    

    <Pagination></Pagination>
    </>
  )
}

export default Favourites