document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const resetButton = document.getElementById('reset-button');
    let currentPlayer = 'X';
    let gameActive = true;

    // Function to get the current board state
    function getBoardState() {
        return Array.from(cells).map(cell => {
            if (cell.textContent === 'X') return 1;  // Player is X
            if (cell.textContent === 'O') return 2;  // AI is O
            return 0;  // Empty cell
        });
    }

    // Function to check for a win
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

    // Function to check if the board is full
    function isBoardFull() {
        return Array.from(cells).every(cell => cell.textContent);
    }

    // Function to make the AI's move
    function makeAIMove() {
        const boardState = getBoardState();
        const scores = score(boardState);  // Use the AI model to predict scores
        let bestMove = -1;
        let maxScore = -Infinity;

        // Find the move with the highest score
        for (let i = 0; i < scores.length; i++) {
            if (boardState[i] === 0 && scores[i] > maxScore) {  // Only consider empty cells
                maxScore = scores[i];
                bestMove = i;
            }
        }

        if (bestMove !== -1) {
            cells[bestMove].textContent = 'O';  // AI plays 'O'
            if (checkWin('O')) {
                status.textContent = 'O wins!';
                disableBoard();
            } else if (isBoardFull()) {
                status.textContent = "It's a draw!";
            } else {
                currentPlayer = 'X';
                status.textContent = "Player X's turn";
            }
        }
    }

    // Function to disable the board after a win
    function disableBoard() {
        cells.forEach(cell => cell.style.pointerEvents = 'none');
    }

    // Function to reset the game
    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
            cell.style.pointerEvents = 'auto';
        });
        currentPlayer = 'X';
        gameActive = true;
        status.textContent = "Player X's turn";
    }

    // Handle cell clicks
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.textContent && gameActive) {
                cell.textContent = currentPlayer;
                if (checkWin(currentPlayer)) {
                    status.textContent = `${currentPlayer} wins!`;
                    disableBoard();
                    gameActive = false;
                } else if (isBoardFull()) {
                    status.textContent = "It's a draw!";
                    gameActive = false;
                } else {
                    currentPlayer = 'O';
                    status.textContent = "AI is thinking...";
                    setTimeout(makeAIMove, 500);  // AI makes its move after a short delay
                }
            }
        });
    });

    // Handle reset button click
    resetButton.addEventListener('click', resetGame);
});