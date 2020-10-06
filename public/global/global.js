// Find the recipes
const recipes = document.querySelectorAll(".recipe");

// Add an event listener to each recipe
for(let recipe of recipes) {

    recipe.addEventListener (

        "click",

        function () {
           
            // Get the hidden recipe index passed by nunjucks
            const recipeIndex = recipe.querySelector("span").innerHTML;
            
            // Change the browser page
            window.location.href= `/recipes/${recipeIndex}`;
            
        }
    
    )

}
