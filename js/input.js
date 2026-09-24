export function setupInput(changeDirection) {

    const keyMap = {

        // these are (ArrowUp, ArrowDown, etc) keys on the keyboard, and they
        // are defined in the keydown event object as event.key
        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT",

        w: "UP",
        s: "DOWN",
        a: "LEFT",
        d: "RIGHT"

    };

    // addEventListener is a method that allows you to listen for events on a specific
    // element. In this case, we are listening for the "keydown" event on the document
    // object, which represents the entire HTML document. When a key is pressed down,
    // the event listener will be triggered and execute the provided callback function.
    document.addEventListener("keydown", event => {

        const direction = keyMap[event.key];

        if (direction) {
            changeDirection(direction);
        }

    });

    const buttons = document.querySelectorAll("[data-direction]");

    buttons.forEach(button => {

        button.addEventListener("click", () => {
            changeDirection(button.dataset.direction);
        });

    });

}
