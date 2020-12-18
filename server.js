const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1> Home page! </h1>');
});

app.listen(port, () => {
    console.log(`Server started at http://127.0.0.1:${port}`);
});