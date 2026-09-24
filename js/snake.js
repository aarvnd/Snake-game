export class Snake {

    constructor() {
        this.body = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 },
        ];
    }

    // get head
    getHead() {
        return this.body[0];
    }

    // Move the snake by adding a new head segment at the front of the body
    move(newHead) {
        return this.body.unshift(newHead);
    }

    // Remove the tail segment of the snake's body
    removeTail() {
        return this.body.pop();
    }

    // grow the snake by adding a new head segment at the front
    // of the body without removing the tail segment
    grow(newHead) {
        this.body.unshift(newHead);
    }

    // get body
    getBody() {
        return this.body;
    }

}
