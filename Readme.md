## Table of Contents

### React Frontend Documentation

1. **Introduction**
   - Project Overview
   - Technologies Used

2. **Installation and Setup**
   - Prerequisites
   - Installation Steps
   - Starting the Development Server

3. **Project Structure**
   - Directory Structure
   - Component Structure
   - Key Files and Folders

4. **Usage**
   - Running the Application
   - Interacting with the Form
   - Customization

5. **API Integration**
   - Axios for API Requests
   - API Functions
   - Form Submission

6. **Troubleshooting**
   - Common Issues
   - Error Handling

7. **Contributing**
   - Contribution Guidelines
   - Reporting Bugs

8. **License**

---

### Express.js Backend Documentation

1. **Introduction**
   - Project Overview
   - Technologies Used

2. **Installation and Setup**
   - Prerequisites
   - Installation Steps
   - Starting the Server

3. **Project Structure**
   - Directory Structure
   - Key Files and Folders

4. **API Routes**
   - `/api/submit` - Form Submission
   - Other Routes (if applicable)

5. **Database**
   - MongoDB Connection
   - Mongoose Models

6. **Error Handling**

---

## React Frontend Documentation

### 1. Introduction

#### Project Overview

The React Frontend serves as the user interface for a web application designed to collect user submissions through a web form. It interacts with an Express.js backend for data storage and retrieval.

#### Technologies Used

- React.js
- Axios (for API requests)

### 2. Installation and Setup

#### Prerequisites

Before starting, ensure you have the following software installed:

- Node.js
- npm (Node Package Manager)

#### Installation Steps

To install and set up the project:

1. Clone the repository from [GitHub Repo URL](your-repo-url).
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install project dependencies.

#### Starting the Development Server

To start the development server, run:

```bash
npm start
```

The application will be available at `http://localhost:3000/`.

### 3. Project Structure

#### Directory Structure

The project directory is structured as follows:

- `src/`: Contains the React application source code.
- `public/`: Contains public assets and the HTML template.

#### Component Structure

The application consists of the following React components:

- `Form.js`: Responsible for rendering and handling the form.
- Other components (if applicable): Describe additional components and their responsibilities.

#### Key Files and Folders

- `package.json`: Lists project dependencies and scripts.
- `index.js`: The entry point for the React application.

### 4. Usage

#### Running the Application

To run the React application locally, execute `npm start` and access it at `http://localhost:3000/`.

#### Interacting with the Form

Users can interact with the form by filling it out and submitting data. Validation ensures that data is correctly entered.

#### Customization

Customization options include modifying the form's appearance and adding environment variables for configuration.

### 5. API Integration

#### Axios for API Requests

Axios is used for making API requests to the Express.js backend. It abstracts HTTP requests and responses.

#### API Functions

- `submitForm(formData)`: Sends form data to the backend for processing.

#### Form Submission

Form submissions are handled by the `submitForm` function, which triggers a POST request to the backend. Successful submissions reset the form.


#### Error Handling

Errors are handled through Axios and logged in the browser's console. Users can refer to error messages for troubleshooting.

---

## Express.js Backend Documentation

### 1. Introduction

#### Project Overview

The Express.js Backend serves as the API for a web application designed to collect and store user submissions through a web form. It interacts with a React frontend for user interaction.

#### Technologies Used

- Express.js
- MongoDB
- Mongoose (for MongoDB interaction)

### 2. Installation and Setup

#### Prerequisites

Ensure you have the following software and services set up:

- Node.js
- MongoDB (running)

#### Installation Steps

To install and set up the project:

1. Clone the repository from [GitHub Repo URL](your-repo-url).
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install project dependencies.

#### Starting the Server

To start the Express server, run:

```bash
nodemon index.js
```

The server will be available at `http://localhost:3001/`.

### 3. Project Structure

#### Directory Structure

- `routes/`: Contains route definitions for API endpoints.
- `models/`: Contains Mongoose models for data storage.
- Other folders (if applicable): Describe any other significant directories.

#### Key Files and Folders

- `index.js`: The entry point for the Express.js application.
- `db.js`: Handles MongoDB connection.

### 4. API Routes

#### `/api/submit` - Form Submission

- **POST** `/api/submit`: Endpoint for handling form submissions. Accepts JSON data in the request body.

- **GET** `/api/getAllSubmissions`: Endpoint for getting all the submissions.

### 5. Database

#### MongoDB Connection

The backend connects to a MongoDB database using Mongoose. The connection string and configuration are specified in `db.js`.

#### Mongoose Models

- `Submission`: Mongoose model for storing form submission data. Fields include `name`, `email`, and `message`.

