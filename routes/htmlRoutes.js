var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/all", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/all.html"));
    });


    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));

    
    });

    app.get("/clients", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/clients.html"));

    
    });


}