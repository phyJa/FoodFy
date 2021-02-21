function addItem(containerClassName) {
    const itemsContainer = document.querySelector(`.${containerClassName}`);
    const items = itemsContainer.querySelectorAll(".inputAndCloseButtonContainer");
   
    const lastContainer = items[items.length - 1].cloneNode(true);
    const inputValueOfLastContainer = lastContainer.querySelector("input").value;
    
    if(inputValueOfLastContainer === "")
        return false;
    else {
        // Remove the button first from the container
        const newItemButton = itemsContainer.querySelector(".buttonContainer");
        itemsContainer.removeChild(newItemButton);
        // Add the new input for the ingredient
        const newContainer = lastContainer.cloneNode(true);
        newContainer.querySelector("input").value = "";
        itemsContainer.appendChild(newContainer);
        // Add the button again
        itemsContainer.appendChild(newItemButton);
    }
}