const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express(); 

// Middleware
app.use(cors({ origin: 'https://sygnels.com', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type'] }));
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://shahid:affan@cluster0.eb3n7i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB Atlas connection error:', err));

// Schema and Model
const dataSchema = new mongoose.Schema({
    Member1: String,
    Phone: String,
    email: String,
    college: String,
    Participation: String,
    accomadation: String,
    Teamname: String,
    upi: String,
    verified: String,
});
const Data = mongoose.model('Data', dataSchema);

// API routes
app.post('/data', async (req, res) => {
    try {
        const { Member1, Phone, email, college, Participation, accomadation, Teamname, upi, verified } = req.body;
        const newData = new Data({ Member1, Phone, email, college, Participation, accomadation, Teamname, upi, verified });
        await newData.save();
        res.status(201).json({ message: 'Data saved' });
    } catch (err) {
        res.status(500).json({ error: 'Error saving data' });
    }
});

app.get('/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// Start server
app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000'));