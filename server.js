// Call express
const express = require("express");

// Call nunjucks
const nunjucks = require("nunjucks");

// Get the recipes
const recipes = require("./data/data.js");

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
// Landing page
server.get(
    "/",
    (req, res) => {
        return res.render(
            "landing",
            {
                recipes
            }
        );
    }
);

// About
server.get(
    "/about",
    (req, res) => {
        return res.render("about")
    }
);

//Recipes
server.get(
    "/recipes",
    (req, res) => {
        return res.render(
            "recipes",
            {
                recipes
            }
        )
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