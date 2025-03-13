# Frontend Project Documentation

## Construction Project Tracker

This project is a web-based system designed to facilitate project management for both administrators and customers. The application allows admins to manage customer information and project progress, while customers can log in to track their project's status.

### Key Features

#### Admin Panel
- **Login Functionality**: Secure access for administrators.
- **Customer Management**: Add and manage customer details.
- **Project Management**: Create and manage projects for each customer.
- **File Uploads**: Upload documents, images, and videos related to projects.
- **Project Status Updates**: Update project status with descriptions and progress details.
- **Dashboard**: View customer details including name, address, contact information, and project specifics.

#### Customer Portal
- **User Login**: Customers can securely log in to their accounts.
- **Project Updates**: View updates on their projects, including images, descriptions, and videos.
- **Progress Tracking**: Visual representation of project progress via pie charts.

### Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: Secure login system for both admin and customers
- **Storage**: Customer details and project-related data stored in the database

### Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd construction-project-tracker
   ```

2. **Install Dependencies**:
   Navigate to the frontend directory and install the necessary packages:
   ```bash
   cd frontend
   npm install
   ```

3. **Run the Application**:
   Start the development server:
   ```bash
   npm run dev
   ```

### Folder Structure
- **src**: Contains all the source code for the frontend application.
  - **components**: React components for admin and customer interfaces.
  - **pages**: Page components for different routes.
  - **services**: API services for handling requests.
  - **types**: TypeScript types and interfaces.
  - **utils**: Utility functions.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.