# 🎬 Movie Booking Application (MBA 2.0)

A full-featured Node.js, Express, and MongoDB backend application for managing movie bookings, theatres, payments, user authentication, and role-based access control.

---

## 🌟 Key Features

- 🔐 **Authentication & Authorization**: Secure JWT-based authentication with role-based permissions (`ADMIN`, `CLIENT`, `CUSTOMER`).
- 🎬 **Movie Management**: Comprehensive endpoints to list, retrieve, create, update, and delete movies.
- 🎭 **Theatre Management**: Manage theatres and assign movies to specific theatres.
- 🎟️ **Booking System**: Reserve movie seats in theatres with status updates (`IN_PROGRESS`, `COMPLETED`, `CANCELLED`).
- 💳 **Payment Gateway Integration**: Payment processing with automated booking status resolution upon successful transaction.
- 👥 **User Administration**: Administrative capabilities to view and update user roles and approval statuses.
- 🚀 **Cloud Ready**: Configured for seamless deployment on platforms like **Render**, **Heroku**, or **Vercel**.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js (`>=18.0.0`)
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose ORM)
- **Security**: JWT (`jsonwebtoken`), Password Hashing (`bcrypt`)
- **Configuration**: Dotenv

---

## 📁 Project Structure

```
movie-booking-app-2.0/
├── index.js                  # Root entry point forwarding to src/index.js
├── package.json              # App configuration & dependencies
├── .nvmrc                    # Node version specifier (v20)
├── .env                      # Environment variables configuration
└── src/
    ├── index.js              # Express app setup & server initialization
    ├── configs/              # Environment & DB configurations
    │   ├── auth.config.js
    │   ├── db.config.js
    │   └── server.config.js
    ├── controllers/          # Business logic handlers
    │   ├── auth.controller.js
    │   ├── booking.controller.js
    │   ├── movie.controller.js
    │   ├── payment.controller.js
    │   ├── theatre.controller.js
    │   └── user.controller.js
    ├── middlewares/          # JWT verification & role validation
    │   ├── auth.Jwt.js
    │   └── theatre.js
    ├── models/               # Mongoose schemas
    │   ├── booking.model.js
    │   ├── movie.model.js
    │   ├── payment.model.js
    │   ├── theatre.model.js
    │   └── user.model.js
    └── routes/               # API route definitions
        ├── auth.route.js
        ├── booking.route.js
        ├── movie.route.js
        ├── payment.route.js
        ├── theatre.route.js
        └── user.route.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory (or configure them in your hosting provider such as Render):

```env
PORT=3000
DB_NAME=mba_2_0
MONGO_URI=mongodb://127.0.0.1:27017/mba_2_0
SECRET_KEY=your_jwt_secret_key
NODE_VERSION=20.18.0
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **MongoDB**: Local MongoDB instance or MongoDB Atlas cluster URI

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aditya265254/mba_2.0.git
   cd mba_2.0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Start in production mode:**
   ```bash
   npm start
   ```

---

## 📡 API Reference

### 🔐 Authentication

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/mba/api/v1/auth/signup` | Register a new user | ❌ |
| `POST` | `/mba/api/v1/auth/signin` | Login & receive JWT access token | ❌ |

---

### 🎬 Movies

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/mba/api/v1/movies` | Get all movies (supports query filters) | ❌ |
| `GET` | `/mba/api/v1/movies/:id` | Get movie details by ID | ❌ |
| `POST` | `/mba/api/v1/movies` | Add a new movie | 🔒 Admin |
| `PUT` | `/mba/api/v1/movies/:id` | Update movie details | 🔒 Admin |
| `DELETE` | `/mba/api/v1/movies/:id` | Delete a movie | 🔒 Admin |

---

### 🎭 Theatres

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/mba/api/v1/theatres` | List all theatres | 🔒 Authenticated |
| `GET` | `/mba/api/v1/theatres/:id` | Get theatre details by ID | 🔒 Authenticated |
| `POST` | `/mba/api/v1/theatres` | Create a new theatre | 🔒 Admin |
| `PUT` | `/mba/api/v1/theatres/:id` | Update theatre details | 🔒 Admin / Owner |
| `DELETE` | `/mba/api/v1/theatres/:id` | Delete a theatre | 🔒 Admin / Owner |
| `PUT` | `/mba/api/v1/theatres/:id/movies` | Add movies to a theatre | 🔒 Admin / Owner |

---

### 🎟️ Bookings

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/mba/api/v1/bookings` | Retrieve user bookings | 🔒 Authenticated |
| `GET` | `/mba/api/v1/bookings/:id` | Get booking details by ID | 🔒 Authenticated |
| `POST` | `/mba/api/v1/bookings` | Create a new booking | 🔒 Authenticated |
| `PUT` | `/mba/api/v1/bookings/:id` | Update booking details | 🔒 Authenticated |

---

### 💳 Payments

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/mba/api/v1/payments` | Process payment for a booking | 🔒 Authenticated |
| `GET` | `/mba/api/v1/payments` | List all payments | 🔒 Admin |
| `GET` | `/mba/api/v1/payments/:id` | Get payment details by ID | 🔒 Authenticated |

---

### 👥 User Administration

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/mba/api/v1/users` | Retrieve list of all users | 🔒 Admin |
| `PUT` | `/mba/api/v1/users/:id` | Update user status/role | 🔒 Admin |

---

## 🌐 Deployment (Render)

1. Connect your GitHub repository to **Render**.
2. Create a new **Web Service**.
3. Set the following parameters:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start` (or `node index.js`)
   - **Environment Variables**: Add `MONGO_URI`, `DB_NAME`, `SECRET_KEY`, and `NODE_VERSION=20.18.0`.



