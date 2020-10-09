// Get the html element
const buttons = {

    hide: document.querySelectorAll(".hide"),

    show: document.querySelectorAll(".show")

}

for(let groupOfButtons in buttons) {

    for(let button of buttons[groupOfButtons]) {

        console.log(button);

        button.addEventListener(

            "click",

            () => { console.log("Test"); }

        );

    }

}

