import express from "express";
import { createUserModel, getUsersModel, getUserByIdModel } from "../models/userModel.js";

// Handler for getting all users
// Håndterer anmodning om at hente alle brugere
export const getUsers = async (req, res) => {
  try {
    const users = await getUsersModel(); // Call the getUsersModel function to retrieve users
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: "Der skete fejl under forsøget på at finde brugere" }); // Return an error response if there's an error
  }
};

// Handler for creating a user
// Håndterer anmodning om at oprette en bruger
export const createUser = async (req, res) => {
  const { name, email } = req.body; // Extract name and email from the request body

  try {
    const user = await createUserModel({ name, email }); // Call the createUserModel function to create a new user
    res.status(201).json({ user }); // Return a success response with the created user
  } catch (error) {
    res.status(500).json({ error: "Kunne ikke oprette bruger" }); // Return an error response if there's an error
  }
};

// Handler for getting a user by ID
// Håndterer anmodning om at hente en bruger ved ID
export const getUserById = async (req, res) => {
  const id = req.params.id; // Get the ID parameter from the request
  const user = await getUserByIdModel(id); // Call the getUserByIdModel function to retrieve the user by ID

  if (user) {
    res.json({ user }); // Return the user if found
  } else {
    res.status(404).json({ message: "Bruger ikke fundet" }); // Return a not found response if the user is not found
  }
};
