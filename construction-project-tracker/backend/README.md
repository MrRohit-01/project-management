# backend/README.md

# Construction Project Tracker - Backend

This is the backend for the Construction Project Tracker application. It is built using Node.js and Express.js, and it connects to a MongoDB database to manage customer and project data.

## Features

- Admin Panel:
  - Manage customers and projects.
  - Upload documents, images, and videos related to projects.
  - Update project statuses and descriptions.

- Customer Portal:
  - Customers can log in to view their project updates.
  - Access to project-related media and progress tracking.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd construction-project-tracker/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up your environment variables (e.g., database connection string) in a `.env` file.

5. Start the server:
   ```
   npm start
   ```

## Directory Structure

```
backend
├── src
│   ├── config          # Configuration files
│   ├── controllers     # Controller functions for handling requests
│   ├── middleware      # Middleware for authentication and file uploads
│   ├── models          # Mongoose models for MongoDB
│   ├── routes          # API route definitions
│   ├── types           # TypeScript types and interfaces
│   └── app.ts         # Entry point of the application
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Usage

- The backend API can be accessed at the specified port (default is 3000).
- Refer to the individual route files for API endpoints and their usage.

## License

This project is licensed under the MIT License.