const recipesData = require("../../data/data");

module.exports = {
    index(request, response) {
        return response.render(
            "admin/recipes",
            {
                recipes: recipesData
            }
        );
    }
}