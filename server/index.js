import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan'; // Import Morgan for logging

import { connectToDatabase } from './db/dbconn.js'; // MongoDB connection function
import { PORT } from './config.js'; // Import PORT configuration
import blogsRouter from './routes/blogsRouter.js';
import usersRouter from './routes/usersRouter.js';

const app = express();

(async () => {
  try {
    // Enable CORS
    app.use(cors());

    // Configure body parser middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Configure Morgan (logging middleware)
    app.use(morgan('combined'));

    // Connect to MongoDB
    await connectToDatabase();
    console.log('MongoDB connected');

    app.get('/', (req, res) => {
     res.send('Welcome to the server!');
    });

    // Set up routes
    app.use('/api/blogs', blogsRouter);
    app.use('/api/users', usersRouter);

    // Start the server
    app.listen(PORT, () => {
    console.log(`Backend server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
})();
