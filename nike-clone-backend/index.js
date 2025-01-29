import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: "http://localhost:3000", // Replace with the correct origin
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Create a connection pool instead of a direct connection
const pool = mysql.createPool(dbConfig);

// Function to get a connection from the pool
const getDBConnection = async () => {
  try {
    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    console.error("Error Connecting to MYSQL:", error.message);
    throw error;
  }
};

// Get shoes from the database
app.get("/api/shoes", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM shoes");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch shoes" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
