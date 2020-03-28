import React from 'react'
import Square from './square'

const SubGrid = () => {
  return (
    <div className="subgrid">
      <div className="subgrid-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="subgrid-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="subgrid-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default SubGrid
