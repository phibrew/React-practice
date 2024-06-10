import React, { useState } from 'react'
import Data from './Data'
import List from './components/List';
function App() {
  const [people, setPeople] = useState(Data);
  const handleClick = ()=>(setPeople([]));
  return (
    <>
      <div className='w-full h-screen bg-pink-400 flex justify-center items-center'>
        <div className='w-[30%] gap-6 bg-zinc-200 rounded p-6 shadow-2xl flex items-center justify-center flex-col'>
          <p> {people.length} birthdays today </p>
            {/* <h1 className='text-2xl hover:font-bold'> List Components </h1> */}
            <List person={people}/>
            <button onClick={handleClick} className='w-1/2 bg-pink-400 text-white text-xl rounded'> Clear All </button>
        </div>
      </div>
    </>
  )
}

export default App
