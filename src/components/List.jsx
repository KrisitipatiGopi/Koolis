import React, { useState } from 'react'
const items = ["Laptop", "Smartphone", "Backpack", "Notebook", "Coffee Mug", "Headphones", "Water Bottle", "Desk Lamp", "Keyboard", "Charger"];

const List = () => {
    const [finalItems, setFinalItems] = useState(items)
    const deleteItem = (item) => {

        const filteredItems = finalItems.filter((E) => E !== item);
        setFinalItems(filteredItems)
    }
    

  return (
    <div className = " flex flex-col justify-center items-center p-4 gap-2">
        {finalItems.map((each) => (
            <div key={each} className='flex justify-between w-[200px]'>
                <h1>{each}</h1>
                <button className='ml-10 border border-blue-900 bg-blue-400 px-4 py-2' onClick={()=>deleteItem(each)}>Del</button>
            </div>
        ))}
    </div>
  )
}

export default List