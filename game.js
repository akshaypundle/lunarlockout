class LunarLockoutSolver {
  static randomBoards = [] // each elements is [board, solution]
  static colors = ["orange", "green", "yellow", "red", "purple", "blue"]
  static directions = {
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  static generateRandomBoardWithDifficulty(difficulty, steps) {
    for (let i = 0; i < randomBoards.length; i++) {
      const element = randomBoards[i]
      if (element[1].length >= difficulty * 0.66) {
        randomBoards.splice(i, 1)
        return element[0]
      }
    }

    if (difficulty < 1) difficulty = 1
    if (difficulty > 10) difficulty = 10
    while (true) {
      board = generateRandomBoard()
      solution = solveIterativeDescent(board, steps)
      if (solution != null && solution.length >= difficulty * 0.66) {
        return board
      } else if (solution != null) {
        randomBoards.add([board, solution])
      }
    }
  }

  static generateRandomBoard() {
    vals = new Set()
    while (vals.size < this.colors.length) {
      vals.add(getRandomInt(25))
    }
    ret = []
    for (val of vals.values()) {
      ret.push([Math.floor(val / 5), val % 5])
    }
    return ret
  }

  static solveIterativeDescent(board, steps) {
    let solution = null
    for (const step of steps) {
      solution = this.solve(board, step)
      if (solution != null) {
        return solution
      }
    }
    return null
  }

  static solve(board, steps) {
    if (this.isSolved(board)) return []
    if (steps > 0) {
      for (let color = 0; color < this.colors.length; color++) {
        if (board[color] == null) continue
        for (const direction in this.directions) {
          if (this.canMove(board, color, direction)) {
            const boardCopy = JSON.parse(JSON.stringify(board))
            this.move(boardCopy, color, direction)
            if (this.isSolved(boardCopy)) {
              return [[this.colors[color], direction]]
            } else {
              const solution = this.solve(boardCopy, steps - 1)
              if (solution != null) {
                solution.push([this.colors[color], direction])
                return solution
              }
            }
          }
        }
      }
    }
    return null
  }

  static move(board, color, direction) {
    const position = board[color]
    if (position == null) {
      console.log("position is null 0")
    }
    let found = null
    switch (direction) {
      case this.directions.UP:
        for (let i = 0; i < this.colors.length; i++) {
          if (board[i] == null) continue
          if (
            i != color &&
            board[i][1] == position[1] &&
            board[i][0] < position[0]
          ) {
            if (found == null || board[i][0] > found) {
              // find greatest row above our row
              found = board[i][0]
            }
          }
        }
        if (found != null && found < position[0] - 1) {
          board[color][0] = found + 1
        } else if (found == null) {
          console.log("found nothing 0")
        }
        break
      case this.directions.DOWN:
        for (let i = 0; i < this.colors.length; i++) {
          if (board[i] == null) continue
          if (
            i != color &&
            board[i][1] == position[1] &&
            board[i][0] > position[0]
          ) {
            if (found == null || board[i][0] < found) {
              // find smallest row below our row
              found = board[i][0]
            }
          }
        }
        if (found != null && found > position[0] + 1) {
          board[color][0] = found - 1
        } else if (found == null) {
          console.log("found nothing 1")
        }
        break
      case this.directions.LEFT:
        for (let i = 0; i < this.colors.length; i++) {
          if (board[i] == null) continue
          if (
            i != color &&
            board[i][0] == position[0] &&
            board[i][1] < position[1]
          ) {
            if (found == null || board[i][1] > found) {
              // find greatest col before ours
              found = board[i][1]
            }
          }
        }
        if (found != null && found < position[1] - 1) {
          board[color][1] = found + 1
        } else if (found == null) {
          console.log("found nothing 2")
        }
        break
      case this.directions.RIGHT:
        for (let i = 0; i < this.colors.length; i++) {
          if (board[i] == null) continue
          if (
            i != color &&
            board[i][0] == position[0] &&
            board[i][1] > position[1]
          ) {
            if (found == null || board[i][1] < found) {
              // find smallest col after ours
              found = board[i][1]
            }
          }
        }
        if (found != null && found > position[1] + 1) {
          board[color][1] = found - 1
        } else if (found == null) {
          console.log("found nothing 3")
        }
        break
    }
  }

  static getMoves(board, color) {
    moves = []
    position = board[color]
    if (position == null) {
      return []
    }
    let addup = true
    let addleft = true
    let addright = true
    let adddown = true
    for (let i = 0; i < this.colors.length; i++) {
      if (board[i] == null) continue
      if (
        addup &&
        i != color &&
        board[i][1] == position[1] &&
        board[i][0] < position[0] - 1
      ) {
        moves.push(this.directions.UP)
        addup = false
      }
      if (
        adddown &&
        i != color &&
        board[i][1] == position[1] &&
        board[i][0] > position[0] + 1
      ) {
        moves.push(this.directions.DOWN)
        adddown = false
      }
      if (
        addleft &&
        i != color &&
        board[i][0] == position[0] &&
        board[i][1] < position[1] - 1
      ) {
        moves.push(this.directions.LEFT)
        addleft = false
      }
      if (
        addright &&
        i != color &&
        board[i][0] == position[0] &&
        board[i][1] > position[1] + 1
      ) {
        moves.push(this.directions.RIGHT)
        addright = false
      }
    }

    return moves
  }

  static canMove(board, color, direction) {
    const position = board[color]
    if (position == null) {
      console.log("position is null 0")
    }

    // some optimizations, we can immediately disregard these moves
    if (position[0] <= 1 && direction == this.directions.UP) return false
    if (position[0] >= 3 && direction == this.directions.DOWN) return false
    if (position[1] <= 1 && direction == this.directions.LEFT) return false
    if (position[1] >= 3 && direction == this.directions.RIGHT) return false
    for (let i = 0; i < this.colors.length; i++) {
      if (board[i] == null) continue
      if (i != color && this.canBlockWithAMove(board, color, i, direction))
        return true
    }
    return false
  }

  // does the blocker block the mover in the direction?
  // note that this will also check if there is actually a move. if the
  // blocker is right next to the mover, and it blocks it, but there
  // is no move, then the return value will be false.
  static canBlockWithAMove(board, moverColor, blockerColor, direction) {
    const position = board[moverColor]

    switch (direction) {
      case this.directions.UP:
        if (
          board[blockerColor][1] == position[1] &&
          board[blockerColor][0] < position[0] - 1
        )
          return true
        break
      case this.directions.DOWN:
        if (
          board[blockerColor][1] == position[1] &&
          board[blockerColor][0] > position[0] + 1
        )
          return true
        break
      case this.directions.LEFT:
        if (
          board[blockerColor][0] == position[0] &&
          board[blockerColor][1] < position[1] - 1
        )
          return true
        break
      case this.directions.RIGHT:
        if (
          board[blockerColor][0] == position[0] &&
          board[blockerColor][1] > position[1] + 1
        )
          return true
        break
    }
    return false
  }

  static isSolved(board) {
    return board[3][0] == 2 && board[3][1] == 2
  }
}

;(function () {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]
  let selected = [0, 0]
  let shouldMoveColor = false
  let gameOver = false
  let youDidIt = false
  let level = 0

  const uiColors = [
    "white",
    "orange",
    "green",
    "yellow",
    "red",
    "purple",
    "blue",
  ]

  // boards gives the position of each of the above uiColors on the board.
  // the entries start with orange, while is in the uiColors array for convenience.
  // for example,
  //  [[0, 4], [1, 2], [3, 3], [4, 4], [2, 1]], means:
  //  	orange is in position [0, 4]
  //  	green is in position [1, 2]
  // and so on.
  //
  // prettier-ignore
  const boards = [
    [[0, 4], [1, 2], [3, 3], [4, 4], [2, 1]],
    [[0, 2], [1, 4], [3, 3], [4, 1], [2, 1]],
    [[0, 3], [1, 1], [4, 1], [4, 4], [3, 3]],
    [[0, 0], [0, 4], [3, 2], [4, 1], [1, 3]],
    [[0, 3], [1, 1], , [4, 1], [4, 3]],
    [[0, 0], [3, 4], , [0, 2], [4, 1]],
    [[0, 2], [1, 0], [4, 3], [4, 1], [2, 3]],
    [[0, 0], [0, 3], [4, 0], [3, 3], [1, 1]],
    [[0, 4], [2, 2], [4, 3], [0, 2], [3, 1]],
    [[1, 1], [2, 4], [4, 2], [4, 4], [4, 0]],
    [[0, 2], [1, 0], [2, 2], [1, 2], [1, 4], [3, 2]],
    [[0, 1], [1, 4], , [4, 4], [4, 1]],
    [[0, 1], [1, 3], [4, 2], [3, 3], [3, 0]],
    [[0, 2], [1, 4], [3, 3], [4, 1], [2, 0], [4, 0]],
    [[0, 4], [1, 1], [3, 2], [4, 4], [2, 4]],
    [[0, 0], [2, 1], [4, 1], [0, 2], [2, 4]],
    [[0, 2], [0, 4], [3, 3], [4, 1], [2, 1]],
    [[4, 0], [4, 2], , [0, 2], [4, 4]],
    [[0, 1], [1, 2], [3, 0], [4, 4], [2, 3], [4, 2]],
    [[0, 1], [1, 4], [4, 1], [3, 3], [2, 0]],
    [[1, 2], [2, 2], [3, 0], [0, 2], [2, 4], [4, 3]],
    [[1, 0], [1, 4], [4, 0], [4, 4], [3, 3]],
    [[0, 1], [1, 0], [3, 4], [4, 1], [1, 3]],
    [[1, 3], [2, 1], [4, 4], [4, 0], [4, 3]],
    [[1, 0], [1, 2], [4, 4], [4, 1], [1, 3]],
    [[0, 0], [1, 4], [3, 3], [0, 2], [2, 0]],
    [[0, 1], [0, 4], [2, 3], [4, 4], [2, 0], [4, 0]],
    [[0, 1], [0, 4], [3, 0], [4, 4], [2, 4]],
    [[0, 0], [0, 4], [4, 4], [0, 2], [4, 0]],
    [[1, 0], [1, 4], [4, 1], [0, 2], [2, 0], [4, 3]],
    [[0, 0], [0, 2], [2, 0], [3, 3], [1, 4], [4, 1]],
    [[0, 1], [1, 4], [4, 2], [4, 1], [4, 0]],
    [[0, 0], [0, 1], [3, 0], [4, 4], [1, 4], [4, 3]],
    [[0, 2], [0, 4], [3, 3], [4, 4], [2, 0], [4, 0]],
    [[0, 0], [0, 4], [4, 0], [0, 2], [1, 2], [4, 4]],
    [[1, 0], [1, 4], [3, 4], [0, 2], [3, 0], [4, 2]],
    [[0, 0], [0, 3], [3, 0], [3, 3], [0, 4]],
    [[0, 2], [0, 4], [2, 1], [4, 1], [2, 0], [4, 4]],
    [[0, 0], [0, 2], [2, 0], [4, 4], [0, 4], [4, 0]],
    [[0, 0], [0, 2], [3, 4], [4, 1], [0, 4]],
  ];
  let undoState = []

  function initBoard() {
    const container = document.getElementById("container")
    container.innerHTML = ""
    selected = [0, 0]
    gameOver = false
    youDidIt = false
    shouldMoveColor = false
    undoState = []

    if (level >= boards.length) {
      container.innerText = "You have finished all the levels! Congratulations!"
    } else {
      for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
          board[i][j] = 0
        }
      }

      cur = boards[level]
      console.log(LunarLockoutSolver.solveIterativeDescent(cur, [4, 5, 6, 9]))

      for (let i = 0; i < 6; i++) {
        if (cur[i] != null) {
          board[cur[i][0]][cur[i][1]] = i + 1
        }
      }
      document.getElementById("level").innerText = "Level: " + (level + 1)
      document.getElementById("you-did-it").style.display = "none"
      document.getElementById("game-over").style.display = "none"
      makeRows(5, 5)
      syncUndoVisibility()
    }
  }

  function makeRows(rows, cols) {
    const container = document.getElementById("container")
    container.style.setProperty("--grid-rows", rows)
    container.style.setProperty("--grid-cols", cols)
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const cell = document.createElement("div")
        cell.id = i + "-" + j
        cell.style.background = uiColors[board[i][j]]
        cell.onclick = function () {
          moveSelectedSquareTo(i, j)
          calcShouldMoveColor()
        }
        container.appendChild(cell).className = "grid-item"
      }
    }
  }

  function move(dir) {
    if (!shouldMoveColor) {
      // just move the chosen square
      next = [selected[0] + dir[0], selected[1] + dir[1]]
      if (inBound(selected[0] + dir[0], selected[1] + dir[1])) {
        moveSelectedSquareTo(next[0], next[1])
      }
    } else if (selected != null && board[selected[0]][selected[1]] != 0) {
      // move the selected color
      const color = board[selected[0]][selected[1]]
      next = [selected[0], selected[1]]
      while (
        inBound(next[0] + dir[0], next[1] + dir[1]) &&
        board[next[0] + dir[0]][next[1] + dir[1]] == 0
      ) {
        next = [next[0] + dir[0], next[1] + dir[1]]
      }
      if (!inBound(next[0] + dir[0], next[1] + dir[1])) {
        doGameOver()
        syncUndoVisibility()
      } else {
        undoState.push([color, selected])
        board[selected[0]][selected[1]] = 0
        document.getElementById(
          selected[0] + "-" + selected[1]
        ).style.background = uiColors[0]
        document
          .getElementById(selected[0] + "-" + selected[1])
          .classList.remove("selected-for-move")
        board[next[0]][next[1]] = color
        document.getElementById(next[0] + "-" + next[1]).style.background =
          uiColors[color]
        moveSelectedSquareTo(next[0], next[1])
        detectSuccess()
        syncUndoVisibility()
      }
    }
    shouldMoveColor = false
  }

  function doUndo() {
    if (gameOver) {
      gameOver = false
      document.getElementById("game-over").style.display = "none"
    } else if (undoState.length > 0) {
      const undoElem = undoState.pop()
      const color = undoElem[0]
      const lastPos = undoElem[1]
      for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
          if (board[i][j] == color) {
            board[i][j] = 0
            board[lastPos[0]][lastPos[1]] = color
            document.getElementById(i + "-" + j).style.background = uiColors[0]
            document.getElementById(
              lastPos[0] + "-" + lastPos[1]
            ).style.background = uiColors[color]
            break
          }
        }
      }
    }
  }

  function detectSuccess() {
    if (board[2][2] == 4) {
      doYouDidIt()
    }
  }

  function doGameOver() {
    gameOver = true
    youDidIt = false
    document.getElementById("you-did-it").style.display = "none"
    document.getElementById("game-over").style.display = "block"
  }

  function doYouDidIt() {
    gameOver = false
    youDidIt = true
    document.getElementById("you-did-it").style.display = "block"
    document.getElementById("game-over").style.display = "none"
  }

  function moveSelectedSquareTo(i, j) {
    if (selected != null) {
      document
        .getElementById(selected[0] + "-" + selected[1])
        .classList.remove("selected")
      document
        .getElementById(selected[0] + "-" + selected[1])
        .classList.remove("selected-for-move")
    }
    selected = [i, j]
    document
      .getElementById(selected[0] + "-" + selected[1])
      .classList.add("selected")
  }

  function calcShouldMoveColor() {
    shouldMoveColor = board[selected[0]][selected[1]] != 0
    if (shouldMoveColor) {
      document
        .getElementById(selected[0] + "-" + selected[1])
        .classList.add("selected-for-move")
    } else {
      document
        .getElementById(selected[0] + "-" + selected[1])
        .classList.remove("selected-for-move")
    }
  }

  function inBound(x, y) {
    return x < 5 && y < 5 && x >= 0 && y >= 0
  }

  function startGame() {
    initBoard()
  }

  function syncUndoVisibility() {
    if (undoState.length > 0 && !youDidIt) {
      document.getElementById("undo").style.display = "block"
    } else {
      document.getElementById("undo").style.display = "none"
    }
  }

  document.addEventListener("keyup", (e) => {
    if (!gameOver && !youDidIt) {
      if (e.code === "ArrowUp") {
        move([-1, 0])
      } else if (e.code === "ArrowDown") {
        move([1, 0])
      } else if (e.code === "ArrowLeft") {
        move([0, -1])
      } else if (e.code === "ArrowRight") {
        move([0, 1])
      } else if (e.code === "Enter") {
        calcShouldMoveColor()
      }
    }
  })

  window.onload = function () {
    document.getElementById("next").addEventListener("click", function () {
      level = level + 1
      startGame()
    })
    document.getElementById("restart").addEventListener("click", function () {
      startGame()
    })
    document.getElementById("undo").addEventListener("click", function () {
      doUndo()
    })

    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    level = urlParams.get("level") || "0"
    level = Math.min(Math.max(0, parseInt(level) - 1), boards.length - 1)
    startGame()
  }
})()
