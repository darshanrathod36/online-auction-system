// Import required modules
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Import routes
import authRoutes from './routes/authroutes.js';

// Connect to the MongoDB database
import connection from './db/connection.js';

// Initialize the Express app
const app = express();

// Load environment variables from.env file
dotenv.config();
// Define the port number to run the server
const PORT = process.env.PORT

// Middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);

// Start the server and connect to the MongoDB database
app.listen(PORT, () => {
    connection(); // Connect to MongoDB
    console.log(`server runing on port ${PORT}`)
});



