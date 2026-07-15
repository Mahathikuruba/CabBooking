# 🚖 UCab – MERN Cab Booking Application

UCab is a full-stack Cab Booking web application developed using the **MERN Stack**. It allows users to register, log in securely, book cabs, and manage their bookings through a simple and responsive interface.

---

## 📌 Project Overview

The main objective of UCab is to provide a seamless cab booking experience while demonstrating full-stack web development concepts such as authentication, REST APIs, database integration, and CRUD operations.

---

## ✨ Features

- User Registration
- Secure Login Authentication
- Password Encryption using BCrypt
- Book a Cab
- Select Vehicle Type (Bike, Mini, Sedan, SUV)
- View Booking Details
- Update Booking
- Delete Booking
- Responsive User Interface
- REST API Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- BCrypt

### Tools Used
- Visual Studio Code
- MongoDB Compass
- Postman
- Git
- GitHub

---

## 📂 Project Structure

```
CabBooking/
│
├── FrontEnd/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── BackEnd/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🔗 API Endpoints

### Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`

### Booking
- POST `/api/bookings`
- GET `/api/bookings`
- PUT `/api/bookings/:id`
- DELETE `/api/bookings/:id`

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/Mahathikuruba/CabBooking.git
```

### Backend

```bash
cd BackEnd
npm install
npx nodemon server.js
```

### Frontend

```bash
cd FrontEnd
npm install
npm run dev
```

---

## 📚 Concepts Implemented

- MERN Stack Development
- RESTful APIs
- CRUD Operations
- User Authentication
- Password Hashing
- React Routing
- Frontend & Backend Integration
- MongoDB Database Operations

---

## 🔮 Future Enhancements

- Google Maps Integration
- Live Driver Tracking
- Online Payment Gateway
- Ride Cancellation
- Admin Dashboard
- Ratings & Reviews

---

## 👩‍💻 Developer

**Kuruba Sai Mahathi**

B.Tech Student  
Mohan Babu University

---

**Thank you for reviewing the UCab project!**
