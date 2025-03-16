const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
let currentPlayer = 'X';

// Load the model
const model = new TicTacToeModel();

// Handle cell clicks
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                status.textContent = `${currentPlayer} wins!`;
                disableBoard();
            } else if (isBoardFull()) {
                status.textContent = "It's a draw!";
            } else {
                currentPlayer = 'O';
                makeAIMove();
            }
        }
    });
});

// Make the AI's move
function makeAIMove() {
    const boardState = getBoardState();
    const move = model.predict(boardState);
    cells[move].textContent = 'O';
    if (checkWin('O')) {
        status.textContent = 'O wins!';
        disableBoard();
    } else if (isBoardFull()) {
        status.textContent = "It's a draw!";
    } else {
        currentPlayer = 'X';
    }
}

// Get the current board state
function getBoardState() {
    return Array.from(cells).map(cell => {
        if (cell.textContent === 'X') return 1;
        if (cell.textContent === 'O') return 2;
        return 0;
    });
}

// Check for a win
function checkWin(player) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];
    return winningCombinations.some(combination =>
        combination.every(index => cells[index].textContent === player)
    );
}

// Check if the board is full
function isBoardFull() {
    return Array.from(cells).every(cell => cell.textContent);
}

// Disable the board after a win
function disableBoard() {
    cells.forEach(cell => cell.style.pointerEvents = 'none');
}