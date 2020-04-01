import Solver from '../src/solver'

describe('Sudoku Solver', () => {
  const board = [
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

  const expectedSolution = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],
    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],
    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]
  ]

  describe('save empty positions function', () => {
    it('should save all of the empty positions in a board', () => {
      const emptyPositions = Solver.saveEmptyPositions(board)
      const expectedPositions = [
        [0,0],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,0],[1,1],
        [1,2],[1,5],[2,0],[2,1],[2,2],[2,6],[2,7],[2,8],[3,0],
        [3,1],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[4,4],[4,5],
        [4,7],[4,8],[5,1],[5,3],[5,4],[5,5],[5,8],[6,1],[6,2],
        [6,4],[6,6],[6,8],[7,1],[7,3],[7,4],[7,5],[7,8],[8,1],
        [8,2],[8,3],[8,5],[8,6],[8,7],[8,8]
      ]

      expect(emptyPositions).toHaveLength(51)
      expect(emptyPositions).toEqual(expectedPositions)
    })
  })

  describe('check row function', () => {
    it('should check that each value in the row does not equal the input', () => {
      expect(Solver.checkRow(board, 0, 2)).toBeTruthy()
      expect(Solver.checkRow(board, 0, 9)).toBeFalsy()
    })
  })

  describe('check column function', () => {
    it('should check that each value in the column does not equal the input', () => {
      expect(Solver.checkColumn(board, 0, 2)).toBeTruthy()
      expect(Solver.checkColumn(board, 0, 5)).toBeFalsy()
    })
  })

  describe('check 3x3 square function', () => {
    it('should check that eaach value in a 3x3 square does not equal the input', () => {
      expect(Solver.checkSquare(board, 2, 2, 1)).toBeTruthy()
      expect(Solver.checkSquare(board, 7, 7, 9)).toBeTruthy()

      expect(Solver.checkSquare(board, 2, 2, 9)).toBeFalsy()
      expect(Solver.checkSquare(board, 7, 7, 1)).toBeFalsy()
    })
  })

  describe('check value function', () => {
    it('should check whether a value is valid for a given postion', () => {
      expect(Solver.checkValue(board, 0, 0, 2)).toBeTruthy()
      expect(Solver.checkValue(board, 3, 7, 3)).toBeTruthy()

      expect(Solver.checkValue(board, 0, 0, 9)).toBeFalsy()
      expect(Solver.checkValue(board, 3, 7, 1)).toBeFalsy()
    })
  })

  describe('solve puzzle function', () => {
    it('should find a solution to the puzzle passed in', () => {
      const emptyPositions = Solver.saveEmptyPositions(board)
      const result = Solver.solvePuzzle(board, emptyPositions)
      expect(result).toEqual(expectedSolution)
    })
  })
})
