const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// call routes
let routes= require('./routes');
routes(app);

app.listen(port, () => {
    console.log(`Server started at http://127.0.0.1:${port}`);
});