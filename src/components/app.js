import React, { Fragment, useState } from 'react'
import Board from './Board'
import { solve } from '../solve'

const App = () => {
  const initialProblem = [
    [0, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 0, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 0, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ]

  const [problem, setProblem] = useState(initialProblem)

  return (
    <Fragment>
      <Board problem={problem} />
      <button onClick={() => solve(problem)}>Solve</button>
    </Fragment>
  )
}

export default App
