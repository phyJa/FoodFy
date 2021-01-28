const express = require("express");

const routes = express.Router();

// Visitor pages
const visitorController = require("./controllers/visitor");
// Landing page
routes.get("/", visitorController.home);
// Show recipes
routes.get("/recipes", visitorController.index);
// About
routes.get("/about", visitorController.about);
// A specific recipe
routes.get("/recipes/:index", visitorController.show);

// Admin pages
const recipes = require("./controllers/admin");
// List the recipes
routes.get("/admin/recipes", recipes.index);

module.exports = routes;