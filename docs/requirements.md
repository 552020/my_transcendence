## **Requirements - Mandatory Part**

### I. Overview

[...]

### II. Minimal Technical Requirements

1. **Backend:**

   - **Decision:** Decide whether to include a backend in the project. **Requirement:** If you choose a backend, it **must be written in pure Ruby**.
   - **Decision:** Decide if you want to replace the Ruby backend requirement with the **Framework Module** (Django) to simplify backend development. Django offers a robust and scalable framework, though it deviates from the original requirement of using Ruby.

2. **Database:**

   - **Decision:** Decide to include a database in the project, which would likely be necessary for user data, game history, etc. **Requirement:** If a database is used, it **must adhere to the Database Module (PostgreSQL)**.
   - **Note:** A backend without a database is technically possible but would severely limit functionality. For example, without a database, you could only store data temporarily in-memory (using session storage or similar), but persistent data (such as user accounts or game stats) would be lost when the server restarts. This would likely be impractical for any multiplayer or long-term functionality.

3. **Frontend Requirements:**

   - The frontend must be developed using **vanilla JavaScript**.
   - **Decision:** Decide if you want to alter this requirement by using the **Front End Module** (Bootstrap). **Requirement:** Bootstrap provides pre-written CSS for styling but does not fundamentally change the structure or behavior of the frontend like JavaScript frameworks (e.g., React or Next.js). Bootstrap can make the interface more polished but won’t affect how components interact.

4. **Single Page Application (SPA):**

   - **Requirement:** The website must function as a **Single Page Application** (SPA), meaning it loads content dynamically without full page reloads.

   - **Note about SSR Compatibility:** In the case we choose the module SSR, how would this fit with this requirement?

5. **Browser Navigation (Forward/Backward Buttons):**

   - **Requirement:** The forward and backward buttons in a browser should **not trigger new HTTP requests** but should instead load content from the browser's history.
   - **Technical Solution:** This can be solved using the **History API** (part of the HTML5 standard), which allows you to manipulate the browser’s session history. By using `history.pushState()` and `history.replaceState()`, you can modify the URL without causing a page reload. Additionally, using `window.onpopstate` allows you to detect when a user clicks the back or forward buttons and handle it programmatically to load the correct content dynamically from the current application state without refreshing the page.

6. **Error Handling:**

   - **Requirement:** The project must ensure **no unhandled errors** or warnings when users interact with the site.
   - **Testing Considerations:** While it’s practically impossible to be 100% certain that all errors are handled in complex applications, you can come close with thorough testing:
     - Implement **logging** for all handled exceptions.
     - Use **unit tests** and **integration tests** to cover known failure points and edge cases.
     - Employ tools like **Sentry** or **Rollbar** for real-time error monitoring to capture and handle errors that occur in production, ensuring that any unexpected issues can be quickly identified and fixed.
     - Test across different devices, browsers, and network conditions to ensure robustness. Automated testing tools like **Selenium** or **Cypress** can simulate user interactions and help identify issues.

7. **Docker & Docker Compose:**

   - **Requirement:** The project must be containerized using **Docker** and **Docker Compose** for easy deployment and setup.
   - **Cluster Considerations:** When running in environments (e.g., school clusters) where root access is restricted:
     - **Requirement:** Use **rootless Docker**, which ensures security but comes with restrictions, such as requiring Docker runtime files to be located in `/goinfre` or `/sgoinfre` directories.
     - **Requirement:** Avoid **bind-mount volumes** between the host and the container if non-root UIDs are used. This might require alternative methods for managing file storage, such as using Docker-managed volumes or storing data within the container itself.

8. **Google Chrome Compatibility:**
   - **Requirement:** The website must be compatible with the **latest stable version of Google Chrome**.
   - **Considerations:**
     - Regularly test the website in Chrome to ensure compatibility, especially if you use modern APIs (e.g., WebSockets, Service Workers).
     - Take advantage of **Chrome’s Developer Tools** for identifying performance bottlenecks, accessibility issues, and security concerns.
     - Ensure that all features, especially those relying on client-side rendering and JavaScript interactions, behave consistently across different versions and environments.

### III. Game

1. **Game Functionality:**

   - **Requirement:** The primary functionality of the website must allow users to play **Pong** against each other in real-time directly on the website. This includes basic gameplay mechanics such as ball movement and player paddle controls.

