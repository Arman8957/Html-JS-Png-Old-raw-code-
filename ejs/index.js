const express = require('express');
const app = express();
const port = 3000;

app.set("view-engin", "ejs")

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, (err, res) => {
    console.log('Examplestream listening at http://localhost:${port}')
});