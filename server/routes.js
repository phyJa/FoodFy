const express = require("express");

const routes = express.Router();

// Visitor pages
const visitorController = require("./controllers/visitor");
routes.get("/", visitorController.home); // Landing page
routes.get("/recipes", visitorController.index); // Show recipes
routes.get("/about", visitorController.about); // About
routes.get("/recipes/:index", visitorController.show); // A specific recipe

// Admin
const recipes = require("./controllers/admin");

// Render pages
routes.get("/admin/recipes", recipes.index);
routes.get("/admin/recipes/create", recipes.create); // Show the form of a new recipe
routes.get("/admin/recipes/:id", recipes.show); // Show details of a recipe
routes.get("/admin/recipes/:id/edit", recipes.edit); // Show the form to edit a recipe 
// Actions
routes.post("/admin/recipes", recipes.post); // Register a new recipe
routes.put("/admin/recipes", recipes.put); // Edit a recipe
routes.delete("/admin/recipes", recipes.delete); // Delete a recipe

module.exports = routes;