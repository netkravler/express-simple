import express from "express";
import { createUser, getUserById, getUsers } from "../controllers/userController.js";

export const userRouter = express.Router();

// Route for retrieving all users
// Rute til at hente alle brugere
userRouter.get("/", getUsers);

// Route for retrieving a user by ID
// Rute til at hente en bruger ved ID
userRouter.get("/:id", getUserById);

// Route for creating a new user
// Rute til at oprette en ny bruger
userRouter.post("/", createUser);
