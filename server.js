// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================

// Route for displaying about me page (home page)
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Route for displaying portfolio page
app.get("/portfolio", function (req, res) {
    res.sendFile(path.join(__dirname, "portfolio.html"));
});

// Route for displaying contact page
app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "contact.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
