import express from "express";
import bodyParser from "body-parser";
import { userRouter } from "./routes/userRouter.js";

const app = express();

// Middleware for parsing URL-encoded bodies
// Middleware til at parse URL-kodet body
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for parsing JSON bodies
// Middleware til at parse JSON-body
app.use(bodyParser.json());

// Mounting the userRouter at the "/users" path
// Monterer userRouter på stien "/users"
app.use("/users", userRouter);

// Starting the server on port 3000
// Starter serveren på port 3000
app.listen(3000);
