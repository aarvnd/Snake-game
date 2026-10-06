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

        // leave browser shortcuts alone (Cmd+W, Ctrl+R, ...)
        if (event.metaKey || event.ctrlKey || event.altKey) return;

        // single letters are lowercased so WASD works with Caps Lock or Shift
        const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
        const direction = keyMap[key];

        if (direction) {
            // stop arrow keys from scrolling the page while playing
            event.preventDefault();
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
