document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const resetButton = document.getElementById('reset-button');
    let currentPlayer = 'X';
    let gameActive = true;

    function checkWin(player) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombinations.some(combination =>
            combination.every(index => cells[index].textContent === player)
        );
    }

    function isBoardFull() {
        return Array.from(cells).every(cell => cell.textContent);
    }

    function disableBoard() {
        cells.forEach(cell => cell.style.pointerEvents = 'none');
    }

    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
            cell.style.pointerEvents = 'auto';
        });
        currentPlayer = 'X';
        gameActive = true;
        status.textContent = "Player X's turn";
    }

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
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    status.textContent = `${currentPlayer}'s turn`;
                }
            }
        });
    });

    resetButton.addEventListener('click', resetGame);

    // ==============================
    // Decision Tree Image Modal
    // ==============================
    const modal = document.getElementById("image-modal");
    const previewImage = document.querySelector(".preview-image");
    const modalImage = document.getElementById("modal-image");
    const closeButton = document.querySelector(".close");

    // Open modal on click
    if (previewImage) {
        previewImage.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImage.src = previewImage.src;
        });
    }

    // Close modal on click outside image or close button
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
