import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingHistory from "./pages/BookingHistory";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<BookingHistory />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
