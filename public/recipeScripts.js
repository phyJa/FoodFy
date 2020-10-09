// Get the html element
const hideIngredientsButton = document.querySelector(".hideIngredients");
const showIngredientsButton = document.querySelector(".showIngredients");

const ingredients = document.querySelector(".ingredients");

// Add an event listener
hideIngredientsButton.addEventListener(
    
    "click",

    () => { 

        ingredients.classList.add("notDisplay");

        hideIngredientsButton.classList.add("notDisplay");

        showIngredientsButton.classList.remove("notDisplay");
    
    }

);

showIngredientsButton.addEventListener(
    
    "click",

    () => { 

        ingredients.classList.remove("notDisplay");

        hideIngredientsButton.classList.remove("notDisplay");

        showIngredientsButton.classList.add("notDisplay");
    
    }

);