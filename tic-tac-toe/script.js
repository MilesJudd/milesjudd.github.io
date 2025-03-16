let model;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Load the TensorFlow.js model
async function loadModel() {
    model = await tf.loadGraphModel('tfjs_model/model.json');
    console.log("Model loaded successfully!");
}

// Encode the board state
function encodeBoard(board) {
    const encoded = Array(27).fill(0); // 9 cells * 3 possible values (X, O, empty)
    board.forEach((cell, index) => {
        if (cell === 'X') encoded[index * 3] = 1;
        else if (cell === 'O') encoded[index * 3 + 1] = 1;
        else encoded[index * 3 + 2] = 1;
    });
    return tf.tensor([encoded]);
}

// Predict the next move
async function predictMove(board) {
    const input = encodeBoard(board);
    const prediction = model.predict(input);
    const move = prediction.argMax(1).dataSync()[0];
    return move;
}

// Handle cell clicks
async function handleCellClick(event) {
    if (currentPlayer !== 'X') return;

    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) return;

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    if (checkForWinner()) return;

    currentPlayer = 'O';
    statusText.textContent = "AI is thinking...";

    // AI's turn
    const aiMove = await predictMove(gameState);
    gameState[aiMove] = 'O';
    document.querySelector(`.cell[data-index="${aiMove}"]`).textContent = 'O';

    if (checkForWinner()) return;

    currentPlayer = 'X';
    statusText.textContent = `It's ${currentPlayer}'s turn`;
}

// Check for a winner
function checkForWinner() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            statusText.textContent = `Player ${gameState[a]} wins!`;
            gameActive = false;
            return true;
        }
    }

    if (!gameState.includes('')) {
        statusText.textContent = 'Draw!';
        gameActive = false;
        return true;
    }

    return false;
}

// Reset the game
function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    statusText.textContent = `It's ${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

// Add event listeners
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('reset').addEventListener('click', resetGame);

// Load the model when the page loads
window.onload = loadModel;
