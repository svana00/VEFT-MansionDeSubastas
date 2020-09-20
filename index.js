const express = require("express");
const bodyParser = require("body-parser");
//const artService = require("./services/artService");
//const artistService = require("./services/artistService");
//const art = require("./schemas/art");
//const artist = require("./schemas/artist");
const port = 3000;
const app = express();

app.use(bodyParser.json);

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
console.log("hi");
// ARTS

app.get("/api/arts", (req, res) => {
    console.log("test");
    res.send();
});

app.get("/api/arts/:id", (req, res) => {
    res.send();
});

app.post("/api/arts", (req, res) => {
    res.send();
});

// ARTISTS

app.get("/api/artists", (req, res) => {
    res.send();
    //res.json(artService.getAllArts());
});

app.get("/api/artists/:id", (req, res) => {
    res.send();
});

app.post("/api/artists", (req, res) => {
    res.send();
});

// CUSTOMERS

app.get("/api/customers", (req, res) => {
    res.send();
});

app.get("/api/customers/:id", (req, res) => {
    res.send();
});

app.post("/api/customers", (req, res) => {
    res.send();
});

app.get("/api/customers/:id/auction-bids", (req, res) => {
    res.send();
});

// AUCTIONS

app.get("/api/auctions", (req, res) => {
    res.send();
});

app.get("/api/auctions/:id", (req, res) => {
    res.send();
});

app.get("/api/auctions/:id/winner", (req, res) => {
    res.send();
});

app.post("/api/auctions", (req, res) => {
    res.send();
});

app.get("/api/auctions/:id/bids", (req, res) => {
    res.send();
});

app.post("/api/auctions/:id/bids", (req, res) => {
    res.send();
});