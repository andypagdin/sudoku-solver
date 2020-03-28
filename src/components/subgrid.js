import React from 'react'
import Square from './square'

const SubGrid = ({ grid }) => {
  const subgrid = []
  for (let i=0; i < grid.length; i++) {
    subgrid.push(<Square value={grid[i]} />)
  }

  return (
    <div className="subgrid">
      {subgrid}
    </div>
  )
}

export default SubGrid
