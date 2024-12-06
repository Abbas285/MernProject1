import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorHandler, notFound } from "./middleware/errorMiddleWare.js"
dotenv.config();
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
const port = process.env.PORT || 5000;
connectDB();
const app = express();

//this will use as body parser
app.use(express.json());
//this allow us to send boday data with api
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.get('/', (req, res) => res.send("Server is Ready"));
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
