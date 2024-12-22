# **Calendix**

## **Overview**
Calendix is a modern, user-friendly event scheduling application. It allows users to manage events efficiently, including creating, editing, and deleting event types, booking events, and maintaining a profile.

The application integrates with the **Nylas API** for authentication and email-related operations and uses **MongoDB** as its database to store user and event information.

Calendix is built using **Next.js** with support for both client-side and server-side rendering, styled with **TailwindCSS**, and managed via **Bun** for development.

---

## **Features**
- **Authentication**: Secure login using the **Nylas API**.
- **Dashboard**:
  - Profile page to set a username and save it to the database.
  - Manage event types (view, create, edit, delete).
  - View and interact with booked events.
- **Event Management**:
  - Create new event types with title, description, length, and availability times.
  - Edit and delete existing events.
- **Database**: Uses **MongoDB** for storing user data, event details, and booking information.
- **API Integration**: Connects with the **Nylas API** for user authentication and email communication.

---

## **Technologies Used**

### **Frontend**
- **React**: For building client-side components.
- **Next.js**: Framework for both client-side and server-side rendering.
- **TailwindCSS**: For styling the application.
- **clsx**: Utility for conditional class management in components.

### **Backend**
- **Next.js API Routes**: For server-side functionalities.
- **MongoDB**: Database for persistent storage.
- **Mongoose**: ODM library for MongoDB integration.

### **Dependencies**
- **Nylas API**: For user authentication.
- **axios**: For making HTTP requests.
- **dotenv**: For managing environment variables securely.

---

## **Installation**

Follow these steps to set up and run the Calendix application locally.

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd calendix
  "next-app-session": "^1.0.7",
  "nylas": "^7.7.2",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}

### **2. Install Dependencies**
Ensure you have **Bun** installed. If not, install it from [Bun's official website](https://bun.sh/).

## **Dependencies**

The following dependencies are used in the Calendix project:

- **axios**: `^1.7.9` - For making HTTP requests.
- **clsx**: `^2.1.1` - Utility for managing conditional class names.
- **dotenv**: `^16.4.7` - For managing environment variables.
- **lucide**: `^0.468.0` - Icon library for UI components.
- **lucide-react**: `^0.468.0` - React wrapper for Lucide icons.
- **mongoose**: `^8.9.2` - ODM library for MongoDB integration.
- **next**: `^15.1.0` - Framework for React with support for server-side rendering.
- **next-app-session**: `^1.0.7` - Middleware for handling sessions in Next.js applications.
- **nylas**: `^7.7.2` - API integration for authentication and email.
- **react**: `^19.0.0` - Core library for building user interfaces.
- **react-dom**: `^19.0.0` - React library for DOM rendering.

Run:
```bash
bun install

### **Environment Variables**
Create a `.env` file in the root directory and add the following:

```env
MONGODB_URI=<your-mongodb-uri>
NYLAS_CLIENT_ID=<your-nylas-client-id>
NYLAS_CLIENT_SECRET=<your-nylas-client-secret>
NYLAS_CALLBACK_URL=http://localhost:3000/api/auth/callback

Replace the placeholders with your actual credentials:

<your-mongodb-uri>: Your MongoDB connection string.
<your-nylas-client-id>: Your Nylas Client ID.
<your-nylas-client-secret>: Your Nylas Client Secret.

## **How It Works**

### **1. Main Page**
- Users can sign in via the **Nylas API** for authentication.
- After signing in, users can access their **dashboard**.

---

### **2. Dashboard**
#### **Profile Page**
- Users can set their username and save it to the **MongoDB** database.

#### **Booked Events**
- Displays a list of booked events.
- Users can click on an event to:
  - View details.
  - Edit details.
  - Delete the event.

#### **Event Types**
- Displays all event types created by the user.
- Shows the **URL** for each event type.
- Allows users to create new event types.

---

### **3. Event Management**
- Users can:
  - Add a title, description, and event length.
  - Select available dates and time slots.
- Events are saved to the **Booked Events** page and can be:
  - Edited.
  - Deleted.

---

## **Client-Side and Server-Side Components**

### **Client-Side Components**
- **TimeSelect**: Handles user selection of time slots for events.
- **EventTypeForm**: Form for creating and editing event types.
- **EventTypeDelete**: Button for deleting events.

### **Server-Side Components**
- **Next.js API Routes**:
  - Handles authentication callbacks with **Nylas**.
  - Manages CRUD operations for event types and bookings.
- **Database Integration**:
  - Uses **Mongoose** for managing **MongoDB** collections.

