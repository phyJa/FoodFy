// Call express
const express = require("express");

// Call nunjucks
const nunjucks = require("nunjucks");

// Execute the server
const server = express();

// Configure it. Serve the static files
server.use(express.static("public"));

// View engine
server.set("view engine", "njk");

// Configure nunjucks
nunjucks.configure(
    "pages",
    {
        express: server
    }
);

// Routes
server.get(
    "/",
    (req, res) => {
        return res.render("landing");
    }
);


// Listen
const port = 3000;

server.listen(
    port,
    (req, res) => {
        console.log(`Server listening on port ${port}!`);
    }
)