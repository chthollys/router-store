# Router Store

This project is a web application built with a React frontend and a Node.js backend. It features event management functionalities, including creating, reading, updating, and deleting events.

---

## Project Structure

The repository is organized into two main parts: the frontend and the backend.

### 📱 Frontend

The frontend is a React application built with Vite. The main files are located in the `src/` directory, which includes:

- **Components**: Reusable UI components.
- **Pages**: Different pages of the application, such as the home page, event details, and more.
- **Actions**: Functions for handling user actions, such as deleting an event.
- **Loaders**: Functions for loading data for different routes.
- **UI**: Basic UI elements like input fields.

### 🗄️ Backend

The backend is a Node.js application using Express.js. The main files are in the `backend/` directory and include:

- **Routes**: API endpoints for handling event-related requests.
- **Data**: Data handling logic for interacting with the `events.json` file.
- **Util**: Utility functions for validation and error handling.

---

## ✨ Getting Started

To get started with this project, you need to have Node.js and npm installed on your machine.

### 💽 Installation

1.  **Clone the repository**:

    ```bash
    git clone [https://github.com/your-username/router-store.git](https://github.com/your-username/router-store.git)
    cd router-store
    ```

2.  **Install frontend dependencies**:

    ```bash
    npm install
    ```

3.  **Install backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

### Running the Application

1.  **Start the backend server**:

    ```bash
    cd backend
    npm start
    ```

    The backend will be running at `http://localhost:8080`.

2.  **Start the frontend development server**:
    ```bash
    cd ..
    npm run dev
    ```
    The frontend will be accessible at the URL provided by Vite.

---

## ⚒️ Available Scripts

### Frontend

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run lint`**: Lints the code using ESLint.
- **`npm run preview`**: Previews the production build locally.

### Backend

- **`npm start`**: Starts the backend server with `nodemon`, which automatically restarts the server on file changes.

---

## 💬 API Endpoints

The backend provides the following API endpoints for managing events:

| Method   | Endpoint      | Description                         |
| -------- | ------------- | ----------------------------------- |
| `GET`    | `/events`     | Retrieves all events.               |
| `GET`    | `/events/:id` | Retrieves a single event by its ID. |
| `POST`   | `/events`     | Adds a new event.                   |
| `PATCH`  | `/events/:id` | Updates an existing event.          |
| `DELETE` | `/events/:id` | Deletes an event.                   |

---

## ⚒️ Dependencies

### Frontend

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: Provides DOM-specific methods that can be used at the top level of your app.
- **react-router**: A declarative routing library for React.
- **vite**: A fast build tool for modern web projects.
- **eslint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

### Backend

- **express**: A fast, unopinionated, minimalist web framework for Node.js.
- **body-parser**: A middleware for parsing incoming request bodies.
- **cors**: A middleware for enabling Cross-Origin Resource Sharing.
- **nodemon**: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- **uuid**: A library for generating universally unique identifiers.
