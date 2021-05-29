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
  const steps = [5,7,9,10,11]


  function startSolve() {
    let totaltime = 0;

    /*
    for(let i=1;i<38;i++) {
      var t0 = performance.now()


      board = boards[i];
      solution = solveIterativeDescent(board);

      if(solution != null) {
        var t1 = performance.now()
        console.log("solved board ", i, solution, " milliseconds: ", t1 - t0);
        totaltime = totaltime + (t1-t0);
      } else {
        console.log("could not solve board ", i);
      }

    }*/

    console.log(totaltime);
    console.log(solveIterativeDescent(generateRandomBoardWithDifficulty(10)));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function generateRandomBoardWithDifficulty(difficulty) {
    if(difficulty < 1 ) difficulty = 1;
    if(difficulty > 12) difficulty = 12;
    while(true) {
        console.log("starting generation");
      board = generateRandomBoard();
        console.log("done generating, starting solving", board);
      solution = solveIterativeDescent(board);
        console.log("done solving ", solution);

      if(solution != null && solution.length >= difficulty*0.66) {
        return board;
      } else if(solution != null) {
        console.log(solution.length);
      }
    }
  }

  function generateRandomBoard() {
    vals = new Set();
    while(vals.size < colors.length) {
      vals.add(getRandomInt(25));
    }
    ret = [];
    for(val of vals.values()) {
      ret.push([Math.floor(val/5), val % 5]);
    }
    return ret;

  }

  function solveIterativeDescent(board) {
    solution = null;
    for(const step of steps) {
      solution =  solve(board, step);
      if(solution != null) {
        return solution;
      }
    }
    return null;
  }

  function solve(board, steps) {
    if(isSolved(board)) return [];
    if(steps > 0) {
      for(let color = 0; color<colors.length; color++) {
        if(board[color] == null) continue;
        for(const direction in directions) {// getMoves(board, color)) {
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

  function getMoves(board, color) {
    moves = [];
    position = board[color];
    if(position == null) {
      return [];
    }
    let addup=true, addleft=true, addright=true, adddown=true;
    for(let i=0;i<colors.length;i++) {
      if(board[i] == null) continue;
      if(addup && i != color && board[i][1] == position[1] && board[i][0] < position[0] - 1) {moves.push(directions.UP); addup=false;}
      if(adddown && i != color && board[i][1] == position[1] && board[i][0] > position[0] + 1) {moves.push(directions.DOWN);adddown=false;}
      if(addleft && i != color && board[i][0] == position[0] && board[i][1] < position[1] - 1) {moves.push(directions.LEFT); addleft=false;}
      if(addright && i != color && board[i][0] == position[0] && board[i][1] > position[1] + 1) {moves.push(directions.RIGHT);addright=false;}
    }

    return moves;
  }


  function canMove(board, color, direction) {
    position = board[color];
    if(position == null) {
      console.log("position is null 0");
    }

    // some optimizations, we can immediately disregard these moves
    if(position[0] <=1 && direction == directions.UP) return false;
    if(position[0] >=3 && direction == directions.DOWN) return false;
    if(position[1] <=1 && direction == directions.LEFT) return false;
    if(position[1] >=3 && direction == directions.RIGHT) return false;
    for(let i=0;i<colors.length;i++) {
      if(board[i] == null) continue;
      if(i != color && canBlockWithAMove(board, color, i, direction)) return true;
    }
    return false;
  }

  // does the blocker block the mover in the direction?
  // note that this will also check if there is actually a move. if the 
  // blocker is right next to the mover, and it blocks it, but there
  // is no move, then the return value will be false.
  function canBlockWithAMove(board, moverColor, blockerColor, direction) {
    position = board[moverColor];

    switch(direction) {
      case directions.UP:
        if(board[blockerColor][1] == position[1] && board[blockerColor][0] < position[0] - 1) return true;
        break;
      case directions.DOWN:
        if(board[blockerColor][1] == position[1] && board[blockerColor][0] > position[0] + 1) return true;
        break;
      case directions.LEFT:
        if(board[blockerColor][0] == position[0] && board[blockerColor][1] < position[1] - 1) return true;
        break;
      case directions.RIGHT:
        if(board[blockerColor][0] == position[0] && board[blockerColor][1] > position[1] + 1) return true;
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
