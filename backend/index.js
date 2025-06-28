import express from 'express';
import authRoutes from './src/routes/auth.routes.js'
import messageRoutes from './src/routes/message.routes.js'
import dotenv from "dotenv"
import { connectDB } from './src/lib/db.js';
import cors from "cors"
import cookieParser from "cookie-parser"


dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
}).catch((err) => {
  console.error("DB connection failed:", err);
});
