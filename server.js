const express = require('express');
const app = express();
const domain = 'http://127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({message: 'Welcome to the SASsy System...'});
});

app.get('/dashboard', (req, res) => {
    res.send('SASsy Dashboard...');
});

app.listen(port, () => {
    console.log(`App listening on ${domain}:${port}`);
});

