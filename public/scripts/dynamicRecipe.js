function addIngredient() {
    const ingredientsContainer = document.querySelector(".recipeIngredientsContainer");
    const ingredients = ingredientsContainer.querySelectorAll(".ingredient");

    const lastField = ingredients[ingredients.length - 1].cloneNode(true);
    
    if(lastField.value === "")
        return false;
    else {
        // Remove the button first from the container
        const newRecipeButton = ingredientsContainer.querySelector(".buttonContainer");
        ingredientsContainer.removeChild(newRecipeButton);
        // Add the new input for the ingredient
        const newField = lastField.cloneNode(true);
        newField.value = "";
        ingredientsContainer.appendChild(newField);
        // Add the button again
        ingredientsContainer.appendChild(newRecipeButton);
    }
}