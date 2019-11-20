const functions = require('firebase-functions');
const express   = require('express');
const admin     = require('firebase-admin');
const cors      = require('cors');
const bp        = require('body-parser');
const app       = express();

app.use(cors());
app.use(express.json());

admin.initializeApp({
    credential: admin.credential.cert("./firebase-keys.json"),
    databaseURL: "https://ucl-dev-boost.firebaseio.com/"
});

const database = admin.database();
const ref = database.ref("/ola");

app.post('/user', async function (req, res) {
    const snapshot = await database.ref('/user').once('value')
    const allUsers = snapshot.val()
    if(allUsers) {
        const doesUserAlreadyExists = allUsers.find(user => user.email === req.body.email)
        if(doesUserAlreadyExists) return res.status(400).send('DEU RUIM; usuario ja existe')
    }
    // const body = JSON.parse(req.body)
    
    await database.ref("/user").push({email: req.body.email, password: req.body.password});
    res.status(200).send({message: 'deu certo', success: true});
});

app.get('/user/:id', function (req, res) {

    const id = req.params.id
    database.ref("/user/"+id).once("value").then( (snapshot) => {
        let data = snapshot.val();
        console.log(data);
        res.status(200).send(data);
    });

});

app.delete('/user/:id', function (req, res) {

    database.ref("/user/"+req.params.id).remove();
    res.status(200).send({message: 'deu certo', success: true});

});

// app.patch('/user', function (req, res) {

//     database.ref("/user/-Lu9POk-UWILzOxAgko2").update({email: 'andre_sfnd@usp.br', password: '12345'});

// });

app.post('/video', function (req, res) {

    database.ref("/video").push({url: req.body.url, titulo: req.body.titulo, descricao: req.body.descricao, userid: req.body.userid});
    res.status(200).send({message: 'deu certo', success: true});

});

app.get('/video/:id', function (req, res) {

    database.ref("/video/"+req.params.id).once("value").then( (snapshot) => {
        let data = snapshot.val();
        console.log(data);
    });

});

app.delete('/video/:id', function (req, res) {

    database.ref("/video/"+req.params.id).remove();
    res.status(200).send({message: 'deu certo', success: true});

});

// app.patch('/video', function (req, res) {

//     database.ref("/video/-Lu9MQEad5MkfEsDoE2j").update({url: "https://www.youtube.com/watch?v=z_aC5xPQ2f4", titulo: 'Ne-yo', descricao: 'Video do passarinho', userid: 'hmm'});

// });

// app.post('/', function (req, res) {

//     const url = JSON.parse(req.body).videoURL;
//     if(url === undefined) res.status(400).send("Must send and URL");
//     database.ref("/videos").push(url).then((videoRef)=>{
//         res.status(200).send(videoRef.key);
//     });
//     res.send(`<iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

// });
  
exports.express = functions.https.onRequest(app);