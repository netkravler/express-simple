import dotenv from "dotenv";
import mysql from "mysql2";
// Load the environment variables from the .env file
dotenv.config();

export const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection(dbConfig);

export default connection;

// Helper function to execute a database query
// Hjælpefunktion til at udføre en databaseforespørgsel
export const executeQuery = (query, params = []) => {
  // Create a new Promise that encapsulates the query execution
  // Opret en ny Promise, der indekapsler udførelsen af forespørgslen
  return new Promise((resolve, reject) => {
    // Call the query method on the connection object
    // Kald query-metoden på forbindelsesobjektet
    connection.query(query, params, (error, results) => {
      // Check if an error occurred during the query execution
      // Kontrollér om der opstod en fejl under udførelsen af forespørgslen
      if (error) {
        // If an error occurred, reject the promise with the error
        // Hvis der opstod en fejl, afvis promise med fejlen
        reject(error);
      } else {
        // If the query executed successfully, resolve the promise with the results
        // Hvis forespørgslen blev udført succesfuldt, løs promise med resultaterne
        resolve(results);
      }
    });
  });
};
