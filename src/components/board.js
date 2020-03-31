import React from 'react'
import Cell from './Cell'

const Board = ({ problem }) => {
  const cells = []
  for (let i = 0; i < problem.length; i++) {
    let row = problem[i]
    for (let x = 0; x < row.length; x++) {
      cells.push(<Cell value={row[x]} />)
    }
  }

  return (
    <div id="board">
      {cells}
    </div>
  )
}

export default Board
