const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes.js');

routes(app);

app.listen(8000, () => {
    console.log("listening on 8000");
})
