import { Game } from './game.js';
import { setupInput } from './input.js';

const board = document.getElementById('game-board');

let game;
let interval;

const createBoard = () => {
    board.innerHTML = "";

    for (let y = 0; y < game.rows; y++) {
        for (let x = 0; x < game.columns; x++) {

            const cell = document.createElement('div');
            cell.classList.add('cell'); // add a class to the cell for styling
            cell.dataset.x = x;
            cell.dataset.y = y;
            board.appendChild(cell);

        }
    }
}

const Render = () => {
    const cells = board.children; // Get all cells in the board

    // Clear
    for (const cell of cells) {
        cell.classList.remove("snake", "head", "food");
    }

    // Snake
    game.snake
        .getBody()
        .forEach((segment, index) => {

            const cell = board.querySelector(
                `[data-x="${segment.x}"][data-y="${segment.y}"]`
            );

            if (!cell) return;

            cell.classList.add("snake");

            if (index === 0) {
                cell.classList.add("head");
            }

        });
}

const startGame = () => {
    clearInterval(interval);

    // instance of game
    game = new Game();

    // create a board
    createBoard();

    // render the snake
    Render();

    // setInterval: is a built-in js function that calls a function at
    // specified intervals (in ms). It returns an interval ID that can be used to
    // clear the interval later using clearInterval.
    interval = setInterval(() => {
        game.update();
        Render();

        if (!game.running) {
            clearInterval(interval);
        }
    }, game.speed);

    setupInput(direction => {
        game.setDirection(direction);
    });
}

startGame();
