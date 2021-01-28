const recipesData = require("../../data/data.js");

module.exports = {
    // Show home page
    home(request, response) {
        return response.render(
            "visitor/landing",
            {
                recipes: recipesData
            }
        );
    },
    // Show recipes
    index(request, response) {    
        return response.render(    
            "visitor/recipes",    
            {    
                recipes: recipesData   
            }
        );
    },
    // Show about page
    about(request, response) {
        return response.render("visitor/about")
    },
    // Show a recipe
    show(request, response) {
        // Store the recipe index here
        const recipeIndex = Number(request.params.index);
        // Verify if the index of the recipe exists
        var indexExists = false;
        // Search for the index
        for(let i = 0; i < recipesData.length; i++) {
            if(recipeIndex === i) {
                indexExists = true;
            }
        }
        if(indexExists) {
            return response.render(            
                "visitor/recipe",                
                {
                    recipe: recipesData[recipeIndex]
                }            
            );
        } else {
            return response.send("Recipe not found...")            
        }
    }
}