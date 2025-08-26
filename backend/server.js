const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectToMongo = require('./db');

const uptimeRobotRoute = require('./routes/uptimeRobotRoute');

const app = express();

const PORT = process.env.PORT || 8000;

// MIDDLEARE TO ALLOW CROSS-ORIGIN REQUESTS
app.use(cors());

// MIDDELWARE TO USE req.body
app.use(express.json());

// ALL ROUTES
try {
    const resultRoute = require('./routes/resultRoute');
    app.use('/api/results', resultRoute);
} catch (error) {
    console.log("Route error", error);
}
app.use('/api/uptimerobot', uptimeRobotRoute);

// SERVER CODE
const startServer = async () => {
    try {
        // CHECKING MONGO DB CONNECTION
        await connectToMongo();

        app.listen(PORT, () => {
            const host = process.env.RENDER_EXTERNAL_HOSTNAME || `localhost:${PORT}`;
            console.log(`✅ Server is running on https://${host}`);
        })
    } catch (error) {
        console.error("❌ Server not started");
    }
};

startServer();