2. **Local Multiplayer:**

   - **Requirement:** Both players should use the same keyboard for local multiplayer matches. Implementing keyboard controls for two players simultaneously is essential.
   - **Note:** Even if you choose to implement the **Remote Players Module** (allowing players from different computers to play the same game), **local multiplayer must still be implemented**. Remote multiplayer is an expansion of the functionality, but local multiplayer remains a core requirement.

3. **Tournament System:**
   - **Requirement:** The project must include a **tournament system** where players can compete in a series of matches. The system should automatically organize the participants and announce who will play next.
   - **Decision:** You must choose a **tournament format**, such as:
     - **Single Elimination:** Players are eliminated after one loss until only one remains.
     - **Round-Robin:** Each player competes against all others, and the player with the most wins is the champion.
     - **Double Elimination:** Players can lose once and still compete, but are eliminated after a second loss.
     - **Swiss System:** Players with similar records face off, with no eliminations.
   - **Note:** The chosen format will affect the flow and complexity of your tournament system and may require different user interactions and match scheduling.
4. **Player Registration:**

   - **Requirement:** A **registration system** is required for players to input an alias when joining a tournament. The aliases will reset when a new tournament begins.
   - **Note:** If you implement the **Standard User Management Module**, players will have **persistent profiles**. This means users will register once, and their alias will be tied to their profile across multiple tournaments. They will not lose their alias after each tournament, and additional profile features will be available, such as the ability to upload avatars, track match history, and manage friendships.

5. **Matchmaking:**

   - **Requirement:** There must be a **matchmaking system** that organizes and pairs players for matches in the tournament. This system must automatically assign opponents and manage the match flow based on the chosen tournament format.

6. **Game Mechanics:**

   - **Requirement:** All players must adhere to the same game mechanics, including identical paddle speeds and other gameplay rules. This uniformity ensures fairness and consistency during matches.

7. **AI Player (Optional):**

   - **Requirement:** If an **AI opponent** is introduced, it must follow the same rules as human players, such as having the same paddle speed and being subject to the same game physics.

8. **Frontend Compliance:**
   - **Requirement:** The game itself must comply with the frontend constraints, such as being developed in **vanilla JavaScript** or utilizing a **Frontend Module** (like Bootstrap) to enhance UI. The visual aesthetic of the game can vary, but it must still resemble the essence of the original **Pong (1972)**.

### IV. Security Concerns

1. **Password Security:**

   - **Requirement:** Any passwords stored in your database must be **hashed**. Plaintext passwords are not allowed for security reasons.
   - **Note:** If using a database (as mentioned in the **Database Decision**), ensure a strong hashing algorithm, such as **bcrypt** or **argon2**, is implemented to protect user credentials. If you opt for the **Standard User Management Module**, this requirement is particularly important as persistent user accounts will be created.

2. **SQL Injection & XSS Protection:**

   - **Requirement:** The website must be protected against **SQL injection** and **Cross-Site Scripting (XSS)** attacks.
   - **Note:** For SQL injection protection, always use **prepared statements** or **parameterized queries** in your database interactions. For XSS protection, ensure all user input (especially in forms, chat messages, and usernames) is sanitized before being rendered on the page.

3. **HTTPS Requirement:**

   - **Requirement:** If your website has a backend or any other features (such as user authentication or game data storage), it is mandatory to enable **HTTPS** for all communication.
   - **Note:** Instead of using plain WebSocket (ws) connections for real-time gameplay, you must use **Secure WebSocket (wss)** connections when running over HTTPS. This ensures data transmitted between users and the server is encrypted.

4. **Input Validation:**

   - **Requirement:** All user input must be **validated** to prevent malicious input from causing errors or security vulnerabilities. This applies to all forms, chat messages, or any other inputs where users provide data.
   - **Note:** Validation should be done both **client-side** (for better user experience) and **server-side** (for security). Even if using **vanilla JavaScript** for the frontend, ensure there are input validation functions that prevent invalid or malicious data from being submitted.

5. **Environment Variables & Sensitive Data:**
   - **Requirement:** Any credentials, API keys, or environment variables must be stored in a **.env file** and ignored by version control (e.g., Git). Publicly storing sensitive information will lead to project failure.
   - **Note:** This is especially relevant if you implement persistent user accounts or a backend. Ensure sensitive data such as database passwords, API keys, and encryption keys are securely stored and never hardcoded into the application code.
