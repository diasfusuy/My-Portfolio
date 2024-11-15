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
    const corsOptions = {
      origin: ['http://localhost:3000', 'http://localhost:3001'],
      credentials: true,
      optionSuccesStatus:200
    }
    app.use(cors(corsOptions));

    // Configure body parser middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Configure Morgan (logging middleware)
    app.use(morgan('combined'));

    // Connect to MongoDB
    await connectToDatabase();

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
