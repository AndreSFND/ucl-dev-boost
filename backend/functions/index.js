const functions = require('firebase-functions');
const express   = require('express');
const admin     = require('firebase-admin');
const cors      = require('cors');
const bp        = require('body-parser');
const app       = express();

app.use(cors());
app.use(bp.json());

admin.initializeApp({
    credential: admin.credential.cert("./firebase-keys.json"),
    databaseURL: "https://ucl-dev-boost.firebaseio.com/"
});

const database = admin.database();
const ref = database.ref("/ola");

app.get('/', function (req, res) {
    // const videoId = req.headers.videoId;
    // database.ref("/videos/" + videoId).once("value", snapshot => {
    //     res.status(200).send(snapshot.val());
    // });
});

app.post('/', function (req, res) {
    const url = JSON.parse(req.body).videoURL;
    if(url === undefined) res.status(400).send("Must send and URL");
    database.ref("/videos").push(url).then((videoRef)=>{
        res.status(200).send(videoRef.key);
    });
    // res.send(`<iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
});

app.put('/', function (req, res) {
    res.send('Got a PUT request');
});

app.delete('/', function (req, res) {
    res.send('Got a DELETE request');
});
  
exports.helloWorld = functions.https.onRequest(app);