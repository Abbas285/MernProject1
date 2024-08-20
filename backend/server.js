import express from "express";
import dotenv from "dotenv"
import userRouter from "./routes/userRoutes.js"
dotenv.config();
const port = process.env.PORT;

const app = express();
app.get('/', (req, res) => res.send("Server is Ready"));

app.listen(port, () => console.log(`server is running on port ${port}`));