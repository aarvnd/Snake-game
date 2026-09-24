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

        this.snake.move(newHead);
        this.snake.removeTail();

    }

    // end game

}
