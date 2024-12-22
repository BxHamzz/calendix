Calendix

Overview

Calendix is a modern, user-friendly event scheduling application. It allows users to manage events efficiently, including creating, editing, and deleting event types, booking events, and maintaining a profile.

The application integrates with the Nylas API for authentication and email-related operations and uses MongoDB as its database to store user and event information.

Calendix is built using Next.js with support for both client-side and server-side rendering, styled with TailwindCSS, and managed via Bun for development.

Features

Authentication: Secure login using the Nylas API.
Dashboard:
Profile page to set a username and save it to the database.
Manage event types (view, create, edit, delete).
View and interact with booked events.
Event Management:
Create new event types with title, description, length, and availability times.
Edit and delete existing events.
Database: Uses MongoDB for storing user data, event details, and booking information.
API Integration: Connects with the Nylas API for user authentication and email communication.
Technologies Used

Frontend
React: For building client-side components.
Next.js: Framework for both client-side and server-side rendering.
TailwindCSS: For styling the application.
clsx: Utility for conditional class management in components.
Backend
Next.js API Routes: For server-side functionalities.
MongoDB: Database for persistent storage.
Mongoose: ODM library for MongoDB integration.
Dependencies
Nylas API: For user authentication.
axios: For making HTTP requests.
dotenv: For managing environment variables securely.

Installation

Follow these steps to set up and run the Calendix application locally.

1. Clone the Repository
git clone <repository-url>
cd calendix
2. Install Dependencies
Ensure you have Bun installed. If not, install it from Bun's official website.

Run:

bun install
3. Configure Environment Variables
Create a .env file in the root directory and add the following:

MONGODB_URI=<your-mongodb-uri>
NYLAS_CLIENT_ID=<your-nylas-client-id>
NYLAS_CLIENT_SECRET=<your-nylas-client-secret>
NYLAS_CALLBACK_URL=http://localhost:3000/api/auth/callback
Replace <your-mongodb-uri>, <your-nylas-client-id>, and <your-nylas-client-secret> with your actual credentials.

4. Run the Application
To start the development server:

bun dev
The app will be accessible at http://localhost:3000.

How It Works

1. Main Page
Users can sign in via the Nylas API for authentication.
After signing in, users can access their dashboard.
2. Dashboard
Profile Page:
Users can set their username and save it to the MongoDB database.
Booked Events:
Displays a list of booked events.
Users can click on an event to view or edit details or delete it.
Event Types:
Displays all event types created by the user.
Shows the URL for each event type.
Allows users to create new event types.
3. Event Management
Users can add a title, description, and event length.
Select available dates and time slots.
Events are saved to the Booked Events page and can be edited or deleted.
Client-Side and Server-Side Components

Client-Side Components
TimeSelect: Handles user selection of time slots for events.
EventTypeForm: Form for creating and editing event types.
EventTypeDelete: Button for deleting events.
Server-Side Components
Next.js API Routes:
Handles authentication callbacks with Nylas.
Manages CRUD operations for event types and bookings.
Database Integration:
Uses Mongoose for managing MongoDB collections.

Dependencies

Installed Using Bun
{
  "axios": "^1.7.9",
  "clsx": "^2.1.1",
  "dotenv": "^16.4.7",
  "lucide": "^0.468.0",
  "lucide-react": "^0.468.0",
  "mongoose": "^8.9.2",
  "next": "^15.1.0",
  "next-app-session": "^1.0.7",
  "nylas": "^7.7.2",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
