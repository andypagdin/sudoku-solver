import React from 'react'

const Square = value => {
  return (
    <div className="square">{Math.floor(Math.random() * 10)}</div>
  )
}

export default Square
