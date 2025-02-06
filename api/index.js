import express from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import cors from "cors";
config();
connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
const PORT = 4000;

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const createdUser = await User.create({ username, password });
    jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).status(201).json({ _id: createdUser._id });
    });
  } catch (err) {
    if (err) throw err;
  }
});

app.listen(PORT);
