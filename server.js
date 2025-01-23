const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME, // Database name
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Routes
app.post("/signup", async(req, res) => {
    const { firstName, lastName, username, email, password } = req.body;

    try {
        // Check if email or username already exists
        const checkUser = await pool.query(
            "SELECT * FROM users WHERE email = $1 OR username = $2", [email, username]
        );

        if (checkUser.rows.length > 0) {
            return res.status(400).json({ message: "Email or username already exists" });
        }

        // Insert new user
        const insertUser = await pool.query(
            "INSERT INTO users (first_name, last_name, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *", [firstName, lastName, username, email, password]
        );

        res.status(201).json({
            message: "User registered successfully",
            user: insertUser.rows[0],
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server error" });
    }
});









app.post("/login", async(req, res) => {
    const { email, password } = req.body;

    try {
        // Check if email exists
        const userQuery = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (userQuery.rows.length === 0) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const user = userQuery.rows[0];

        // Compare plain text password
        if (password !== user.password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id, email: user.email },
            process.env.JWT_SECRET, { expiresIn: "1h" } // Token expires in 1 hour
        );

        // Send success message with token and username
        res.status(200).json({
            message: "Login successful",
            token, // Send token back
            username: user.username // Send username back
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server error" });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});