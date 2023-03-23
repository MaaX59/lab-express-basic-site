const { response } = require("express");
const express = require(`express`);
const app = express();

app.get(`/home`, (request, response) => {
    response.sendFile(__dirname + "/home.html");
    console.log(` home test`);
} );

app.get(`/about`, (request, response) => {
    response.sendFile(__dirname + "/about.html");
    console.log(`test about`);
} );
app.get(`/works`, (request, response) => {
    response.sendFile(__dirname + "/works.html");
    console.log(`test works`);
} );



app.listen(3000, () => console.log('My first app listening on port 3000! '));