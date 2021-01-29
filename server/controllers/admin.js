const recipesData = require("../../data/data");

module.exports = {
    // Functions to render pages
    index(request, response) {
        return response.render(
            "admin/recipes",
            {
                recipes: recipesData
            }
        );
    },
    create(request, response) {

    },
    show(request, response) {

    },
    edit(request, response) {

    },
    // Functions to perform actions
    post(request, response) {

    },
    put(request, response) {

    },
    delete(request, response) {
        
    }
}