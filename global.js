// Find the recipes
const recipes = document.querySelectorAll(".recipe");

// Find the modal overlay div and store it in a variable
const modalOverlay = document.querySelector(".modalOverlay.notDisplay");

// Find the modal content div and store it in a variable
const modalContent = document.querySelector(".modalContent");

// Find the closeModal overlay button
const closeModal = modalOverlay.querySelector(".closeModal button");

// Add an event listener to each recipe
for(let recipe of recipes) {
    recipe.addEventListener(
        "click",
        function () {
            modalOverlay.classList.remove("notDisplay");
            
            // Get the data of the recipe
            const recipeData = {
                imgSrc: recipe.querySelector("img").getAttribute("src"),
                imgAlt: recipe.querySelector("img").getAttribute("alt"),
                title: recipe.querySelector(".recipeTitle"),
                owner: recipe.querySelector(".recipeOwner")
            }

            // Display the recipe data in the modal content
            modalContent.querySelector("img").setAttribute("src", recipeData.imgSrc);
            modalContent.querySelector("img").setAttribute("alt", recipeData.imgAlt);
            modalContent.querySelector("h4.recipeTitle").innerHTML = recipeData.title.textContent;
            modalContent.querySelector("p.recipeOwner").innerHTML = recipeData.owner.textContent;
        }
    )
}

// To close the modal
closeModal.addEventListener(
    "click",
    () => {
        modalOverlay.classList.add("notDisplay");
    }
);