import React from 'react'

const List = ({person}) => {
  return (
    <div>
      {
        person.map(people => {
            const {id, name, age, image} = people;
            return (
                <div key={id} className='flex items-center gap-4'>
                <img src={image} alt={name} className='w-20 h-20 object-cover rounded-full'/>
                <div>
                  <h1 className='text-xl font-bold'> {name} </h1>
                  <p className='text-gray-500'> {age} years </p>
                </div>
                </div>
            )
            
        })
      }
    </div>
  )
}

export default List
