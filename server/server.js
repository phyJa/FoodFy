// Call express
const express = require("express");
// Call nunjucks
const nunjucks = require("nunjucks");
// Execute the server
const server = express();
// Call the routes
const routes = require("./routes");
// Use the routes
server.use(routes);
// Configure it. Serve the static files
server.use(express.static("public"));
// View engine
server.set("view engine", "njk");
// Configure nunjucks
nunjucks.configure(
    "pages",  
    {
        express: server
    }
);

// Listen
server.listen(
    3000,
    (req, res) => {
        console.log(`Server is listening!`);
    }
);