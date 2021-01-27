const express = require("express");

const routes = express.Router();

const visitorController = require("./controllers/visitor");

// Routes
// Landing page
routes.get("/", visitorController.home);
// Show recipes
routes.get("/recipes", visitorController.index);
// About
routes.get("/about", visitorController.about);
// A specific recipe
routes.get("/recipes/:index", visitorController.show);

module.exports = routes;