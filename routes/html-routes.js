
const path = require("path");

module.exports = (app) => {

     // ladding or main page 
    app.get("/", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/index.html"));

    });
   
    // exrices page
    app.get("/exercise", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/exercise.html"));

    });
    
    // state page
    app.get("/stats", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/stats.html"));

    });


};