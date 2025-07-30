const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        process.exit(1);
    }
};

// MONGODB CONNECTION EVENT LISTENERS
mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB is connected");
});

mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("⚠️ MongoDB disconnected");
});

module.exports = connectToMongo;