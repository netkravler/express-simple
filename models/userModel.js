import { executeQuery } from "../dbConfig.js";

export const getUsersModel = async () => {
  try {
    // Query to retrieve user details (excluding sensitive fields)
    const query = "SELECT id, name, email FROM users"; // Hent brugeroplysninger (ekskluderer følsomme oplysninger)
    const results = await executeQuery(query);
    return results;
  } catch (error) {
    throw error;
  }
};

export const createUserModel = async ({ name, email }) => {
  try {
    // Query to insert a new user into the "users" table
    const query = "INSERT INTO users (name, email) VALUES (?, ?)"; // Indsæt en ny bruger i "users" tabellen
    const newUser = await executeQuery(query, [name, email]);
    return newUser;
  } catch (error) {
    throw error;
  }
};

// Function to get a user by their ID from the "users" table
export const getUserByIdModel = async (id) => {
  try {

    // Query to retrieve a user's details by ID
    // Hent brugeroplysninger ved ID
    const query = "SELECT id, name, email FROM users WHERE id = ?"; 
    // the executeQuery function is getting the data based on the query the id passed 
    // executeQuery functionen henter de data der matcher query og id
    const results = await executeQuery(query, [id]);
    // return the first result found
    // returnere det første resultat fundet
    return results[0];
  } catch (error) {
    throw error;
  }
};
