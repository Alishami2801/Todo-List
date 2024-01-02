import React from 'react'
import ItemsList from './itemsList'
const Content = ({items,handleCheck,handleDelete}) => {
  return (
    
    <main>
      {(items.length)?(
        <ItemsList
        items={items}

    handleCheck={handleCheck}
    handleDelete={handleDelete}
        />
      ):(<p style={{marginTop:"50px",color:'blue',fontSize:'40px'}}> Your List is Empty</p>)}
    </main>
  )
  }
  
export default Content