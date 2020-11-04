// Dependencies
// =============================================================
var path = require("path");

module.exports = function (app) {
    // Route for displaying about me page (home page)
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });

    // Route for displaying portfolio page
    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname, "../portfolio.html"));
    });

    // Route for displaying contact page
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname, "../contact.html"));
    });
};
