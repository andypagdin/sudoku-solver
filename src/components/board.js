import React from 'react'
import SubGrid from './subgrid'

const Board = () => {
  return (
    <div id="board">
      <div className="row">
        <SubGrid />
        <SubGrid />
        <SubGrid />
      </div>
      <div className="row">
        <SubGrid />
        <SubGrid />
        <SubGrid />
      </div>
      <div className="row">
        <SubGrid />
        <SubGrid />
        <SubGrid />
      </div>
    </div>
  )
}

export default Board
