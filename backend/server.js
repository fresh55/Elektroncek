import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
import cookieParser from 'cookie-parser'
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
import otherRoutes from './routes/otherRoutes.js';
import {connectDB} from './config/db.js';
import cors from 'cors'
connectDB();

const corsConfig = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true
};

const app = express();
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/api/users', userRoutes)
app.use('/api/other', otherRoutes)
app.get('/', (req, res) => res.send('server is ready'))

app.use(notFound);
app.use(errorHandler);
app.set("trust proxy", 1);
console.log(process.env.NODE_ENV);

app.listen(port, () => console.log('listening on port ' + port));