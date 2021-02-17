function addItem(containerClassName) {
    const itemsContainer = document.querySelector(`.${containerClassName}`);
    const items = itemsContainer.querySelectorAll("input");

    const lastField = items[items.length - 1].cloneNode(true);
    
    if(lastField.value === "")
        return false;
    else {
        // Remove the button first from the container
        const newItemButton = itemsContainer.querySelector(".buttonContainer");
        itemsContainer.removeChild(newItemButton);
        // Add the new input for the ingredient
        const newField = lastField.cloneNode(true);
        newField.value = "";
        itemsContainer.appendChild(newField);
        // Add the button again
        itemsContainer.appendChild(newItemButton);
    }
}