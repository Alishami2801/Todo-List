import React from 'react'

const Header = ({tittle}) => {
  return (
    <header><h1>{tittle}</h1></header>)
}
Header.defaultProps = {
  tittle:"TO Do List"
}
export default Header