# DocLink - Doctor Appointment Scheduling System

DocLink is a full-stack web application designed to connect patients with doctors. It enables users to search for doctors, view profiles, and book appointments seamlessly. The application also includes a doctor's dashboard to manage appointments and feedback.

## Features

- **Frontend**:
  - Modern and responsive user interface built with React.js.
  - Navigation powered by React Router for a seamless experience.
  - Reusable UI components for scalability and consistency.
  - Integration of Vite for optimized build and development.
  
- **Backend**:
  - **User Authentication**:  Registration and login functionality secured with bcrypt.
  - **JWT Authentication**: Secure and scalable session management using JSON Web Tokens.
  - **Doctor Management**: Doctors can manage their profiles and view feedback from patients.
  - **Appointment System**: Patients can book, view, and manage their appointments.
  - **Role-Based Access**: Distinct dashboards for patients and doctors, with role-based access to their respective functionalities.
  - **Feedback System**: Patients can leave reviews and ratings for doctors.

## Technologies Used

- **Frontend**: 
  - React.js
  - Vite (for fast build and development)
  - Tailwind CSS (for utility-first CSS styling)
  
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for database management)
 
- **Authentication**:
  - JWT (JSON Web Tokens) for secure login and session management.


## Installation

### Prerequisites

- Node.js (v16 or later)
- MongoDB (or use a cloud instance like MongoDB Atlas)

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/Nahida-Chowdhury/DocLink.git
```

### Frontend Setup

1. Navigate to the frontend folder:

```bash
cd DocLink/frontend
```

2. Install the frontend dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

This will run the React development server at `http://localhost:3000`.

### Backend Setup

1. Navigate to the backend folder:

```bash
cd ../backend
```

2. Install the backend dependencies:

```bash
npm install
```

#### Backend Dependencies:

- **Express**: Web framework for Node.js.
- **MongoDB/Mongoose**: Database and ORM for interacting with MongoDB.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: For generating and verifying authentication tokens.
- **cookie-parser**: Middleware for parsing cookies.
- **dotenv**: For managing environment variables.
- **cors**: For enabling Cross-Origin Resource Sharing (CORS).
- **nodemon**: For auto-restarting the server during development.

#### Backend Scripts:

- **start**: Starts the backend server.
- **start-dev**: Starts the backend server with `nodemon` for auto-reloading during development.

To start the backend server in development mode, run:

```bash
npm run start-dev
```

The backend will run at `http://localhost:5000`.

### Backend Folder Structure

- **models**: Mongoose models for MongoDB collections (e.g., User, Doctor, Appointment).
- **routes**: API routes for handling requests (e.g., auth, doctors, appointments).
- **controllers**: Business logic for API endpoints.
- **middleware**: Middleware functions for request validation and authentication.
- **utils**: Utility functions for token management, error handling, etc.

### Create a `.env` file in the backend directory with the following variables:

```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET_KEY=<your-secret-key>
```
