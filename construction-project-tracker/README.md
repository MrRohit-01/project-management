# Project Title: Construction Project Tracker

## Overview
The Construction Project Tracker is a web-based system designed to facilitate project management for administrators and provide customers with a platform to track their project's progress. The system allows admins to manage customer information and project updates efficiently while ensuring customers have access to their project details.

## Key Features
### Admin Panel
- **Login Functionality**: Secure login for administrators.
- **Customer Management**: Add, update, and manage customer information.
- **Project Management**: Create and manage projects for each customer, including uploading relevant documents, images, and videos.
- **Dashboard**: View customer details such as name, address, contact information, and project status.

### Customer Portal
- **User Authentication**: Customers can log in to their accounts securely.
- **Project Tracking**: Customers can view updates on their projects, including images, descriptions, and progress represented via a pie chart.

## Technology Stack
- **Frontend**: React.js with Vite for fast development and optimized builds.
- **Backend**: Node.js with Express.js for handling API requests and business logic.
- **Database**: MongoDB for storing customer and project data.
- **Authentication**: Secure login system for both admins and customers.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`, each containing its own set of files and configurations.

### Backend
- **src**: Contains the source code for the backend application.
- **config**: Configuration files for database and authentication.
- **controllers**: Functions for handling various operations related to admins, customers, and projects.
- **middleware**: Middleware for authentication and file uploads.
- **models**: MongoDB schemas for Admin, Customer, and Project.
- **routes**: API routes for handling requests.
- **types**: TypeScript types and interfaces.
- **app.ts**: Entry point for the backend application.

### Frontend
- **src**: Contains the source code for the frontend application.
- **components**: React components for admin and customer interfaces.
- **pages**: Pages for the admin panel and customer portal.
- **services**: API call services and business logic.
- **types**: TypeScript types and interfaces.
- **utils**: Utility functions.
- **App.tsx**: Main component for the React application.
- **main.tsx**: Entry point for the React application.

## Getting Started
To get started with the Construction Project Tracker, clone the repository and follow the instructions in the respective `README.md` files located in the `backend` and `frontend` directories for setup and configuration.

## License
This project is licensed under the MIT License.