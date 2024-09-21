# script.js

### 1. JavaScript's Dynamic Typing

- JavaScript is dynamically typed, meaning variable types are determined at runtime rather than being explicitly declared.
- **`const`**: Used to declare variables that cannot be reassigned after their initial value is set. However, if it's an object or array, the contents can still be modified.
- **`let`**: Used for variables that can be reassigned. It's block-scoped, meaning it's confined to the block where it's defined, making it useful for variables that need to change over time (like ball position or direction in this case).

### 2. Semicolon Usage

- Semicolons terminate statements in JavaScript, and while they're optional, using them consistently avoids unexpected behavior due to automatic semicolon insertion (ASI).

### 3. The `document` Object

- `document` is part of the **WebAPI**, representing the web page loaded in the browser. It is used to interact with and manipulate the HTML structure. In JavaScript, we use `document` to query and modify elements of the page.
- In formal documentation (like the HTML standard), "Documents" is capitalized as it refers to the structured content (HTML, XML) that the `document` object represents.

### 4. The `window` Object vs. The `document` Object

- **`window`**: The global object in the browser environment, representing the browser window itself. It includes methods, properties, and events related to the entire web page and its environment.
- **`document`**: A property of the `window` object that specifically represents the content of the page (the DOM). While `window` manages the broader environment, `document` focuses on the structure and contents of the page.

### 5. The `requestAnimationFrame()` Method

- The `requestAnimationFrame()` method is used to create smooth animations by syncing updates with the display's refresh rate. It calls a function before the next repaint of the screen, ensuring optimal performance.
- When playing Pong remotely across machines with different refresh rates, we rely on `requestAnimationFrame()` to adapt the animation's timing to each device. However, this could cause minor variations in gameplay speed if one device has a significantly higher or lower refresh rate than another. To address this, we could calculate frame durations or sync gameplay events across machines in a multiplayer scenario.

### 6. CSS Box Sizing and `getBoundingClientRect()`

- The size returned by `getBoundingClientRect()` depends on how the box sizing is defined in CSS. If `box-sizing: border-box` is used, the element's width and height include padding and borders. If `box-sizing: content-box` is used, the size reflects only the content area, and padding and borders must be added manually. Understanding the box model ensures accurate calculations for collision detection and positioning of elements like the ball within the game area.
