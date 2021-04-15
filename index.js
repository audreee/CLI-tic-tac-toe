const readline = require('readline');

let spaces = [ [' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' '] ]
let currentTurn = 'X';
let turns = 0;

let toggleTurn = () => {
  currentTurn === 'X' ? currentTurn = 'O' : currentTurn = 'X';
  console.log(`It's ${currentTurn}'s turn`)
}

let printBoard = () => {
  console.log(`
  ${spaces[0][0]} | ${spaces[0][1]} | ${spaces[0][2]}
  __________

  ${spaces[1][0]} | ${spaces[1][1]} | ${spaces[1][2]}
  __________

  ${spaces[2][0]} | ${spaces[2][1]} | ${spaces[2][2]}
  `);
}

checkForWin = () => {
  printBoard();
  turns++;
  let victoryMessage = `Player '${currentTurn}' Wins!`;

  for (let i = 0; i < spaces.length; i++) {
    // Check for horizontal wins
    if (spaces[i][0] === currentTurn && spaces[i][1] === currentTurn && spaces[i][2] === currentTurn) {
      console.log(victoryMessage);
      process.exit();
    }

    // Check for vertical wins
    if (spaces[0][i] === currentTurn && spaces[1][i] === currentTurn && spaces[2][i] === currentTurn) {
      console.log(victoryMessage);
      process.exit();
    }
  }

  // Check major diagonal for win
  if (spaces[0][0] === currentTurn && spaces[1][1] === currentTurn && spaces[2][2] === currentTurn) {
    console.log(victoryMessage);
    process.exit();
  }

  // Check minor diagonal for win
  if (spaces[0][2] === currentTurn && spaces[1][1] === currentTurn && spaces[2][0] === currentTurn) {
    console.log(victoryMessage);
    process.exit();
  }

  // Check for tie game
  if (turns === 9) {
    console.log('Tie Game!')
    process.exit();
  }

  toggleTurn();
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (key, data) => {
  if (data.ctrl && data.name === 'l') {
    process.exit();
  } else if (data.name === 'q') {
      if (spaces[0][0] === ' ') {
        spaces[0][0] = currentTurn;
      }
      checkForWin();
    } else if (data.name === 'w') {
      if (spaces[0][1] === ' ') {
        spaces[0][1] = currentTurn;
      }
      checkForWin();
    } else if (data.name === 'e') {
      if (spaces[0][2] === ' ') {
        spaces[0][2] = currentTurn;
      }
      checkForWin();
    } else if (data.name === 'a') {
      if (spaces[1][0] === ' ') {
        spaces[1][0] = currentTurn;
      }
      checkForWin();
    } else if (data.name === 's') {
      if (spaces[1][1] === ' ') {
        spaces[1][1] = currentTurn;
      }
      checkForWin();
    } else if (data.name === 'd') {
      if (spaces[1][2] === ' ') {
        spaces[1][2] = currentTurn;
      }
      checkForWin();
    } else if (data.name === 'z') {
      if (spaces[2][0] === ' ') {
        spaces[2][0] = currentTurn;
      }
      checkForWin();
    } else if (data.name === 'x') {
      if (spaces[2][1] === ' ') {
        spaces[2][1] = currentTurn;
      }
      checkForWin();
    } else if (data.name === 'c') {
      if (spaces[2][2] === ' ') {
        spaces[2][2] = currentTurn;
      }
      checkForWin();
    }
});

  console.log(`Let's Play Tic-Tac-Toe! To move, press:
  'q', 'w', 'e',
  'a', 's', 'd',
  'z', 'x', 'c'

  Press ctrl + l to quit

  Player 'X' starts...`)