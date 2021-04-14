let spaces = [ '-', '-', '-', '-', '-', '-', '-', '-', '-' ]

let board = `
  ${spaces[0]} | ${spaces[1]} | ${spaces[2]}
  __________

  ${spaces[3]} | ${spaces[4]} | ${spaces[5]}
  __________

  ${spaces[6]} | ${spaces[7]} | ${spaces[8]}
  `;

let currentTurn = 'X';

let toggleTurn = () => {
  currentTurn === 'X' ? currentTurn = 'O' : currentTurn = 'X';
}

