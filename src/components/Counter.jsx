import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const resetCount = () => {

  }
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] p-4'>
      <h1 className='font-bold text-4xl mb-4'>{count}</h1>
      <div className='flex gap-5'>
        <button onClick={()=>setCount((prev) => prev + 1)} className='bg-green-800 font-bold text-white border border-black-700 px-4 py-2'>
          Increase
        </button>
        <button onClick={()=>setCount((prev) => prev - 1)} className='bg-red-800 font-bold text-white border border-black-700 px-4 py-2'>
          Decrease
        </button>
        <button onClick={()=> setCount(0)} className='bg-gray-600 px-4 py-2 font-bold text-white'>
            Reset
        </button>
      </div>
    </div>
  )
}

export default Counter