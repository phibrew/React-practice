import React from 'react'
import Tour from './Tour'

const Tours = ({tour, handleClick}) => {
  
  return (
    <div className='w-[50%] p-5 rounded flex flex-col items-center'>
        <h1 className="text-3xl font-bold text-center">Our Tours</h1>
        <hr className='h-1 w-[10%] bg-cyan-500 mt-3'/>
        <div className='mt-6 space-y-4'>
          {tour.map((ele)=>{
              return <Tour key={ele.id} tour={ele} removeTour={handleClick}/>
          })}
        </div>
    </div>
  )
}

export default Tours
