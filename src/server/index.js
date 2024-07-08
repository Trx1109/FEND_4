var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');
const FormData = require('form-data');
const fetch = require('node-fetch');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname);

// Variables for url and api key
const API_ENDPOINT = "https://api.meaningcloud.com/sentiment-2.1"
const API_KEY = process.env.API_KEY

app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// POST Route
app.post("/api", async function (req, res) {
    let url = req.body.url
    const formdata = new FormData();
    formdata.append("key", API_KEY);
    formdata.append("url", url);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const response = await fetch(API_ENDPOINT, requestOptions)
    let result = await response.json()
    res.send(result)
})


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


