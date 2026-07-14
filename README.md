UCab is a web-based cab booking system developed for students and staff to simplify 
transportation management.  
The system allows users to:  
• Register and login   
• Book rides online   
• Calculate fare automatically   
• View booking history   
• Contact administrators   
The main goal is to provide a convenient and efficient transportation booking platform.  
Features:  
1.User Features  
User Registration   
•  
• User Login   
• Cab Booking   
• Fare Calculation   
• Booking History   
• Contact Form   
2.Admin Features  
• Manage booking data   
• View user information   
• Monitor system activities   
3.Additional Features  
• Google Maps API Integration   
• Distance Calculation   
• Travel Time Estimation   
• Responsive User Interface   
3. ARCHITECTURE  
Frontend Architecture  
Frontend is developed using React.js.  
Major Components:  
• Home Page   
• Login Page   
• Register Page   
• Booking Page   
• Booking History Page   
• Contact Page   
• Navbar   
• Footer   
Vehicle Cards   
•  
React Router is used for navigation between pages.  
Axios is used for API communication.  
Backend Architecture  
Backend is developed using:  
• Node.js   
• Express.js  Backend follows MVC Architecture.  
Flow:  
Client  
↓  
Routes  
↓  
Controllers  
↓  
Models  
↓  
MongoDB  
Database Architecture  
MongoDB is used as the database.  
Collections:  
Users  
Stores:  
• Name   
• Email   
• Password   
Bookings  
Stores:  
Pickup   
•  
• Destination   
• Journey Date   
• Journey Time   
• Fare   
• Vehicle   
• Driver Details  Contacts  
Stores:  
• Name   
• Email   
• Message   
4. SETUP INSTRUCTIONS  
Prerequisites  
Install:  
• Node.js   
• MongoDB   
• VS Code   
• Git   
Installation  
Clone Repository git 
clone <github-link>  
Frontend Setup 
cd Client npm 
install npm run 
dev  
 
  
Backend Setup cd Server 
npm install npx nodemon 
server.js  
  
Environment Variables  
Create .env  
PORT=5000  
  
MONGO_URI=mongodb://localhost:27017/cabbooking  
  
JWT_SECRET=mysecretkey  
  
5. FOLDER STRUCTURE  
Client  
Client                                                                                                   
│  
├── public  
│  
├── src  
│   ├── components  
│   │   ├── Navbar.jsx  
│   │   ├── Footer.jsx  
│   │   ├── GoogleMap.jsx  
│   │   ├── VehicleCard.jsx  
│   │   ├── Button.jsx  
│   │      
  
│   │     
│   │  
│   ├── pages  
│   │   ├── Home.jsx  
│   │   ├── Login.jsx  
│   │   ├── Register.jsx  
│   │   ├── Booking.jsx  
│   │   ├── BookingHistory.jsx  
│   │   ├── Contact.jsx  
└── About.jsx  
 │   
 │  
├── styles  
├── App.jsx  
 └── main.jsx  
│  
│  
│   
│   
│  
│  
├── package.json  
└── vite.config.jsComponents  
Components  
File  
Purpose  
Navbar.jsx  
Navigation bar for all pages  
Footer.jsx  
Displays footer information  
GoogleMap.jsx  Integrates Google Maps API for location selection  
VehicleCard.jsx  Displays available vehicle options  
Button.jsx  
Reusable button component  
Pages  
File  
Purpose  
Home.jsx  
Landing page of the application  
Login.jsx  
User login page  
Register.jsx  
User registration page  
Booking.jsx  
Main cab booking page  
BookingHistory.jsx  Displays previous bookings  
Contact.jsx  
Contact/feedback page  
About.jsx  
Information about the project  
Server  
Server  
│  
├── config  
│  
 └── db.js  
│  
├── controllers  
│   
├── authController.js  
│   
│   
├── bookingController.js  
├── contactController.js  
│  
├── models  
│   
├── User.js  
│   
│  
├── Booking.js  
 └── Contact.js  
│  
├── routes  
│   
├── authRoutes.js  
│   
│   
├── bookingRoutes.js  
├── contactRoutes.js  
│  
├── .env  
├── package.json  
└── server.jsConfig  
Purpose  
Config : Database connection.  
File  
db.js  Connects the application to MongoDB  
Purpose  
Controllers: Business Logic.  
File  
authController.js  
Handles user registration and login  
bookingController.js  Creates, retrieves, updates, and deletes bookings  
contactController.js  Stores user contact messages  
Purpose  
Models: MongoDB Schemas.  
File  
User.js  
Defines the schema for user information  
Booking.js  Defines the schema for booking details  
Contact.js  Defines the schema for contact messages  
Purpose  
Routes: API Endpoints.  
File  
authRoutes.js  
Authentication API endpoints  
bookingRoutes.js  Booking-related API endpoints  
contactRoutes.js  Contact form API endpoints  
Purpose  
Main Backend Files  
File  
server.js  Entry point of the backend, configures Express, middleware, and routes  
.env  
Stores  
6. RUNNING THE APPLICATION Frontend  
cd Client npm run dev 
Runs frontend at: 
http://localhost:5173  
Backend  
cd Server  
npx nodemon server.js Runs 
backend at: 
http://localhost:5000  
7. API DOCUMENTATION  
Authentication APIs  
Register  
POST /api/auth/register  
Login  
POST /api/auth/login  
Booking APIs  
Create Booking  
POST /api/bookings  
Get Booking History  
GET /api/bookings/:userId  
Update Booking  
PUT /api/bookings/:id  
Delete Booking  
DELETE /api/bookings/:id  
Contact APIs :Submit Contact Form  
POST /api/contact  
8. AUTHENTICATION  
Authentication is implemented using:  
• JWT (JSON Web Token)   
• Password Encryption using bcryptjs  Process  
1. User registers.   
2. Password is encrypted.   
3. User logs in.   
4. JWT token is generated.   
5. User accesses protected routes.

GitHub Repository  
https://github.com/Mahathikuruba/CabBooking.git  
Demo Video  
https://drive.google.com/file/d/1GttBMyTOPzp3S_fgu1BLtFxYO_2_vnQr/view?usp=sharing 
12. KNOWN ISSUES  
• No online payment integration.   
• No live cab tracking.   
• Limited admin functionality.   
• Works best with stable internet connection.   
13. FUTURE ENHANCEMENTS  
Future Improvements:  
• Online Payment Gateway   
• Live GPS Tracking   
• Ride Sharing   
• AI-Based Demand Prediction   
• Driver Management System   
• Email Notifications   
• Mobile Application Development   
Conclusion:  
UCab successfully provides an efficient online cab booking platform using the MERN Stack. 
The system demonstrates frontend development, backend API integration, database 
management, authentication, and Google Maps API integration.    
