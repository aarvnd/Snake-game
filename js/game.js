import { Snake } from './snake.js';

export class Game {

    constructor() {

        this.rows = 20;

        this.columns = 20;

        // create snake
        this.snake = new Snake();

        // create food

        // Set the initial speed in milliseconds, direction to "RIGHT"
        // because the snake starts moving to the right, and nextDirection to "RIGHT"
        // because the snake starts moving to the right
        this.speed = 150;
        this.direction = "RIGHT";
        this.nextDirection = "RIGHT";

        this.running = true;

    }

    // set direction
    setDirection(direction) {

        const opposite = { // Define opposite directions
            UP: "DOWN",
            DOWN: "UP",
            LEFT: "RIGHT",
            RIGHT: "LEFT"
        };

        // ignore a 180° turn, the snake would run into itself
        if (opposite[this.direction] === direction) {
            return;
        }

        this.nextDirection = direction;

    }

    // update the game state
    update() {

        if (this.running === false) return;

        this.direction = this.nextDirection;

        const movement = {
            UP: { x: 0, y: -1 },
            DOWN: { x: 0, y: 1 },
            LEFT: { x: -1, y: 0 },
            RIGHT: { x: 1, y: 0 }
        };

        const head = this.snake.getHead();

        const newHead = {
            x: head.x + movement[this.direction].x,
            y: head.y + movement[this.direction].y
        };

        if (this.isOutOfBounds(newHead) || this.hitsBody(newHead)) {
            this.endGame();
            return;
        }

        this.snake.move(newHead);
        this.snake.removeTail();

    }

    // true when the position is outside the 20x20 grid
    isOutOfBounds(position) {
        return position.x < 0 || position.y < 0 ||
            position.x >= this.columns || position.y >= this.rows;
    }

    // true when the position lands on the snake's body; the tail is skipped
    // because it moves away on this same tick
    hitsBody(position) {
        return this.snake
            .getBody()
            .slice(0, -1)
            .some(segment => segment.x === position.x && segment.y === position.y);
    }

    // end game
    endGame() {
        this.running = false;
    }

}
