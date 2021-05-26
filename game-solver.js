;(function () {

  let level = 0

  const colors = ["orange", "green", "yellow", "red", "purple", "blue"]
  const directions = {
    UP : "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
  }
  
  // boards gives the position of each of the above colors on the board.
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


  function startSolve() {
    let steps = [5,7,9,11,14]
    for(let i=1;i<40;i++) {
      board = boards[i];
      solution = null;
      for(const step of steps) {
        solution =  solve(board, step);
        if(solution != null) {
          break;
        }
      }

      if(solution != null) {
        console.log("solved board ", i, solution);
      } else {
        console.log("could not solve board ", i);
      }

    }
  }

  function solve(board, steps) {
    if(isSolved(board)) return [];
    if(steps > 0) {
      for(let color = 0; color<colors.length; color++) {
        if(board[color] == null) continue;
        for(const direction in directions) {
          if(canMove(board, color, direction)) {
            boardCopy=JSON.parse(JSON.stringify(board));
            move(boardCopy, color, direction);
            if(isSolved(boardCopy)) {
              return [[colors[color], direction]];
            } else {
              solution = solve(boardCopy, steps-1);
              if(solution != null) {
                solution.push([colors[color], direction]);
                return solution;
              }
            }
          }
        }
      }     
    }
    return null;
  }

  function move(board, color, direction) {
    position = board[color];
    if(position == null) {
      console.log("position is null 0");
    }
    switch(direction) {
      case directions.UP:
        found = null;
        for(let i=0;i<colors.length;i++) {
          if(board[i] == null) continue;
          if(i != color && board[i][1] == position[1] && board[i][0] < position[0]) {
            if(found == null || board[i][0] > found) { // find greatest row above our row
              found = board[i][0];
            }
          }
        }
        if(found != null && found < position[0] - 1) {
          board[color][0]=found+1;
        } else if(found == null) {
          console.log("found nothing 0");
        }
        break;
      case directions.DOWN:
        found = null;
        for(let i=0;i<colors.length;i++) {
          if(board[i] == null) continue;
          if(i != color && board[i][1] == position[1] && board[i][0] > position[0]) {
            if(found == null || board[i][0] < found) { // find smallest row below our row
              found = board[i][0];
            }
          }
        }
        if(found != null && found > position[0] + 1) {
          board[color][0]=found-1;
        } else if(found == null) {
          console.log("found nothing 1");
        }
        break;
      case directions.LEFT:
        found = null;
        for(let i=0;i<colors.length;i++) {
          if(board[i] == null) continue;
          if(i != color && board[i][0] == position[0] && board[i][1] < position[1]) {
            if(found == null || board[i][1] > found) { // find greatest col before ours
              found = board[i][1];
            }
          }
        }
        if(found != null && found < position[1] - 1) {
          board[color][1]=found+1;
        } else if(found == null) {
          console.log("found nothing 2");
        }
        break;
      case directions.RIGHT:
        found = null;
        for(let i=0;i<colors.length;i++) {
          if(board[i] == null) continue;
          if(i != color && board[i][0] == position[0] && board[i][1] > position[1]) {
            if(found == null || board[i][1] < found) { // find smallest col after ours
              found = board[i][1];
            }
          }
        }
        if(found != null && found > position[1] + 1) {
          board[color][1]=found-1;
        } else if(found == null) {
          console.log("found nothing 3");
        }
        break;
    }
  }


  function canMove(board, color, direction) {
    position = board[color];
    if(position == null) {
      console.log("position is null 0");
    }
    switch(direction) {
      case directions.UP:
        for(let i=0;i<colors.length;i++) {
          if(board[i] == null) continue;
          if(i != color && board[i][1] == position[1] && board[i][0] < position[0] - 1) return true;
        }
        break;
      case directions.DOWN:
        for(let i=0;i<colors.length;i++) {
          if(board[i] == null) continue;
          if(i != color && board[i][1] == position[1] && board[i][0] > position[0] + 1) return true;
        }
        break;
      case directions.LEFT:
        for(let i=0;i<colors.length;i++) {
          if(board[i] == null) continue;
          if(i != color && board[i][0] == position[0] && board[i][1] < position[1] - 1) return true;
        }
        break;
      case directions.RIGHT:
        for(let i=0;i<colors.length;i++) {
          if(board[i] == null) continue;
          if(i != color && board[i][0] == position[0] && board[i][1] > position[1] + 1) return true;
        }
        break;
    }
    return false;
  }


  function isSolved(board) {
    return board[3][0] == 2 && board[3][1] == 2;

  }

  window.onload = function () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    level = urlParams.get("level") || "0"
    level = Math.min(Math.max(0, parseInt(level) - 1), boards.length - 1)
    startSolve()
  }
})()
