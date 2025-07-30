const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectToMongo = require('./db');

const resultRoute = require('./routes/resultRoute')

const app = express();

const PORT = process.env.PORT || 8000;

// MIDDLEARE TO ALLOW CROSS-ORIGIN REQUESTS
app.use(cors());

// MIDDELWARE TO USE req.body
app.use(express.json());

// ALL ROUTES
app.use('/api/results',resultRoute);

const startServer = async () => {
    try {
        // CHECKING MONGO DB CONNECTION
        await connectToMongo();

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error("❌ Server not started");
    }
};

startServer();