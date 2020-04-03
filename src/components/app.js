import React, { useState } from 'react'
import Board from './Board'
import Solver from '../solver'

const App = () => {
  const initialProblem = [
    [0, 9, 0, 0, 0, 0, 0, 0, 6],
    [0, 0, 0, 9, 6, 0, 4, 8, 5],
    [0, 0, 0, 5, 8, 1, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0],
    [5, 1, 7, 2, 0, 0, 9, 0, 0],
    [6, 0, 2, 0, 0, 0, 3, 7, 0],
    [1, 0, 0, 8, 0, 4, 0, 2, 0],
    [7, 0, 6, 0, 0, 0, 8, 1, 0],
    [3, 0, 0, 0, 9, 0, 0, 0, 0]
  ]

  const [problem, setProblem] = useState(initialProblem)

  const handleClick = () => {
    const result = Solver.solvePuzzle(problem)
    setProblem([...result])
  }

  return (
    <div id="container">
      <Board problem={problem} />
      <div id="controls">
        <button class="solveBtn" onClick={handleClick}>Solve</button>
      </div>
    </div>
  )
}

export default App
