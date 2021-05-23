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

  const colors = ["white", "orange", "green", "yellow", "red", "purple", "blue"]

	// boards gives the position of each of the above colors on the board.
	// for example, 
  //  [[0, 4], [1, 2], [3, 3], [4, 4], [2, 1]], means:
  //  	white is in position [0, 4]
	//  	orange is in position [1, 2]
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
        cell.style.background = colors[board[i][j]]
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
        ).style.background = colors[0]
        document
          .getElementById(selected[0] + "-" + selected[1])
          .classList.remove("selected-for-move")
        board[next[0]][next[1]] = color
        document.getElementById(next[0] + "-" + next[1]).style.background =
          colors[color]
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
            document.getElementById(i + "-" + j).style.background = colors[0]
            document.getElementById(
              lastPos[0] + "-" + lastPos[1]
            ).style.background = colors[color]
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
