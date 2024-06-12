import React, { useState } from 'react'

const Tour = ({tour, removeTour}) => {
    const {id, image, info, price, name} = tour;
    const [readMore, setReadMore] = useState(false);
  return (
    <div key={id} className='p-4 bg-zinc-100 rounded-md space-y-2 flex flex-col items-center'>
        <img className='rounded object-cover h-[350px] w-full' src={image} alt="" />
        <span className='flex space-x-40 justify-center items-center'>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <h2 className='bg-blue-100 rounded-md px-3 py-1 text-sky-600'>${price}</h2>
        </span>
        <p className='text-justify'>{readMore ? info: `${info.substring(0, 200)}...`}
          <button onClick={()=>setReadMore(!readMore)} className='text-blue-700'>
            {readMore ? 'show less': 'read more'}
          </button>
        </p>
        <button onClick={()=>(removeTour(id))} className='border border-red-500 rounded px-4 py-1 text-red-800 text-md font-bold'>Not Interested</button>
    </div>
  )
}

export default Tour
