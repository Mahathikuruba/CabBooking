const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("THIS IS MY SERVER");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
