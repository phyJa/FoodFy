const express = require("express");

const routes = express.Router();

// Get the recipes
const recipes = require("../data/data.js");

// Routes
// Landing page
routes.get(
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
routes.get(
    "/about",
    (req, res) => {
        return res.render("about")
    }
);

//Recipes
routes.get(
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
routes.get(
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

module.exports = routes;