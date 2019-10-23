const functions = require("firebase-functions");
const express = require("express");
const fs = require("fs");
const cors = require("cors")({ origin: true });
const app = express();
app.use(cors);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
/*
app.get("/", (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
  res.send(`
      <!doctype html>
      <head>
        <title>Time</title>
        <link rel="stylesheet" href="/style.css">
        <script src="/script.js"></script>
      </head>
      <body>
        <p>In London, the clock strikes:
          <span id="bongs">${"BONG ".repeat(hours)}</span></p>
        <button onClick="refresh(this)">Refresh</button>
        <h1>1 2 3 from me..</h1>
      </body>
    </html>`);
});*/

app.get("/api", (req, res) => {
  /*
  const date = new Date();
  const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
  res.json({ bongs: "BONG ".repeat(hours) });
  */

  fs.readFile(__dirname + "/" + "codes.json", "utf-8", (err, data) => {
    res.send(data);
  });
});

app.get("/api/bongs", (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
  res.json({ bongs: "BONG ".repeat(hours) });
});

exports.app = functions.https.onRequest(app);
