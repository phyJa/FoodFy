// Call express
const express = require("express");

// Execute it
const server = express();

// Listen
server.listen(
    5000,
    (req, res) => {
        console.log("Server listening on port 5000!");
    }
)