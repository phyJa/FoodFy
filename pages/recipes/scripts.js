// Find the recipes
const recipes = document.querySelectorAll(".recipe");

// Find the modal overlay div and store it in a variable
const modalOverlay = document.querySelector(".modalOverlay.notDisplay");

// Find the closeModal overlay button
const closeModal = modalOverlay.querySelector(".closeModal button");

// Add an event listener to each recipe
for(let recipe of recipes) {
    recipe.addEventListener(
        "click",
        function () {
            modalOverlay.classList.remove("notDisplay");
        }
    )
}

// To close the modal
closeModal.addEventListener(
    "click",
    () => {
        modalOverlay.classList.add("notDisplay");
    }
)