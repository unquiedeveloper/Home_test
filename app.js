import express from "express";
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js";
import cookieParser from "cookie-parser";
import documentRoute from "./routes/documentRoute.js"
import documentVersionRoute from "./routes/documentVersionRoute.js"

const app = express();
dotenv.config({path: "./config/config.env"})

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', authRouter);
app.use('/api/editor', editorRouter);
app.use('/api/content', contentServingRouter);
dbConnection();

export default app;