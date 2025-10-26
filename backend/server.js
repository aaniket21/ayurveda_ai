const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb+srv://fdosamantha957:23mKwkz6LL7DN8zC@cluster0.ihox8.mongodb.net/ayurveda";

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose Schema & Model
const appointmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    time: { type: String, required: true },
    mode: { type: String, required: true },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// Routes
app.post("/api/appointments", async (req, res) => {
    try {
        const { name, phone, gender, time, mode } = req.body;

        const newAppointment = new Appointment({ name, phone, gender, time, mode });
        await newAppointment.save();
        console.log(newAppointment);
        res.status(201).json({ message: "✅ Appointment saved successfully" });
    } catch (err) {
        console.error("❌ Failed to save appointment:", err);
        res.status(500).json({ error: "Server error while saving appointment" });
    }
});

// Root test route
app.get("/", (req, res) => {
    res.send("AyurVeda+ Appointment API is running");
});

// Start server
const conn = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB connected");

        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    }
};

conn();

