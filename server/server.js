// Call express
const express = require("express");

// Call nunjucks
const nunjucks = require("nunjucks");

// Get the recipes
const recipes = require("../data/data.js");

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
        );
    }
);


// A specific recipe
server.get(
    "/recipes/:index",
    function(req, res) {
        // Store the recipe index here
        const recipeIndex = Number(req.params.index);
        // Verify if the index of the recipe exists
        var indexExists = false;
        // Search for the index
        for(let i = 0; i < recipes.length; i++) {
            if(recipeIndex === i) {
                indexExists = true;
            }
        }
        if(indexExists) {
            return res.render(            
                "recipe",                
                {
                    recipe: recipes[recipeIndex]
                }            
            );
        } else {
            return res.send("Recipe not found...")            
        }
    }
);

// Listen
const port = 3000;

server.listen(
    port,
    (req, res) => {
        console.log(`Server is listening!`);
    }
);