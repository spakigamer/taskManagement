# Aura Tasks

A premium, minimal task management application built with a modern tech stack. Aura Tasks focuses on clarity, speed, and beautiful design to help you stay productive.

## 🚀 Key Features

- **Smart Task Management**: Organize, prioritize, and track tasks with ease.
- **Lightning Fast UI**: Built with Vite and React for near-instant responsiveness.
- **Modern Aesthetics**: Premium glassmorphism design with smooth animations.
- **Dark Mode Support**: Seamlessly switch between light and dark themes.
- **Custom Backend**: Secure Node.js/Express API with MongoDB for reliable data storage.
- **Real-time Updates**: Optimistic UI ensures your actions feel immediate.

## 🛠️ Technology Stack

### Frontend (`/aura-tasks`)
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS & Framer Motion
- **State Management**: React Context API & TanStack Query
- **Navigation**: React Router DOM
- **UI Components**: Shadcn/UI & Lucide React

### Backend (`/backend`)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT & Bcrypt.js
- **Environment**: Dotenv

## 📂 Project Structure

- `/aura-tasks`: React frontend application
- `/backend`: Node.js/Express backend API

## 🏁 Getting Started

### Prerequisites
- Node.js (v18 or later)
- MongoDB (Running locally or via Atlas)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aura-tasks-project
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Create a .env file with:
   # PORT=5000
   # MONGO_URI=your_mongodb_uri
   # JWT_SECRET=your_secret_key
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd aura-tasks
   npm install
   # Create a .env file with:
   # VITE_API_URL=http://localhost:5000/api
   npm run dev
   ```

## 📄 License

Distributed under the ISC License.
