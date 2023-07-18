# MyTodoApp
Want to keep track of things i do, just testing javascript, html an css skils


![image](https://github.com/AYandOJ01/MyTodoApp/assets/129119876/98f22546-ed80-4c5f-8530-3d54a9e8e356)

System Structure and Architecture Documentation:

The My Todo App is a simple web application that allows users to manage their tasks. It consists of the following files: `index.html`, `styles.css`, and `script.js`. Let's discuss the structure and architecture of the system, with an emphasis on the infrastructure.

1. File Structure:
   - `index.html`: This file contains the HTML structure of the My Todo App. It defines the layout and elements of the user interface, such as the header, form, main section, and footer.
   - `styles.css`: This file contains the CSS styles that define the visual appearance of the My Todo App. It customizes the fonts, colors, spacing, and other visual aspects of the UI.
   - `script.js`: This file contains the JavaScript code responsible for the functionality of the My Todo App. It handles tasks such as adding new tasks, marking tasks as complete, and managing the productivity score.

2. Infrastructure:
   The infrastructure of the My Todo App involves the client-side components, such as the HTML, CSS, and JavaScript files, as well as the browser environment where the application runs. Let's break down the infrastructure components:

   - Front-end Framework: The My Todo App is built using HTML, CSS, and JavaScript without relying on any specific front-end framework. This allows for greater flexibility in development and customization.
   - Browser Environment: The My Todo App runs in a web browser, which provides the runtime environment for executing the HTML, CSS, and JavaScript code. It handles rendering the UI and executing user interactions.
   - User Interface (UI): The UI of the My Todo App is created using HTML and styled with CSS. It consists of elements such as headings, forms, lists, and buttons to provide a user-friendly interface for managing tasks.
   - JavaScript Functionality: The JavaScript code in `script.js` provides the functionality of the My Todo App. It handles tasks such as adding new tasks, marking tasks as complete, and updating the productivity score.
   - Event Handling: The JavaScript code utilizes event listeners to capture user interactions, such as submitting the form, clicking buttons, or interacting with task elements. These events trigger specific actions to be performed in response.
   - Productivity Score Calculation: The productivity score is calculated based on the number of completed tasks divided by the total number of tasks added. This calculation is performed dynamically in JavaScript.

3. Data Storage:
   The My Todo App does not include a server-side or database component for persistent data storage. As a client-side application, it relies on the browser's memory to store and manage tasks during the session. Once the page is refreshed or closed, the data will be lost.

4. Deployment:
   To make the My Todo App available to end-users, it needs to be deployed to a web server or hosting platform. The deployment process involves uploading the HTML, CSS, and JavaScript files to a server that can serve them to users over the internet. Once deployed, users can access the My Todo App through a web browser using the provided URL.

In summary, the My Todo App's structure and architecture consist of client-side components, including the HTML, CSS, and JavaScript files. The infrastructure involves the web browser as the runtime environment, the user interface built with HTML and CSS, and the JavaScript code handling functionality and interactions. The application does not involve a server-side component or data storage, as it relies on the browser's memory. Deployment is required to make the My Todo App accessible to end-users through a web server or hosting platform.

Please note that the My Todo App's architecture described here is a simplified representation for the purpose of this documentation, as it does not involve complex server-side components or databases.
