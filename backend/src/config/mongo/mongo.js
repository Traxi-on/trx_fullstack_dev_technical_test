const mongoose = require('mongoose');

const connectDB = async () => {
    console.log(`MongoDB Contecting.... ${process.env.MONGODB_URI}`);

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;