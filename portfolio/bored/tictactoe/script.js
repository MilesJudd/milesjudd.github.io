// script.js for Tic-Tac-Toe (place next to index.html)
(function(){
  const boardEl = document.getElementById('board');
  const cells = Array.from(document.querySelectorAll('.cell'));
  const statusText = document.getElementById('status');
  const resetButton = document.getElementById('reset');
  const swapButton = document.getElementById('swap');

  let firstPlayer = 'X'; // can be toggled with swapButton
  let currentPlayer = firstPlayer;
  let gameState = Array(9).fill('');
  let gameActive = true;
  let focusedIndex = 0;

  const winningConditions = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
  ];

  // update DOM-based status
  function updateStatus(text){
    statusText.textContent = text;
  }

  function setCellEl(index, value){
    const el = cells[index];
    el.textContent = value;
    el.classList.remove('x','o');
    if (value === 'X') el.classList.add('x');
    if (value === 'O') el.classList.add('o');
    el.setAttribute('aria-label', `cell ${index + 1} ${value ? 'contains ' + value : 'empty'}`);
  }

  function handleCellAction(index){
    if (!gameActive) return;
    if (gameState[index] !== '') return;
    gameState[index] = currentPlayer;
    setCellEl(index, currentPlayer);
    const winner = checkForWinner();
    if (winner) {
      updateStatus(`Player ${winner} wins!`);
      gameActive = false;
      highlightWinningCells(winner);
      return;
    }
    if (!gameState.includes('')) {
      updateStatus('Draw!');
      gameActive = false;
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus(`It's ${currentPlayer}'s turn`);
  }

  function checkForWinner(){
    for (let i=0;i<winningConditions.length;i++){
      const [a,b,c] = winningConditions[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  function highlightWinningCells(winner){
    for (let i=0;i<winningConditions.length;i++){
      const [a,b,c] = winningConditions[i];
      if (gameState[a] === winner && gameState[b] === winner && gameState[c] === winner){
        [a,b,c].forEach(idx => {
          cells[idx].classList.add('win');
        });
        return;
      }
    }
  }

  // reset game
  function resetGame(){
    gameState = Array(9).fill('');
    gameActive = true;
    currentPlayer = firstPlayer;
    cells.forEach((c, i) => { c.textContent = ''; c.classList.remove('x','o','win'); c.setAttribute('aria-label', `cell ${i+1} empty`); });
    updateStatus(`It's ${currentPlayer}'s turn`);
    focusedIndex = 0;
    cells[0].focus();
  }

  // swap who starts
  function swapFirstPlayer(){
    firstPlayer = firstPlayer === 'X' ? 'O' : 'X';
    resetGame();
  }

  // mouse / pointer click
  cells.forEach((cell, idx) => {
    cell.addEventListener('click', () => handleCellAction(idx));
    // keyboard support: Enter / Space to place
    cell.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        handleCellAction(idx);
      }
      // arrow key navigation
      if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(ev.key)) {
        ev.preventDefault();
        const next = navigateIndex(idx, ev.key);
        cells[next].focus();
      }
    });
    // keep track of focused index for keyboard-friendly reset
    cell.addEventListener('focus', () => { focusedIndex = idx; });
  });

  // small helper to navigate 3x3 grid
  function navigateIndex(current, key){
    const row = Math.floor(current / 3);
    const col = current % 3;
    let r = row, c = col;
    if (key === 'ArrowLeft') c = (col + 2) % 3;
    if (key === 'ArrowRight') c = (col + 1) % 3;
    if (key === 'ArrowUp') r = (row + 2) % 3;
    if (key === 'ArrowDown') r = (row + 1) % 3;
    return r * 3 + c;
  }

  // reset & swap buttons
  resetButton.addEventListener('click', resetGame);
  swapButton.addEventListener('click', swapFirstPlayer);

  // initialize
  updateStatus(`It's ${currentPlayer}'s turn`);
  // set initial aria labels and tabindex if not present
  cells.forEach((c, i) => {
    c.setAttribute('role','gridcell');
    if (!c.hasAttribute('tabindex')) c.setAttribute('tabindex','0');
    c.setAttribute('aria-label', `cell ${i+1} empty`);
  });

})();
