const cells = document.querySelectorAll('[data-cell]');
const winningMessageElement = document.querySelector('.winning-message');
const restartButton = document.querySelector('.restart-button');
let circleTurn;
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.style.display = 'none';
}

function handleClick(e) {
    console.log('Cell clicked');
    const cell = e.target;
    const currentClass = circleTurn ? 'o' : 'x';
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function placeMark(cell, currentClass) {
    console.log('Marking cell with:', currentClass);
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    document.querySelector('.board').classList.remove('x');
    document.querySelector('.board').classList.remove('o');
    document.querySelector('.board').classList.add(circleTurn ? 'o' : 'x');
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

function endGame(draw) {
    if (draw) {
        winningMessageElement.textContent = "It's a Draw!";
    } else {
        winningMessageElement.textContent = `${circleTurn ? "O" : "X"} Wins!`;
    }
    winningMessageElement.style.display = 'block';
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('o');
    });
}
