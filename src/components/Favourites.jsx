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
    
    <DataTable></DataTable>

    <Pagination></Pagination>
    </>
  )
}


function DataTable(){
  return (
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">
          <div className='flex'>
            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" class="mr-2 cursor-pointer"></img>
                 <div className='mr-2'>Rating </div> 
            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" class="mr-2 cursor-pointer"></img>
          </div>          
        </th>

        <th scope="col" class="px-6 py-4 font-medium text-gray-900">
        <div className='flex'>
            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" class="mr-2 cursor-pointer"></img>
                 <div className='mr-2'>Popularity </div> 
            <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" class="mr-2 cursor-pointer"></img>
          </div>  
        </th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Genre</th>
        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Remove</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
      <tr class="hover:bg-gray-50">
        <th class="flex gap-3 px-6 py-4 font-normal text-gray-900 items-center">
            <img
              class="h-[5rem] w-[8rem]  object-fit "
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          <div class="text-sm">
            <div class="font-medium text-gray-700">Steven Jobs</div>
          </div>
        </th>
        <td class="px-6 pl-12 py-4">
          10
        </td>
        <td class="px-6 pl-12 py-4 ">10</td>
        <td class="px-6 py-4">
          <div class="flex gap-2">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              Action
            </span>
          </div>
        </td>
        <td class="py-4">
        <span
              class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
            >
              Delete
            </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Favourites