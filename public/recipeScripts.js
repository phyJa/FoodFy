// Get the html element
const buttons = {

    hide: document.querySelectorAll(".hide"),

    show: document.querySelectorAll(".show")

}


for(let hideButton of buttons.hide) {

    hideButton.addEventListener(
    
        "click",

        () => {

            const idOfItemToHide = hideButton.classList[1];

            const itemToHide = document.getElementById(idOfItemToHide);

            const showButton = document.querySelector(`button.show.${idOfItemToHide}`);

            itemToHide.classList.add("notDisplay");

            hideButton.classList.add("notDisplay");

            showButton.classList.remove("notDisplay");

        }
    
    )

}

for(let showButton of buttons.show) {

    showButton.addEventListener(
    
        "click",

        () => {

            const idOfItemToShow = showButton.classList[1];

            const itemToShow = document.getElementById(idOfItemToShow);

            const hideButton = document.querySelector(`button.hide.${idOfItemToShow}`);

            itemToShow.classList.remove("notDisplay");

            showButton.classList.add("notDisplay");

            hideButton.classList.remove("notDisplay");

        }
    
    )

}

