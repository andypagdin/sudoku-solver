const saveEmptyPositions = board => {
  const emptyPositions = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        emptyPositions.push([i, j])
      }
    }
  }
  return emptyPositions
}

const checkRow = (board, row, value) => {
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false
    }
  }
  return true
}

const checkColumn = (board, column, value) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] === value) {
      return false
    }
  }
  return true
}

const checkSquare = (board, column, row, value) => {
  // save the upper left
  let columnCorner = 0
  let rowCorner = 0
  const squareSize = 3

  // find the left most column
  while (column >= columnCorner + squareSize) {
    columnCorner += squareSize
  }

  // find the upper most row
  while (row >= rowCorner + squareSize) {
    rowCorner += squareSize
  }

  // iterate through each row and column
  // return false if match is found
  for (let i = rowCorner; i < rowCorner + squareSize; i++) {
    for (let j = columnCorner; j < columnCorner + squareSize; j++) {
      if (board[i][j] === value) {
        return false
      }
    }
  }
  return true
}

const checkValue = (board, column, row, value) => {
  if (checkRow(board, row, value) &&
      checkColumn(board, column, value) &&
      checkSquare(board, column, row, value)) {
    return true
  }
  return false
}

const solvePuzzle = (board, emptyPositions = null) => {
  if (!emptyPositions) {
    emptyPositions = saveEmptyPositions(board)
  }

  for (let i = 0; i < emptyPositions.length;) {
    const row = emptyPositions[i][0]
    const column = emptyPositions[i][1]
    let value = board[row][column] + 1
    let found = false

    while (!found && value <= 9) {
      if (checkValue(board, column, row, value)) {
        found = true
        board[row][column] = value
        i++
      } else {
        value++
      }
    }

    if (!found) {
      board[row][column] = 0
      i--
    }
  }

  return board
}

export default {
  saveEmptyPositions,
  checkRow,
  checkColumn,
  checkSquare,
  checkValue,
  solvePuzzle
}
