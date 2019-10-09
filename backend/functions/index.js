const functions = require('firebase-functions');
const express   = require('express');
const app       = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });

app.get('/', function (req, res) {
    res.send('Got a GET request');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

app.put('/', function (req, res) {
    res.send('Got a PUT request');
});

app.delete('/', function (req, res) {
    res.send('Got a DELETE request');
});
  
exports.helloWorld = functions.https.onRequest(app);