import React from 'react'

const Cell = ({ value }) => {
  const cellValue = value === 0 ? '' : value
  return (
    <div className="cell">{cellValue}</div>
  )
}

export default Cell
