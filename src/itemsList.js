import React from 'react'
import LineItems from './lineItems'
const itemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
    {items.map((item)=>(
      <LineItems
   
    item={item}
    key ={item.id}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
      />
    ))}
  </ul>
  )
}

export default itemsList