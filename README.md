# Project Structure

project-root
│   .env
│   index.js
│   package.json
│   ...
├── src
│   ├── config
│   │   └── dbConnection.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── rbacMiddleware.js
│   ├── models
│   │   ├── logModel.js
│   │   └── userModel.js
│   ├── routes
│   │   ├── logRoutes.js
│   │   └── userRoutes.js
│   ...


## 1. `index.js`

This file is the entry point of the application. It initializes the Express server, sets up routes, and connects to the database.

- **Endpoints:**
  - `/logs`: Handles log-related operations.
  - `/users`: Handles user-related operations.
  - `/`: Home page.

- **Middleware:**
  - `express.json()`: Parses incoming JSON requests.
  - `app.use("/logs", router)`: Routes related to logs.
  - `app.use('/users', userRoutes)`: Routes related to users.

- **Database Connection:**
  - Connects to the MongoDB database using the `connection` object from `./src/config/dbConnection`.

- **Environment Variables:**
  - Uses `dotenv` to load environment variables.

## 2. `dbConnection.js`

This file establishes a connection to the MongoDB database.

- **Exports:**
  - `connection`: MongoDB connection object.

## 3. `logRoutes.js`

Handles routes related to logs, including log creation and retrieval.

- **Endpoints:**
  - `POST /`: Creates a new log entry.
  - `GET /`: Retrieves logs based on optional query parameters (`search` and field filters).

- **Middleware:**
  - `authMiddleware`: Ensures authentication for log-related operations.
  - `roleMiddleware('admin')`: Ensures the user has the 'admin' role for certain operations.

## 4. `userRoutes.js`

Handles routes related to users, including user registration and login.

- **Endpoints:**
  - `POST /register`: Registers a new user.
  - `POST /login`: Logs in a user, providing an authentication token.

- **Dependencies:**
  - Utilizes `bcrypt` for password hashing and `jsonwebtoken` for token creation.

## 5. `authMiddleware.js`

Middleware to ensure authentication for protected routes.

## 6. `rbacMiddleware.js`

Middleware to enforce role-based access control.

## 7. `logModel.js` and `userModel.js`

Define Mongoose models for logs and users, respectively.

## 8. `.env`

Configuration file for environment variables.

## Usage

1. Run `npm install` to install dependencies.
2. Set up a MongoDB database and update the connection string in `.env`.
3. Run the application using `npm start`.
4. Access the API endpoints through a tool like Postman or your preferred API client.

Note: This documentation provides a high-level overview. In a production environment, ensure proper security measures, error handling, and additional features are implemented.


